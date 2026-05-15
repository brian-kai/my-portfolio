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
  category: string;
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
    youtubeUrl: "https://www.youtube.com/watch?v=--FmExEAsM8",
    mood: "神秘、華麗、第一印象強烈",
  },
  {
    title: "LOVE DIVE",
    type: "Single",
    youtubeUrl: "https://www.youtube.com/watch?v=Y8JFxS1HlDo",
    mood: "自信、優雅、代表性舞台風格",
  },
  {
    title: "After LIKE",
    type: "Single",
    youtubeUrl: "https://www.youtube.com/watch?v=F0B7HDiY-10",
    mood: "明亮、復古、適合粉絲應援",
  },
  {
    title: "I AM",
    type: "Album Track",
    youtubeUrl: "https://www.youtube.com/watch?v=6ZUIwj3FgUY",
    mood: "高亢、成長、適合作為主視覺情緒",
  },
  {
    title: "Kitsch",
    type: "Pre-release / Title Track",
    youtubeUrl: "https://www.youtube.com/watch?v=pG6iaOMV46I",
    mood: "率性、酷感、帶出 IVE 的反差魅力",
  },
  {
    title: "Either Way",
    type: "Title Track",
    youtubeUrl: "https://www.youtube.com/watch?v=_Hu4GYtye5U",
    mood: "柔和、內省、情緒敘事感強",
  },
  {
    title: "Off The Record",
    type: "Title Track",
    youtubeUrl: "https://www.youtube.com/watch?v=_ApV7Lm87cg",
    mood: "夢幻、輕盈、帶有夜晚聊天的氛圍",
  },
  {
    title: "Baddie",
    type: "Title Track",
    youtubeUrl: "https://www.youtube.com/watch?v=Da4P2uT4mVc",
    mood: "俐落、強勢、適合展現酷帥舞台",
  },
  {
    title: "HEYA",
    type: "Title Track",
    youtubeUrl: "https://www.youtube.com/watch?v=07EzMbVH3QE",
    mood: "華麗、東方感、舞台視覺衝擊強",
  },
  {
    title: "Accendio",
    type: "Title Track",
    youtubeUrl: "https://www.youtube.com/watch?v=PGLx4V680J8",
    mood: "神祕、戲劇化、帶有奇幻敘事感",
  },
  {
    title: "REBEL HEART",
    type: "Pre-release / Title Track",
    youtubeUrl: "https://www.youtube.com/watch?v=g36q0ZLvygQ",
    mood: "壯闊、團結、適合熱血群像感",
  },
  {
    title: "ATTITUDE",
    type: "Title Track",
    youtubeUrl: "https://www.youtube.com/watch?v=38xYeot-ciM",
    mood: "自信、灑脫、延續 IVE 的主體感",
  },
  {
    title: "XOXZ",
    type: "Title Track",
    youtubeUrl: "https://www.youtube.com/watch?v=B1ShLiq3EVc",
    mood: "低調、神祕、帶有秘密訊號般的氛圍",
  },
  {
    title: "BANG BANG",
    type: "Pre-release / Title Track",
    youtubeUrl: "https://www.youtube.com/watch?v=9qkpcLK422o",
    mood: "強烈、節奏感、適合舞台爆發力",
  },
  {
    title: "BLACKHOLE",
    type: "Title Track",
    youtubeUrl: "https://www.youtube.com/watch?v=1Lmy7qwmSMc",
    mood: "深邃、強勢、帶有吸引力與沉浸感",
  },
];

const starterTasks: Task[] = [
  { id: 1, text: "整理 IVE 成員資料與代表舞台", done: false, category: "Content" },
  { id: 2, text: "更新歌曲推薦清單與 YouTube 連結", done: false, category: "Music" },
  { id: 3, text: "規劃粉絲互動任務與測驗題目", done: true, category: "Interaction" },
];

const suggestedTasks = [
  "新增成員造型精選",
  "補上 MV 發行資訊",
  "設計粉絲投票題",
];

