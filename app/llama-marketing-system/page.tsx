import Image from "next/image";
import Link from "next/link";

import commentHeatmap from "./images/comment-heatmap.png";
import descriptionHeatmap from "./images/description-heatmap.png";
import hdbscanCluster from "./images/hdbscan-cluster.png";
import kmeansCluster from "./images/kmeans-cluster.png";
import trainingLoss from "./images/training-loss.png";

const modules = [
  {
    title: "產品資訊之消費者偏好分析",
    description:
      "針對產品資訊文本進行預處理、TextRank 關鍵字擷取、LDA 主題分析與 K-Means 消費者偏好分群。",
  },
  {
    title: "行銷文案語義偏好分析",
    description:
      "整理行銷文案語料，透過 HDBSCAN 與語意向量分析不同文案特徵與偏好分布。",
  },
  {
    title: "個人化產品行銷文案生成",
    description:
      "以 LLaMA 3 為核心進行訓練資料處理、模型訓練趨勢觀察與個人化文案生成流程設計。",
  },
];

const gallery = [
  {
    title: "K-Means 消費者偏好分群",
    image: kmeansCluster,
    alt: "K-Means 消費者偏好分群結果圖",
  },
  {
    title: "HDBSCAN 語義群集分布",
    image: hdbscanCluster,
    alt: "HDBSCAN 語義群集分布圖",
  },
  {
    title: "模型訓練 Loss",
    image: trainingLoss,
    alt: "模型訓練 Loss 趨勢圖",
  },
  {
    title: "評論語意熱力圖",
    image: commentHeatmap,
    alt: "評論語意熱力圖",
  },
  {
    title: "產品描述語意熱力圖",
    image: descriptionHeatmap,
    alt: "產品描述語意熱力圖",
  },
];

const tags = [
  "JSP",
  "SQL Server",
  "LLaMA 3",
  "TextRank",
  "LDA",
  "K-Means",
  "HDBSCAN",
  "Marketing Copy",
];

export default function LlamaMarketingSystemPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_14%_18%,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_86%_8%,rgba(168,85,247,0.2),transparent_34%),linear-gradient(135deg,#020617_0%,#071329_45%,#111827_100%)] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          <span aria-hidden="true">&lt;-</span>
          Back to Projects
        </Link>

        <section className="grid gap-10 border-b border-white/10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
              JSP / NLP / LLM System
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              LLaMA 3 個人化產品行銷文案生成系統
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              以暑期網站實作為基礎，整合產品資訊分析、行銷文案語義偏好分析與
              LLaMA 3 文案生成流程，將原本的 JSP 系統整理成可展示的作品頁。
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image
              src={hdbscanCluster}
              alt="語意偏好分析群集展示"
              className="aspect-[4/3] w-full bg-white object-contain p-3"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </section>

        <section className="py-14">
          <h2 className="text-3xl font-bold">系統模組</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold leading-8">
                  {module.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <h2 className="text-3xl font-bold">成果展示</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {gallery.map((item) => (
              <a
                key={item.title}
                href={item.image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[4/3] w-full border-b border-white/10 bg-slate-950/50 object-contain p-3 transition duration-300 group-hover:scale-[1.02]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
