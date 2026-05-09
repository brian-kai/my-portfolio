"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import gaeulImage from "../image/Gaeul.jpg";
import leeseoImage from "../image/leeseo.jpg";
import lizImage from "../image/Liz.jpg";
import reiImage from "../image/Rei.jpg";
import wonyoungImage from "../image/wonyoung.jpg";
import yujinImage from "../image/yujin.jpg";

type Task = {
  id: number;
  text: string;
  done: boolean;
};

const members = [
  {
    name: "Yujin",
    role: "Leader / Vocal",
    color: "from-pink-300 via-rose-300 to-fuchsia-400",
    image: yujinImage,
    note: "舞台掌控力強，適合放在網站主視覺或活動主持感的區塊。",
  },
  {
    name: "Gaeul",
    role: "Rap / Dance",
    color: "from-amber-200 via-orange-300 to-pink-300",
    image: gaeulImage,
    note: "俐落、沉穩，適合呈現節奏感與舞蹈亮點。",
  },
  {
    name: "Rei",
    role: "Rap / Vocal",
    color: "from-violet-300 via-purple-300 to-indigo-400",
    image: reiImage,
    note: "辨識度高，適合用在可愛又帶個性的互動卡片。",
  },
  {
    name: "Wonyoung",
    role: "Vocal",
    color: "from-sky-200 via-cyan-200 to-pink-200",
    image: wonyoungImage,
    note: "優雅亮眼，適合搭配封面、造型與視覺焦點。",
  },
  {
    name: "Liz",
    role: "Vocal",
    color: "from-lime-200 via-emerald-200 to-cyan-300",
    image: lizImage,
    note: "聲線清亮，適合放在歌曲推薦與歌唱亮點。",
  },
  {
    name: "Leeseo",
    role: "Vocal",
    color: "from-blue-200 via-indigo-200 to-violet-300",
    image: leeseoImage,
    note: "清新、有活力，適合放在粉絲任務或新手導覽。",
  },
];

const releases = [
  {
    title: "ELEVEN",
    type: "Debut Single",
    mood: "神秘、華麗、第一印象強烈",
  },
  {
    title: "LOVE DIVE",
    type: "Single",
    mood: "自信、優雅、代表性舞台風格",
  },
  {
    title: "After LIKE",
    type: "Single",
    mood: "明亮、復古、適合粉絲應援",
  },
  {
    title: "I AM",
    type: "Album Track",
    mood: "高亢、成長、適合作為主視覺情緒",
  },
];

const starterTasks: Task[] = [
  { id: 1, text: "整理 IVE 成員資料", done: false },
  { id: 2, text: "更新歌曲推薦清單", done: false },
  { id: 3, text: "規劃粉絲應援任務", done: true },
];

const quizOptions = [
  { label: "舞台表演", result: "你適合做成員舞台精華整理。" },
  { label: "歌曲收藏", result: "你適合做 IVE 歌曲推薦與播放清單。" },
  { label: "造型視覺", result: "你適合設計回歸概念與相簿頁。" },
];