const websiteQuizOptions = [
  {
    label: "舞台表演",
    eyebrow: "Stage Archive",
    result:
      "適合製作成員舞台精華整理頁，收集舞台影片、直拍連結、表情亮點與服裝造型，讓粉絲快速找到每位成員的高光片段。",
    features: ["舞台影片", "直拍連結", "造型整理"],
  },
  {
    label: "歌曲收藏",
    eyebrow: "Music Library",
    result:
      "適合製作 IVE 歌曲收藏頁，整理 MV、專輯資訊、推薦曲目與 YouTube 連結，也可以加入個人播放清單或歌曲心得。",
    features: ["MV 清單", "推薦曲目", "播放連結"],
  },
  {
    label: "造型視覺",
    eyebrow: "Visual Board",
    result:
      "適合製作成員造型圖鑑頁，整理專輯概念照、舞台穿搭、髮型變化與視覺主題，做成適合瀏覽與收藏的圖像型網站。",
    features: ["概念照", "穿搭紀錄", "視覺主題"],
  },
];

export default function IvePage() {
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const [tasks, setTasks] = useState(starterTasks);
  const [text, setText] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState(websiteQuizOptions[0]);
  const [showAllSongs, setShowAllSongs] = useState(false);

  const completedCount = useMemo(
    () => tasks.filter((task) => task.done).length,
    [tasks],
  );
  const progressPercent = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;
  const visibleReleases = showAllSongs ? releases : releases.slice(0, 6);

  function addTask() {
    const nextText = text.trim();

    if (!nextText) {
      return;
    }

    setTasks((currentTasks) => [
      { id: Date.now(), text: nextText, done: false, category: "Custom" },
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
    <main className="min-h-screen overflow-x-hidden bg-[#0f1021] text-white [overflow-wrap:anywhere]">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1021]/85 backdrop-blur">
        <div className="relative mx-auto flex max-w-6xl items-center justify-center px-6 py-4 md:justify-between">
          <Link
            href="/"
            className="absolute left-6 rounded-full border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:border-pink-300/60 hover:text-white md:hidden"
          >
            返回
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">
              Kevin Huang | 黃凱浚 Kai-Chun Huang
            </span>
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
              返回
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-[1fr_430px] md:gap-10 md:py-16">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-pink-300">
            IVE Fan Website
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-none md:text-7xl">
            IVE DIVE Hub
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-300 md:mt-6 md:text-lg md:leading-8">
            以 IVE 為主題的粉絲網站，整合成員介紹、音樂作品、互動任務與粉絲測驗。這個頁面從原本的 HTML、CSS、JavaScript 待辦清單延伸成完整作品展示。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#members"
              className="rounded-full bg-pink-400 px-5 py-3 text-center text-sm font-bold text-[#151225] transition hover:bg-pink-300"
            >
              查看成員
            </a>
            <a
              href="#mission"
              className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-bold text-white transition hover:border-pink-300/60"
            >
              開始任務
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-pink-950/40 md:rounded-[2rem] md:p-5">
          <div className="aspect-[4/5] rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,#ffb7dd,transparent_34%),radial-gradient(circle_at_80%_30%,#9be7ff,transparent_30%),linear-gradient(150deg,#2b1a58,#14142c_48%,#ff6fbd)] p-4 md:p-6">
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

      <section id="members" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
              Members
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">成員介紹</h2>
          </div>

          <p className="max-w-2xl text-[15px] leading-7 text-slate-300 md:text-base">
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
                className={`rounded-2xl border p-3 text-left transition hover:-translate-y-1 md:p-4 ${
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
                <h3 className="text-lg font-bold md:text-xl">{member.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{member.role}</p>
              </button>
            ))}
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
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
            <h3 className="mt-4 text-3xl font-black md:text-4xl">
              {selectedMember.name}
            </h3>
            <p className="mt-2 text-slate-400">{selectedMember.role}</p>
            <p className="mt-5 text-[15px] leading-7 text-slate-300 md:mt-6 md:text-base md:leading-8">
              {selectedMember.note}
            </p>
          </aside>
        </div>
      </section>

      <section id="music" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
          Music
        </p>
        <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">
          作品推薦
        </h2>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {visibleReleases.map((release, index) => (
            <a
              key={release.title}
              href={release.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-pink-300/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-300/70 md:p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-4 md:mb-5 md:items-center">
                <div>
                  <h3 className="text-lg font-bold md:text-2xl">
                    {release.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{release.type}</p>
                </div>
                <span className="text-3xl font-black text-white/10 transition group-hover:text-pink-300/35 md:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="text-[15px] leading-7 text-slate-300 md:text-base">
                {release.mood}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-pink-300 transition group-hover:text-pink-200 md:mt-5">
                Watch on YouTube
                <span aria-hidden="true">-&gt;</span>
              </div>
            </a>
          ))}
        </div>

        {releases.length > 6 ? (
          <button
            type="button"
            onClick={() => setShowAllSongs((current) => !current)}
            className="mt-6 w-full rounded-full border border-pink-300/30 px-5 py-3 text-sm font-bold text-pink-200 transition hover:border-pink-300/70 hover:bg-pink-300/10 md:mx-auto md:flex md:w-fit md:px-8"
          >
            {showAllSongs ? "收合作品" : "顯示更多作品"}
          </button>
        ) : null}
      </section>

      <section id="mission" className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:py-20 lg:grid-cols-[1.12fr_0.88fr]">
        <section className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 md:p-6">
          <div className="border-b border-white/10 pb-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
                  Mission
                </p>
                <h2 className="text-2xl font-bold md:text-3xl">DIVE 任務中心</h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-300">
                  把粉絲網站拆成可以逐步完成的任務，整理成員資料、歌曲清單與互動功能的製作進度。
                </p>
              </div>

              <span className="inline-flex min-w-14 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-pink-300/25 bg-pink-300/10 px-4 py-1.5 text-sm font-bold text-pink-100">
                {completedCount}/{tasks.length}
              </span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-pink-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto]">
            <input
              value={text}
              onChange={(event) => setText(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  addTask();
                }
              }}
              className="min-w-0 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-pink-300/60"
              placeholder="新增一個 IVE 網站任務"
            />
            <button
              type="button"
              onClick={addTask}
              className="rounded-xl border border-pink-300/40 bg-pink-300/15 px-5 py-3 text-sm font-bold text-pink-100 transition hover:border-pink-200/70 hover:bg-pink-300/25"
            >
              新增
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Quick add
            </span>
            {suggestedTasks.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() =>
                  setTasks((currentTasks) => [
                    {
                      id: Date.now() + suggestion.length,
                      text: suggestion,
                      done: false,
                      category: "Idea",
                    },
                    ...currentTasks,
                  ])
                }
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-pink-300/50 hover:bg-pink-300/10 hover:text-white"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <ul className="mt-6 space-y-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="grid gap-3 rounded-xl border border-white/10 bg-[#17172d] px-4 py-3 transition hover:border-pink-300/30 md:grid-cols-[auto_1fr_auto] md:items-center"
              >
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                  className="h-4 w-4 accent-pink-400"
                />

                <div className="min-w-0">
                  <p
                    className={`text-sm font-semibold ${
                      task.done ? "text-slate-500 line-through" : "text-slate-100"
                    }`}
                  >
                    {task.text}
                  </p>
                  <span className="mt-2 inline-flex rounded-full bg-white/10 px-2 py-1 text-[11px] font-semibold text-pink-200">
                    {task.category}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => removeTask(task.id)}
                  className="w-fit rounded-full px-3 py-1 text-sm text-slate-400 transition hover:bg-white/10 hover:text-white md:justify-self-end"
                >
                  刪除
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 md:p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
            Quiz
          </p>
          <h2 className="text-2xl font-bold md:text-3xl">DIVE 網頁企劃</h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-300 md:text-base">
            選一個粉絲內容方向，看看最適合延伸成哪一種網站作品。
          </p>

          <div className="mt-6 grid gap-3">
            {websiteQuizOptions.map((option) => {
              const isSelected = selectedQuiz.label === option.label;

              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setSelectedQuiz(option)}
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    isSelected
                      ? "border-pink-300/60 bg-pink-300/12"
                      : "border-white/10 bg-white/5 hover:border-pink-300/50 hover:bg-pink-300/10"
                  }`}
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-pink-300">
                    {option.eyebrow}
                  </span>
                  <span className="mt-1 block text-base font-bold text-white">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-[#17172d] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-300">
              Recommended Build
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">{selectedQuiz.label}</h3>
            <p className="mt-3 text-[15px] leading-7 text-slate-300">
              {selectedQuiz.result}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {selectedQuiz.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full bg-pink-300/10 px-3 py-1 text-xs font-semibold text-pink-100"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
