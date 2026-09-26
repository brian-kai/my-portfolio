"use client";

import { useEffect, useRef } from "react";

/** Matches the 64px CSS grid layered underneath, so pulses travel along its lines. */
const GRID = 64;
const TRAIL_LENGTH = 56;
const LINK_DISTANCE = 150;
const POINTER_RADIUS = 160;
/** ~30fps: the motion is slow, and each frame re-composites the page's backdrop-blur layers. */
const FRAME_INTERVAL = 1000 / 30;

type Pulse = { horizontal: boolean; x: number; y: number; speed: number };
type Node = { x: number; y: number; vx: number; vy: number };

/**
 * Decorative canvas: pulses flowing along the grid plus a sparse, drifting node network.
 * Progressive enhancement: renders nothing under prefers-reduced-motion, pauses in hidden tabs.
 */
export default function DataFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    let width = 0;
    let height = 0;
    let pulses: Pulse[] = [];
    let nodes: Node[] = [];
    let pointer: { x: number; y: number } | null = null;
    let frame = 0;
    let lastDraw = 0;
    let running = false;

    const spawnPulse = (): Pulse => {
      const horizontal = Math.random() < 0.5;
      const lane = (size: number) => GRID * Math.floor(Math.random() * Math.max(1, size / GRID));
      return {
        horizontal,
        x: horizontal ? -TRAIL_LENGTH : lane(width),
        y: horizontal ? lane(height) : -TRAIL_LENGTH,
        // Pixels per 60fps-equivalent frame; scaled by elapsed time when drawing.
        speed: 0.7 + Math.random() * 1.1,
      };
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const widthChanged = window.innerWidth !== width;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      // Mobile address bars resize only the height while scrolling; keep particles in place.
      if (!widthChanged) return;

      const area = width * height;
      const small = width < 768;
      pulses = Array.from({ length: Math.min(small ? 8 : 18, Math.round(area / 60000)) }, () => {
        const pulse = spawnPulse();
        // Stagger the first wave across the screen instead of all entering at once.
        if (pulse.horizontal) pulse.x = Math.random() * width;
        else pulse.y = Math.random() * height;
        return pulse;
      });
      nodes = Array.from({ length: Math.min(small ? 14 : 36, Math.round(area / 42000)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const draw = (step: number) => {
      context.clearRect(0, 0, width, height);

      // Grid intersections light up around the pointer.
      if (pointer) {
        const startX = Math.max(0, Math.floor((pointer.x - POINTER_RADIUS) / GRID) * GRID);
        const startY = Math.max(0, Math.floor((pointer.y - POINTER_RADIUS) / GRID) * GRID);
        for (let x = startX; x <= pointer.x + POINTER_RADIUS; x += GRID) {
          for (let y = startY; y <= pointer.y + POINTER_RADIUS; y += GRID) {
            const distance = Math.hypot(x - pointer.x, y - pointer.y);
            if (distance > POINTER_RADIUS) continue;
            context.fillStyle = `rgba(110, 231, 183, ${(1 - distance / POINTER_RADIUS) * 0.55})`;
            context.fillRect(x - 1.5, y - 1.5, 3, 3);
          }
        }
      }

      // Pulses with a fading trail along grid lines.
      for (const pulse of pulses) {
        if (pulse.horizontal) pulse.x += pulse.speed * step;
        else pulse.y += pulse.speed * step;

        const tailX = pulse.horizontal ? pulse.x - TRAIL_LENGTH : pulse.x;
        const tailY = pulse.horizontal ? pulse.y : pulse.y - TRAIL_LENGTH;
        const trail = context.createLinearGradient(tailX, tailY, pulse.x, pulse.y);
        trail.addColorStop(0, "rgba(52, 211, 153, 0)");
        trail.addColorStop(1, "rgba(52, 211, 153, 0.4)");
        context.strokeStyle = trail;
        context.lineWidth = 1.5;
        context.beginPath();
        context.moveTo(tailX, tailY);
        context.lineTo(pulse.x, pulse.y);
        context.stroke();
        context.fillStyle = "rgba(167, 243, 208, 0.85)";
        context.fillRect(pulse.x - 1.5, pulse.y - 1.5, 3, 3);

        if (pulse.x > width + TRAIL_LENGTH || pulse.y > height + TRAIL_LENGTH) Object.assign(pulse, spawnPulse());
      }

      // Drifting node network, gently pulled toward the pointer.
      for (const node of nodes) {
        if (pointer) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          if (Math.hypot(dx, dy) < POINTER_RADIUS) {
            node.x += dx * 0.004 * step;
            node.y += dy * 0.004 * step;
          }
        }
        node.x += node.vx * step;
        node.y += node.vy * step;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      context.lineWidth = 1;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const distance = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (distance > LINK_DISTANCE) continue;
          context.strokeStyle = `rgba(52, 211, 153, ${(1 - distance / LINK_DISTANCE) * 0.24})`;
          context.beginPath();
          context.moveTo(nodes[i].x, nodes[i].y);
          context.lineTo(nodes[j].x, nodes[j].y);
          context.stroke();
        }
      }

      context.fillStyle = "rgba(110, 231, 183, 0.6)";
      for (const node of nodes) {
        context.beginPath();
        context.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
        context.fill();
      }
    };

    const loop = (time: number) => {
      frame = requestAnimationFrame(loop);
      const elapsed = time - lastDraw;
      // Small tolerance so rAF timestamp jitter doesn't skip to every third frame at 60Hz.
      if (elapsed < FRAME_INTERVAL - 4) return;
      // Clamp so a long stall (e.g. a background tab) doesn't teleport everything.
      draw(lastDraw ? Math.min(elapsed / (1000 / 60), 4) : 1);
      lastDraw = time;
    };

    const start = () => {
      if (running || reducedMotion.matches || document.hidden) return;
      running = true;
      lastDraw = 0;
      frame = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (finePointer.matches) pointer = { x: event.clientX, y: event.clientY };
    };
    const onPointerLeave = () => {
      pointer = null;
    };
    const onVisibilityChange = () => (document.hidden ? stop() : start());
    const onMotionChange = () => {
      if (reducedMotion.matches) {
        stop();
        context.clearRect(0, 0, width, height);
      } else {
        start();
      }
    };
    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150);
    };

    resize();
    start();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 h-full w-full" />;
}
