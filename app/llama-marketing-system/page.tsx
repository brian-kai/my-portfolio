import Link from "next/link";
import ImageLightboxGallery from "../image-lightbox-gallery";

import commentHeatmap from "./images/comment-heatmap.png";
import descriptionHeatmap from "./images/description-heatmap.png";
import hdbscanCluster from "./images/hdbscan-cluster.png";
import kmeansCluster from "./images/kmeans-cluster.png";
import trainingLoss from "./images/training-loss.png";

const modules = [
  {
    title: "產品資訊之消費者偏好分析",
    summary:
      "針對產品資訊文本進行預處理、TextRank 關鍵字擷取、LDA 主題分析與 K-Means 消費者偏好分群。",
    features: [
      "產品資訊文本預處理",
      "TextRank 產品資訊關鍵字擷取",
      "LDA 產品資訊主題分析",
      "K-Means 消費者偏好分析",
    ],
    steps: [
      "選擇 Amazon、Walmart、eBay 等產品資料來源",
      "移除標點符號、轉小寫、去除停用詞並進行詞形還原",
      "擷取產品描述與評論中的核心關鍵詞",
      "結合語意向量、情感向量與產品描述向量進行偏好分群",
    ],
    methods: ["TextRank", "LDA", "K-Means", "PCA", "Sentiment Vector"],
  },
  {
    title: "行銷文案語義偏好分析",
    summary:
      "整理行銷文案語料，透過 HDBSCAN 與語意向量分析不同文案特徵與偏好分布。",
    features: [
      "行銷文案文本預處理",
      "HDBSCAN 語義偏好分析",
      "OpenAI 行銷文案資料增強",
    ],
    steps: [
      "載入評論或文案語義向量資料",
      "設定 UMAP 降維參數與 HDBSCAN 分群條件",
      "標註不同文案群集的主題與語氣偏好",
      "設定語氣風格、適用族群與強調主題進行資料增強",
    ],
    methods: ["SBERT", "UMAP", "HDBSCAN", "OpenAI", "Prompt Design"],
  },
  {
    title: "個人化產品行銷文案生成",
    summary:
      "以 LLaMA 3 為核心進行訓練資料處理、模型訓練趨勢觀察與個人化文案生成流程設計。",
    features: [
      "產品行銷文案生成模型訓練集預處理",
      "LLaMA 3 個人化產品行銷文案生成模型建構與訓練",
      "個人化產品行銷文案生成",
    ],
    steps: [
      "選擇產品描述、評論偏好與增強文案資料集",
      "設定 LLaMA 3-8B、QLoRA 等模型與微調方法",
      "觀察訓練 loss 與生成品質",
      "依產品資料集輸出個人化行銷文案",
    ],
    methods: ["LLaMA 3", "QLoRA", "Fine-tuning", "Training Loss", "Generation"],
  },
];

const workflow = [
  "產品與評論資料蒐集",
  "文字預處理與關鍵字擷取",
  "主題分析與偏好分群",
  "語義偏好分析與資料增強",
  "LLaMA 3 模型訓練",
  "個人化行銷文案生成",
];

const gallery = [
  {
    title: "K-Means 消費者偏好分群",
    description: "呈現產品資訊特徵建構後的消費者偏好分群結果。",
    image: kmeansCluster,
    alt: "K-Means 消費者偏好分群圖",
  },
  {
    title: "HDBSCAN 語義偏好分析",
    description: "透過語意向量與密度分群觀察不同文案偏好分布。",
    image: hdbscanCluster,
    alt: "HDBSCAN 語義偏好分析圖",
  },
  {
    title: "Training Loss",
    description: "用訓練損失觀察模型收斂狀態與訓練趨勢。",
    image: trainingLoss,
    alt: "模型訓練 loss 圖",
  },
  {
    title: "產品描述偏好熱圖",
    description: "分析產品描述中的偏好特徵與語意分布。",
    image: descriptionHeatmap,
    alt: "產品描述偏好熱圖",
  },
  {
    title: "評論偏好熱圖",
    description: "分析消費者評論中的情緒與語意偏好。",
    image: commentHeatmap,
    alt: "評論偏好熱圖",
  },
];

