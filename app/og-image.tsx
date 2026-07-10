import { ImageResponse } from "next/og";
import { siteTitle } from "./site-config";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";
export const ogImageAlt = siteTitle;

const tags = ["LLaMA 3", "NLP / LLM", "Data Analysis"];

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#070a0d",
          backgroundImage:
            "radial-gradient(circle at 16% 18%, rgba(16,185,129,0.35) 0%, rgba(16,185,129,0) 32%), radial-gradient(circle at 84% 12%, rgba(245,158,11,0.22) 0%, rgba(245,158,11,0) 28%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6ee7b7",
          }}
        >
          Kevin Huang · AI Engineer / AI Product Associate
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            NLP / LLM AI Engineer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              color: "#cbd5e1",
              maxWidth: 900,
            }}
          >
            AI, NLP, and data analysis portfolio — research, demos, and
            production workflows.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "12px 24px",
                fontSize: 24,
                fontWeight: 600,
                color: "#a7f3d0",
                border: "2px solid rgba(110,231,183,0.4)",
                backgroundColor: "rgba(16,185,129,0.08)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    ogImageSize,
  );
}