export default function IvePage() {
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const [tasks, setTasks] = useState(starterTasks);
  const [text, setText] = useState("");
  const [quizResult, setQuizResult] = useState(quizOptions[0].result);

  const completedCount = useMemo(
    () => tasks.filter((task) => task.done).length,
    [tasks],
  );

  function addTask() {
    const nextText = text.trim();

    if (!nextText) {
      return;
    }

    setTasks((currentTasks) => [
      { id: Date.now(), text: nextText, done: false },
      ...currentTasks,
    ]);
    setText("");
  }

  function toggleTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function removeTask(id: number) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  return (
    <main className="min-h-screen bg-[#0f1021] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1021]/85 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-bold">
            Kevin Huang
          </Link>

          <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
            <a href="#members" className="hover:text-white">
              Members
            </a>
            <a href="#music" className="hover:text-white">
              Music
            </a>
            <a href="#mission" className="hover:text-white">
              Mission
            </a>
            <Link
              href="/#projects"
              className="rounded-full border border-white/15 px-4 py-2 text-slate-200 transition hover:border-pink-300/60 hover:text-white"
            >
              回作品集
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1fr_430px]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-pink-300">
            IVE Fan Website
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-none md:text-7xl">
            IVE DIVE Hub
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            以 IVE 為主題的粉絲網站，整合成員介紹、音樂作品、互動任務與粉絲測驗。這個頁面從原本的 HTML、CSS、JavaScript 待辦清單延伸成完整作品展示。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#members"
              className="rounded-full bg-pink-400 px-5 py-3 text-sm font-bold text-[#151225] transition hover:bg-pink-300"
            >
              查看成員
            </a>
            <a
              href="#mission"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-pink-300/60"
            >
              開始任務
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-pink-950/40">
          <div className="aspect-[4/5] rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,#ffb7dd,transparent_34%),radial-gradient(circle_at_80%_30%,#9be7ff,transparent_30%),linear-gradient(150deg,#2b1a58,#14142c_48%,#ff6fbd)] p-6">
            <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/20 bg-black/20 p-6 backdrop-blur-sm">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/70">
                  Fan Concept
                </p>
                <h2 className="mt-3 text-5xl font-black">IVE</h2>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {members.map((member) => (
                  <button
                    key={member.name}
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className={`aspect-square rounded-2xl bg-gradient-to-br ${member.color} p-1 text-left transition hover:-translate-y-1`}
                  >
                    <span className="relative flex h-full items-end overflow-hidden rounded-[0.85rem] bg-[#101022]/35 p-2 text-xs font-bold">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 h-full w-full object-contain"
                        sizes="120px"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <span className="relative z-10">
                      {member.name}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="members" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
              Members
            </p>
            <h2 className="text-4xl font-bold">成員介紹</h2>
          </div>

          <p className="max-w-2xl leading-7 text-slate-300">
            點選每位成員卡片，右側會切換對應的角色與網站內容定位。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <button
                key={member.name}
                type="button"
                onClick={() => setSelectedMember(member)}
                className={`rounded-2xl border p-4 text-left transition hover:-translate-y-1 ${
                  selectedMember.name === member.name
                    ? "border-pink-300/70 bg-pink-300/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div
                  className={`relative mb-4 aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br ${member.color} p-1`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-lg bg-[#101022]/45 object-contain transition duration-500 hover:scale-105"
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{member.role}</p>
              </button>
            ))}
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-pink-300">
              Selected
            </p>
            <div
              className={`relative mt-5 aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br ${selectedMember.color} p-1`}
            >
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                className="h-full w-full rounded-[0.85rem] bg-[#101022]/45 object-contain"
                sizes="(min-width: 1024px) 420px, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1021]/80 via-transparent to-transparent" />
            </div>
            <h3 className="mt-4 text-4xl font-black">{selectedMember.name}</h3>
            <p className="mt-2 text-slate-400">{selectedMember.role}</p>
            <p className="mt-6 leading-8 text-slate-300">
              {selectedMember.note}
            </p>
          </aside>
        </div>
      </section>

      <section id="music" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
          Music
        </p>
        <h2 className="mb-8 text-4xl font-bold">作品推薦</h2>

        <div className="grid gap-5 md:grid-cols-2">
          {releases.map((release, index) => (
            <article
              key={release.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{release.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{release.type}</p>
                </div>
                <span className="text-4xl font-black text-white/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="leading-7 text-slate-300">{release.mood}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="mission" className="mx-auto grid max-w-6xl gap-6 px-6 py-20 lg:grid-cols-[1fr_0.8fr]">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
                Mission
              </p>
              <h2 className="text-3xl font-bold">DIVE 任務清單</h2>
            </div>

            <span className="rounded-full bg-pink-400/10 px-4 py-2 text-sm text-pink-200">
              {completedCount}/{tasks.length}
            </span>
          </div>

          <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/10">
            <input
              value={text}
              onChange={(event) => setText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  addTask();
                }
              }}
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-slate-400"
              placeholder="新增 IVE 任務"
            />
            <button
              type="button"
              onClick={addTask}
              className="bg-pink-400 px-5 py-3 text-lg font-bold text-[#101022] transition hover:bg-pink-300"
              aria-label="新增任務"
            >
              +
            </button>
          </div>

          <ul className="mt-5 space-y-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#17172d] px-4 py-3"
              >
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                  className="h-4 w-4 accent-pink-400"
                />

                <span
                  className={`flex-1 text-sm ${
                    task.done ? "text-slate-500 line-through" : "text-slate-100"
                  }`}
                >
                  {task.text}
                </span>

                <button
                  type="button"
                  onClick={() => removeTask(task.id)}
                  className="rounded-full px-3 py-1 text-sm text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  刪除
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
            Quiz
          </p>
          <h2 className="text-3xl font-bold">你的 DIVE 類型</h2>
          <p className="mt-4 leading-7 text-slate-300">
            選擇你最喜歡的粉絲活動方向，系統會推薦適合延伸的網站功能。
          </p>

          <div className="mt-6 grid gap-3">
            {quizOptions.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => setQuizResult(option.result)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm transition hover:border-pink-300/60 hover:bg-pink-300/10"
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-pink-400/10 p-5 text-pink-100">
            {quizResult}
          </div>
        </section>
      </section>
    </main>
  );
}