const tags = [
  "JSP Prototype",
  "LLaMA 3",
  "TextRank",
  "LDA",
  "K-Means",
  "HDBSCAN",
  "QLoRA",
  "Marketing Copy",
];

export default function LlamaMarketingSystemPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070a0d] text-white [overflow-wrap:anywhere]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(245,158,11,0.08),transparent_24%),linear-gradient(180deg,#070a0d_0%,#0a0f12_48%,#070a0d_100%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <nav className="relative z-10 border-b border-white/10 bg-[#070a0d]/86 backdrop-blur">
        <div className="relative mx-auto flex max-w-7xl items-center justify-center px-6 py-4 md:justify-between">
          <Link
            href="/"
            className="absolute left-6 rounded-full border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-white md:hidden"
          >
            Back
          </Link>

          <Link href="/" className="min-w-0 truncate text-lg font-bold">
            <span className="md:hidden">Kevin Huang</span>
            <span className="hidden md:inline">
              Kevin Huang | Kai-Chun Huang
            </span>
          </Link>

          <Link
            href="/#projects"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-white md:inline-flex"
          >
            Back
          </Link>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:py-16">

        <section className="border-b border-white/10 pb-10 md:pb-12">
          <div className="max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              JSP / NLP / LLM System
            </p>
            <h1 className="mt-4 max-w-full text-3xl font-black leading-tight md:whitespace-nowrap md:text-5xl lg:text-[3.4rem]">
              LLaMA 3 個人化產品行銷文案生成系統
            </h1>
            <p className="mt-5 max-w-5xl text-[15px] leading-7 text-slate-300 md:mt-6 md:text-lg md:leading-8">
              本作品參考原始 JSP 系統架構，重新整理為可公開展示的作品頁，呈現產品資訊分析、行銷文案語義偏好分析與
              LLaMA 3 個人化文案生成三個核心模組。
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-300/[0.08] px-3 py-1 text-xs font-medium text-emerald-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14">
          <h2 className="text-2xl font-bold md:text-3xl">系統模組</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6"
              >
                <h3 className="text-lg font-semibold leading-7 md:text-xl md:leading-8">
                  {module.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-300 md:mt-4 md:text-base">
                  {module.summary}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Features
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {module.methods.map((method) => (
                    <span
                      key={method}
                      className="rounded-full bg-emerald-300/[0.08] px-3 py-1 text-xs text-emerald-300"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 py-12 md:py-14">
          <h2 className="text-2xl font-bold md:text-3xl">系統流程</h2>
          <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((item, index) => (
              <div
                key={item}
                className="flex min-h-20 items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4 md:min-h-24 md:gap-4 md:p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-300/[0.08] font-mono text-sm font-bold text-emerald-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-2 text-[15px] leading-7 text-slate-200 md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-14">
          <h2 className="text-2xl font-bold md:text-3xl">模組流程細節</h2>
          <div className="mt-6 space-y-5 md:mt-8 md:space-y-6">
            {modules.map((module) => (
              <article
                key={module.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6"
              >
                <h3 className="text-lg font-semibold leading-7 md:text-xl">
                  {module.title}
                </h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {module.steps.map((step, index) => (
                    <div
                      key={step}
                      className="border-l border-emerald-300/40 pl-4"
                    >
                      <p className="font-mono text-xs font-bold uppercase tracking-wide text-emerald-300">
                        Step {index + 1}
                      </p>
                      <p className="mt-2 text-[15px] leading-7 text-slate-300 md:text-base">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <h2 className="text-2xl font-bold md:text-3xl">成果展示</h2>
          <ImageLightboxGallery
            items={gallery}
            gridClassName="mt-6 grid gap-6 md:grid-cols-2"
            imageClassName="aspect-[4/3] w-full bg-slate-950/50 object-contain p-2 transition duration-300 group-hover:scale-[1.02] md:p-3"
            imageSizes="(min-width: 768px) 50vw, 100vw"
            showDescription
            showTitle
          />
        </section>
      </div>
    </main>
  );
}
