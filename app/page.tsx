import Link from "next/link";

const projects = [
  {
    title: "LLaMA 3 個人化行銷文案生成系統",
    tags: ["LLM Fine-tuning", "QLoRA", "NLP", "Marketing"],
    description:
      "使用 LLaMA 3 結合產品描述與消費者評論資料，建立個人化產品行銷文案生成系統，包含資料清理、情感分析、關鍵字擷取、消費者偏好分群與生成品質評估。",
    highlights: [
      "使用產品描述與消費者評論建立訓練資料",
      "透過 TextBlob 分析評論情感傾向",
      "使用 TextRank 萃取產品關鍵字",
      "使用 K-Means 進行消費者偏好分群",
      "BLEU-3：18.92，BLEU-4：14.44，METEOR：23.62",
    ],
  },
  {
    title: "Intent Classification & QA Generation",
    tags: ["Intent Classification", "QA Generation", "BERT", "Gemma", "KD"],
    description:
      "建構結合使用者意圖分類與問答生成的智能問答系統，使用 BERT-BiLSTM 進行意圖分類，並透過 Knowledge Distillation 提升模型效率。",
    highlights: [
      "建立使用者語句資料前處理流程",
      "使用 BERT-BiLSTM 進行 Intent Classification",
      "設計 Teacher-Student Knowledge Distillation 架構",
      "使用 Gemma 進行 QA Generation",
      "NIST-2：99.64，NIST-4：99.89",
    ],
  },
  {
    title: "4G 吃到飽 SEO 分析工具",
    tags: ["SEO", "SERP API", "Entity Analysis", "Google Sheets"],
    description:
      "建立 SEO 分析工具，讓使用者輸入關鍵字後，自動分析 Google 搜尋前 10 名文章的 Entity 數量與主題分群，並將結果輸出至 Google Sheets。",
    highlights: [
      "可自由輸入搜尋關鍵字",
      "透過 SERP API 擷取 Google 第一頁結果",
      "分析前 10 名文章 Entity 數量",
      "輸出分析結果至 Google Sheets",
      "可部署至 Vercel 並串接 Supabase",
    ],
  },
  {
    title: "IVE K-pop Fan Website",
    tags: ["Web Design", "JSP", "Tailwind CSS", "Frontend"],
    description:
      "以 IVE 為主題製作粉絲網站，練習網頁設計、版面配置與內容編排，包含影片背景、成員介紹與圖片展示。",
    highlights: [
      "使用 JSP 建立網站頁面",
      "使用 Tailwind CSS 設計版面",
      "加入影片背景提升視覺效果",
      "製作成員介紹與內容展示頁面",
    ],
  },
];

const skills = [
  {
    category: "Programming",
    items: ["Python", "SQL", "R", "JavaScript"],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "Natural Language Processing",
      "LLM Fine-tuning",
      "Knowledge Distillation",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      "PyTorch",
      "Transformers",
      "Unsloth",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    category: "Web & Automation",
    items: [
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Supabase",
      "n8n",
      "Google Apps Script",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold">
            Kevin Huang
          </a>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#conference" className="hover:text-white">
              Conference
            </a>
            <a href="#student-association" className="hover:text-white">
              Association
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#work" className="hover:text-white">
              Work
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-20">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          AI / NLP / Data Analysis Portfolio
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          {"\u{6211}\u{662F}\u{9EC3}\u{51F1}\u{6D5A}\u{FF0C}\u{76EE}\u{524D}\u{5C31}\u{8B80}\u{65BC}\u{9022}\u{7532}\u{5927}\u{5B78}\u{5DE5}\u{696D}\u{5DE5}\u{7A0B}\u{8207}\u{7CFB}\u{7D71}\u{7BA1}\u{7406}\u{5B78}\u{7CFB}\u{FF0C}\u{4E3B}\u{8981}\u{6295}\u{5165}\u{81EA}\u{7136}\u{8A9E}\u{8A00}\u{8655}\u{7406}\u{3001}LLM \u{5FAE}\u{8ABF}\u{3001}\u{751F}\u{6210}\u{5F0F}AI\u{8207}\u{8CC7}\u{6599}\u{5206}\u{6790}\u{3002}\u{7562}\u{696D}\u{5C08}\u{984C}\u{4EE5} LLaMA 3 \u{7D50}\u{5408}\u{6D88}\u{8CBB}\u{8005}\u{504F}\u{597D}\u{FF0C}\u{9032}\u{884C}\u{500B}\u{4EBA}\u{5316}\u{884C}\u{92B7}\u{6587}\u{6848}\u{751F}\u{6210}\u{7814}\u{7A76}\u{FF0C}\u{4E26}\u{65BC} 2025 \u{4E2D}\u{570B}\u{5DE5}\u{696D}\u{5DE5}\u{7A0B}\u{5B78}\u{6703}\u{5E74}\u{6703}\u{66A8}\u{5B78}\u{8853}\u{7814}\u{8A0E}\u{6703}\u{767C}\u{8868}\u{FF0C}\u{69AE}\u{7372}\u{5927}\u{6578}\u{64DA}\u{6280}\u{8853}\u{8207}\u{61C9}\u{7528}\u{9818}\u{57DF}-\u{6700}\u{4F73}\u{8AD6}\u{6587}\u{734E}\u{3002}"}
          <br />
          <br />
          {"\u{6211}\u{7684}\u{5C08}\u{6848}\u{7D93}\u{9A57}\u{5305}\u{542B}\u{6A21}\u{578B}\u{8A13}\u{7DF4}\u{3001}\u{6587}\u{672C}\u{5206}\u{6790}\u{3001}\u{610F}\u{5716}\u{5206}\u{985E}\u{3001}QA \u{751F}\u{6210}\u{3001}SEO Entity \u{5206}\u{6790}\u{8207}\u{524D}\u{7AEF}\u{7DB2}\u{7AD9}\u{88FD}\u{4F5C}\u{FF0C}\u{719F}\u{6089} Python\u{3001}SQL\u{3001}PyTorch\u{3001}Transformers\u{3002}\u{5E0C}\u{671B}\u{6301}\u{7E8C}\u{5C07}\u{8CC7}\u{6599}\u{5206}\u{6790}\u{8207} AI \u{6280}\u{8853}\u{61C9}\u{7528}\u{5728}\u{5BE6}\u{969B}\u{554F}\u{984C}\u{89E3}\u{6C7A}\u{4E2D}\u{3002}"}
        </p>

        <p className="hidden">
          我是黃凱浚，目前就讀於逢甲大學工業工程與系統管理學系，主要投入自然語言處理、LLM 微調、生成式AI與資料分析。畢業專題以 LLaMA 3 結合消費者偏好，進行個人化行銷文案生成研究，並於 2025 中國工業工程學會年會暨學術研討會發表，榮獲大數據技術與應用領域-最佳論文獎。
          <br />
          <br />
          我的專案經驗包含模型訓練、文本分析、意圖分類、QA 生成、SEO Entity 分析與前端網站製作，熟悉 Python、SQL、PyTorch、Transformers。希望持續將資料分析與 AI 技術應用在實際問題解決中。
        </p>

        <p className="hidden">
          我是黃凱浚，目前就讀於逢甲大學工業工程與系統管理學系，專注於自然語言處理、
          LLM 微調、知識蒸餾、資料分析與自動化工具開發。
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
          >
            View Projects
          </a>

          <a
            href="/file/新版履歷_英文網站.pdf"
            className="rounded-xl border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold">About Me</h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="space-y-6 leading-8 text-slate-300">
            <p>
              {"\u{6211}\u{662F}\u{9EC3}\u{51F1}\u{6D5A}\u{FF0C}\u{76EE}\u{524D}\u{5C31}\u{8B80}\u{65BC}\u{9022}\u{7532}\u{5927}\u{5B78}\u{5DE5}\u{696D}\u{5DE5}\u{7A0B}\u{8207}\u{7CFB}\u{7D71}\u{7BA1}\u{7406}\u{5B78}\u{7CFB}\u{56DB}\u{5E74}\u{7D1A}\u{FF0C}\u{5177}\u{5099}\u{8CC7}\u{6599}\u{5206}\u{6790}\u{8207}\u{81EA}\u{7136}\u{8A9E}\u{8A00}\u{8655}\u{7406}\u{FF08}NLP\u{FF09}\u{76F8}\u{95DC}\u{5C08}\u{984C}\u{5BE6}\u{4F5C}\u{7D93}\u{9A57}\u{FF0C}\u{4E26}\u{6301}\u{7E8C}\u{671D}\u{4EBA}\u{5DE5}\u{667A}\u{6167}\u{61C9}\u{7528}\u{9818}\u{57DF}\u{767C}\u{5C55}\u{3002}"}
            </p>

            <p>
              {"\u{6211}\u{5C0D}\u{65BC}\u{751F}\u{6210}\u{5F0F}AI\u{3001}\u{81EA}\u{7136}\u{8A9E}\u{8A00}\u{8655}\u{7406}\u{FF08}NLP\u{FF09}\u{8207}\u{8CC7}\u{6599}\u{5206}\u{6790}\u{6280}\u{8853}\u{5177}\u{6709}\u{9AD8}\u{5EA6}\u{8208}\u{8DA3}\u{FF0C}\u{4E26}\u{6301}\u{7E8C}\u{900F}\u{904E}\u{5BE6}\u{4F5C}\u{8207}\u{8AB2}\u{7A0B}\u{5B78}\u{7FD2}\u{6DF1}\u{5316}\u{76F8}\u{95DC}\u{80FD}\u{529B}\u{3002}\u{5728}\u{5DE5}\u{5177}\u{8207}\u{6280}\u{8853}\u{65B9}\u{9762}\u{FF0C}\u{6211}\u{719F}\u{6089} Python\u{3001}SQL\u{3001}R\u{7B49}\u{8CC7}\u{6599}\u{8655}\u{7406}\u{5DE5}\u{5177}\u{FF0C}\u{4E26}\u{80FD}\u{4F7F}\u{7528} Pandas\u{3001}NumPy\u{9032}\u{884C}\u{8CC7}\u{6599}\u{6E05}\u{7406}\u{3001}\u{8F49}\u{63DB}\u{8207}\u{5206}\u{6790}\u{3002}\u{5728}\u{6A21}\u{578B}\u{61C9}\u{7528}\u{4E0A}\u{FF0C}\u{5177}\u{5099} BERT\u{3001}LLaMA\u{3001}Gemma\u{7B49}\u{8A9E}\u{8A00}\u{6A21}\u{578B}\u{7684}\u{57FA}\u{672C}\u{61C9}\u{7528}\u{7D93}\u{9A57}\u{FF0C}\u{4E26}\u{80FD}\u{6574}\u{5408}\u{81F3}\u{5BE6}\u{969B}\u{5C08}\u{984C}\u{4E2D}\u{9032}\u{884C}\u{958B}\u{767C}\u{3002}"}
            </p>

            <p>
              {"\u{5728}\u{8AB2}\u{5916}\u{6D3B}\u{52D5}\u{65B9}\u{9762}\u{FF0C}\u{6211}\u{65BC}\u{5927}\u{4E09}\u{671F}\u{9593}\u{52A0}\u{5165}\u{5DE5}\u{696D}\u{5DE5}\u{7A0B}\u{8207}\u{7CFB}\u{7D71}\u{7BA1}\u{7406}\u{5B78}\u{7CFB}\u{7CFB}\u{5B78}\u{6703}\u{FF0C}\u{4E26}\u{64D4}\u{4EFB}\u{6D3B}\u{52D5}\u{7D44}\u{9577}\u{FF0C}\u{8CA0}\u{8CAC}\u{6D3B}\u{52D5}\u{4F01}\u{5283}\u{8207}\u{57F7}\u{884C}\u{7BA1}\u{7406}\u{FF0C}\u{5305}\u{542B}\u{6D3B}\u{52D5}\u{6D41}\u{7A0B}\u{8A2D}\u{8A08}\u{3001}\u{8CC7}\u{6E90}\u{5354}\u{8ABF}\u{8207}\u{73FE}\u{5834}\u{63A7}\u{7BA1}\u{3002}\u{900F}\u{904E}\u{5718}\u{968A}\u{5354}\u{4F5C}\u{8207}\u{6E9D}\u{901A}\u{FF0C}\u{78BA}\u{4FDD}\u{6D3B}\u{52D5}\u{9806}\u{5229}\u{57F7}\u{884C}\u{4E26}\u{63D0}\u{5347}\u{6574}\u{9AD4}\u{904B}\u{4F5C}\u{6548}\u{7387}\u{3002}"}
            </p>

            <p>
              {"\u{6B64}\u{5916}\u{FF0C}\u{6211}\u{4EA6}\u{64D4}\u{4EFB}\u{8CC7}\u{6599}\u{5EAB}\u{8A2D}\u{8A08}\u{8207}\u{6C7A}\u{7B56}\u{8207}\u{6578}\u{64DA}\u{5206}\u{6790}\u{8AB2}\u{7A0B}\u{52A9}\u{6559}\u{8207}\u{7814}\u{7A76}\u{8A08}\u{756B}\u{52A9}\u{7406}\u{FF0C}\u{5354}\u{52A9}\u{6559}\u{5B78}\u{8207}\u{5C08}\u{6848}\u{57F7}\u{884C}\u{FF0C}\u{57F9}\u{990A}\u{8DE8}\u{89D2}\u{8272}\u{6E9D}\u{901A}\u{8207}\u{5354}\u{4F5C}\u{80FD}\u{529B}\u{FF0C}\u{4E26}\u{80FD}\u{5728}\u{591A}\u{4EFB}\u{52D9}\u{60C5}\u{5883}\u{4E0B}\u{9032}\u{884C}\u{6709}\u{6548}\u{7684}\u{9032}\u{5EA6}\u{7BA1}\u{7406}\u{8207}\u{554F}\u{984C}\u{6392}\u{9664}\u{3002}"}
            </p>

            <p>
              {"\u{6211}\u{5728}\u{9032}\u{884C}\u{8CC7}\u{6599}\u{5206}\u{6790}\u{8207} NLP \u{5C08}\u{984C}\u{6642}\u{FF0C}\u{6211}\u{9700}\u{8981}\u{5148}\u{7406}\u{89E3}\u{8CC7}\u{6599}\u{4F86}\u{6E90}\u{3001}\u{6B04}\u{4F4D}\u{5167}\u{5BB9}\u{8207}\u{7814}\u{7A76}\u{76EE}\u{6A19}\u{FF0C}\u{518D}\u{5C07}\u{6574}\u{500B}\u{5C08}\u{984C}\u{62C6}\u{6210}\u{8CC7}\u{6599}\u{6E05}\u{7406}\u{3001}\u{7279}\u{5FB5}\u{8655}\u{7406}\u{3001}\u{6A21}\u{578B}\u{8A13}\u{7DF4}\u{3001}\u{7D50}\u{679C}\u{8A55}\u{4F30}\u{7B49}\u{4E0D}\u{540C}\u{6B65}\u{9A5F}\u{FF0C}\u{56E0}\u{6B64}\u{57F9}\u{990A}\u{6211}\u{7CFB}\u{7D71}\u{5316}\u{5206}\u{6790}\u{554F}\u{984C}\u{7684}\u{80FD}\u{529B}\u{3002}\u{9762}\u{5C0D}\u{65B0}\u{7684}\u{6280}\u{8853}\u{6216}\u{5DE5}\u{5177}\u{6642}\u{FF0C}\u{4F8B}\u{5982}\u{8A9E}\u{8A00}\u{6A21}\u{578B}\u{5FAE}\u{8ABF}\u{3001}\u{77E5}\u{8B58}\u{84B8}\u{993E}\u{6216}\u{81EA}\u{52D5}\u{5316}\u{5DE5}\u{5177}\u{4E32}\u{63A5}\u{FF0C}\u{6211}\u{6703}\u{5148}\u{4E86}\u{89E3}\u{6574}\u{9AD4}\u{67B6}\u{69CB}\u{8207}\u{4F7F}\u{7528}\u{6D41}\u{7A0B}\u{FF0C}\u{518D}\u{900F}\u{904E}\u{5BE6}\u{4F5C}\u{8207}\u{932F}\u{8AA4}\u{6392}\u{9664}\u{9010}\u{6B65}\u{638C}\u{63E1}\u{7D30}\u{7BC0}\u{FF0C}\u{56E0}\u{6B64}\u{4E5F}\u{990A}\u{6210}\u{4E3B}\u{52D5}\u{5B78}\u{7FD2}\u{8207}\u{5FEB}\u{901F}\u{9069}\u{61C9}\u{65B0}\u{5DE5}\u{5177}\u{7684}\u{80FD}\u{529B}\u{3002}"}
            </p>

            <p>
              {"\u{5728}\u{5718}\u{968A}\u{5408}\u{4F5C}\u{4E2D}\u{FF0C}\u{56E0}\u{70BA}\u{66FE}\u{64D4}\u{4EFB}\u{7CFB}\u{5B78}\u{6703}\u{6D3B}\u{52D5}\u{7D44}\u{9577}\u{3001}\u{8AB2}\u{7A0B}\u{52A9}\u{6559}\u{8207}\u{7814}\u{7A76}\u{8A08}\u{756B}\u{52A9}\u{7406}\u{FF0C}\u{6211}\u{7D93}\u{5E38}\u{9700}\u{8981}\u{548C}\u{4E0D}\u{540C}\u{89D2}\u{8272}\u{7684}\u{4EBA}\u{6E9D}\u{901A}\u{FF0C}\u{4F8B}\u{5982}\u{8001}\u{5E2B}\u{3001}\u{540C}\u{5B78}\u{3001}\u{7D44}\u{54E1}\u{6216}\u{5C08}\u{6848}\u{6210}\u{54E1}\u{FF0C}\u{56E0}\u{6B64}\u{6211}\u{5B78}\u{6703}\u{5982}\u{4F55}\u{6574}\u{7406}\u{8CC7}\u{8A0A}\u{3001}\u{91D0}\u{6E05}\u{554F}\u{984C}\u{FF0C}\u{4E26}\u{7528}\u{6E05}\u{695A}\u{7684}\u{65B9}\u{5F0F}\u{8AAA}\u{660E}\u{76EE}\u{524D}\u{9032}\u{5EA6}\u{8207}\u{9700}\u{8981}\u{89E3}\u{6C7A}\u{7684}\u{4E8B}\u{9805}\u{3002}\u{9019}\u{8B93}\u{6211}\u{66F4}\u{91CD}\u{8996}\u{6E9D}\u{901A}\u{6548}\u{7387}\u{FF0C}\u{4E5F}\u{8B93}\u{6211}\u{80FD}\u{5728}\u{9047}\u{5230}\u{554F}\u{984C}\u{6642}\u{FF0C}\u{5148}\u{627E}\u{51FA}\u{554F}\u{984C}\u{539F}\u{56E0}\u{FF0C}\u{518D}\u{63D0}\u{51FA}\u{5177}\u{9AD4}\u{7684}\u{89E3}\u{6C7A}\u{65B9}\u{5F0F}\u{3002}\u{6211}\u{5E0C}\u{671B}\u{6301}\u{7E8C}\u{5B78}\u{7FD2}\u{8EDF}\u{9AD4}\u{958B}\u{767C}\u{8207}\u{751F}\u{6210}\u{5F0F} AI \u{7684}\u{61C9}\u{7528}\u{FF0C}\u{4E26}\u{5C07}\u{9019}\u{4E9B}\u{80FD}\u{529B}\u{904B}\u{7528}\u{5728}\u{5BE6}\u{969B}\u{554F}\u{984C}\u{89E3}\u{6C7A}\u{4E2D}\u{3002}"}
            </p>
          </div>

          <p className="hidden">
            我的學習與專題方向主要集中在人工智慧應用、自然語言處理、資料分析與大型語言模型應用。
            我具備 Python、SQL、R、PyTorch、Transformers 與資料前處理經驗，曾使用
            LLaMA 3、Gemma、BERT-BiLSTM 等模型進行文字生成、意圖分類與問答系統建構。
            未來希望投入 AI 應用開發、LLM 系統設計、資料分析或自動化工具開發相關工作。
          </p>
        </div>
      </section>

      {/* Conference Experience */}
      <section id="conference" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Conference Experience</h2>

        <Link
          href="/conference"
          className="group block rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
        >
          <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
            <div>
              <h3 className="text-xl font-semibold leading-8">
                {"\u{57FA}\u{65BC} LLaMA 3 \u{6A21}\u{578B}\u{7D50}\u{5408}\u{6D88}\u{8CBB}\u{8005}\u{504F}\u{597D}\u{751F}\u{6210}\u{500B}\u{4EBA}\u{5316}\u{7522}\u{54C1}\u{884C}\u{92B7}\u{6587}\u{6848}\u{6A21}\u{5F0F}"}
              </h3>

              <p className="mt-2 text-slate-400">
                {"2025 \u{4E2D}\u{570B}\u{5DE5}\u{696D}\u{5DE5}\u{7A0B}\u{5B78}\u{6703}\u{5E74}\u{6703}\u{66A8}\u{5B78}\u{8853}\u{7814}\u{8A0E}\u{6703} | \u{767C}\u{8868}\u{4E26}\u{7372}\u{6700}\u{4F73}\u{8AD6}\u{6587}\u{734E}"}
              </p>
            </div>

            <span className="w-fit rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Best Paper Award
            </span>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {[
              "NLP",
              "LLM",
              "LLaMA 3",
              "Text Generation",
              "Consumer Preference",
              "Marketing Copy",
              "Best Paper",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="leading-8 text-slate-300">
            {"\u{65BC} 2025 \u{4E2D}\u{570B}\u{5DE5}\u{696D}\u{5DE5}\u{7A0B}\u{5B78}\u{6703}\u{5E74}\u{6703}\u{66A8}\u{5B78}\u{8853}\u{7814}\u{8A0E}\u{6703}\u{767C}\u{8868}\u{672C}\u{7814}\u{7A76}\u{FF0C}\u{4E3B}\u{984C}\u{70BA}\u{904B}\u{7528} LLaMA 3 \u{7D50}\u{5408}\u{6D88}\u{8CBB}\u{8005}\u{504F}\u{597D}\u{FF0C}\u{751F}\u{6210}\u{500B}\u{4EBA}\u{5316}\u{7522}\u{54C1}\u{884C}\u{92B7}\u{6587}\u{6848}\u{3002}\u{7814}\u{7A76}\u{5167}\u{5BB9}\u{6DB5}\u{84CB}\u{8CC7}\u{6599}\u{524D}\u{8655}\u{7406}\u{3001}\u{60C5}\u{611F}\u{5206}\u{6790}\u{3001}\u{95DC}\u{9375}\u{5B57}\u{8403}\u{53D6}\u{3001}\u{6D88}\u{8CBB}\u{8005}\u{504F}\u{597D}\u{5206}\u{7FA4}\u{8207}\u{6587}\u{6848}\u{751F}\u{6210}\u{54C1}\u{8CEA}\u{8A55}\u{4F30}\u{FF0C}\u{4E26}\u{69AE}\u{7372}\u{6700}\u{4F73}\u{8AD6}\u{6587}\u{734E}\u{3002}"}
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-400">
            <li>{"\u{767C}\u{8868}\u{7814}\u{7A76}\u{80CC}\u{666F}\u{3001}\u{7814}\u{7A76}\u{65B9}\u{6CD5}\u{3001}\u{5BE6}\u{9A57}\u{8A2D}\u{8A08}\u{8207}\u{6A21}\u{578B}\u{8A55}\u{4F30}\u{7D50}\u{679C}\u{3002}"}</li>
            <li>{"\u{61C9}\u{7528} TextBlob\u{3001}TextRank\u{3001}K-Means \u{8207} LLaMA 3 \u{5EFA}\u{7ACB}\u{7814}\u{7A76}\u{6D41}\u{7A0B}\u{3002}"}</li>
            <li>{"\u{4EE5} BLEU\u{3001}METEOR \u{8207}\u{4EBA}\u{5DE5}\u{8A55}\u{4F30}\u{6AA2}\u{9A57}\u{751F}\u{6210}\u{6587}\u{6848}\u{54C1}\u{8CEA}\u{3002}"}</li>
            <li>{"\u{7372}\u{9812} 2025 \u{5DE5}\u{5DE5}\u{5E74}\u{6703}\u{6700}\u{4F73}\u{8AD6}\u{6587}\u{734E}\u{FF0C}\u{80AF}\u{5B9A}\u{7814}\u{7A76}\u{5B8C}\u{6574}\u{6027}\u{8207}\u{5BE6}\u{52D9}\u{61C9}\u{7528}\u{50F9}\u{503C}\u{3002}"}</li>
          </ul>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
            {"\u{9EDE}\u{64CA}\u{67E5}\u{770B}\u{734E}\u{72C0}"}
            <span aria-hidden="true">-&gt;</span>
          </div>

          {/*
          <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
            <div>
              <h3 className="text-xl font-semibold leading-8">
                基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式
              </h3>

              <p className="mt-2 text-slate-400">
                2025 中國工業工程學會年會暨學術研討會 | 發表並獲最佳論文獎
              </p>
            </div>

            <span className="w-fit rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Best Paper Award
            </span>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {[
              "NLP",
              "LLM",
              "LLaMA 3",
              "Text Generation",
              "Consumer Preference",
              "Marketing Copy",
              "Best Paper",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="leading-8 text-slate-300">
            於 2025 中國工業工程學會年會暨學術研討會發表本研究，主題為運用
            LLaMA 3 結合消費者偏好，生成個人化產品行銷文案。研究內容涵蓋資料前處理、
            情感分析、關鍵字萃取、消費者偏好分群與文案生成品質評估，並榮獲最佳論文獎。
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-400">
            <li>發表研究背景、研究方法、實驗設計與模型評估結果。</li>
            <li>應用 TextBlob、TextRank、K-Means 與 LLaMA 3 建立研究流程。</li>
            <li>以 BLEU、METEOR 與人工評估檢驗生成文案品質。</li>
            <li>獲頒 2025 工工年會最佳論文獎，肯定研究完整性與實務應用價值。</li>
          </ul>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
            點擊查看獎狀
            <span aria-hidden="true">-&gt;</span>
          </div>

          <div className="hidden">
          <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
            <div>
              <h3 className="text-xl font-semibold leading-8">
                基於 LLaMA 3 模型結合消費者偏好生成個人化產品行銷文案模式
              </h3>

              <p className="mt-2 text-slate-400">
                Academic Conference Presentation｜2026
              </p>
            </div>

            <span className="w-fit rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Research Presentation
            </span>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {[
              "NLP",
              "LLM",
              "LLaMA 3",
              "Text Generation",
              "Consumer Preference",
              "Marketing Copy",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="leading-8 text-slate-300">
            本研究以 LLaMA 3 為基礎模型，結合產品描述與消費者評論資料，
            建立個人化產品行銷文案生成流程。研究內容包含資料前處理、情感分析、
            關鍵字萃取、消費者偏好分群與生成品質評估，並透過 BLEU、METEOR
            與人工評估驗證模型生成效果。
          </p>

          <ul className="mt-5 space-y-2 text-sm text-slate-400">
            <li>• Presented the research background, methodology, experimental design, and evaluation results.</li>
            <li>• Applied TextBlob, TextRank, K-Means, and LLaMA 3 in the research workflow.</li>
            <li>• Evaluated generated text using BLEU, METEOR, and human evaluation metrics.</li>
            <li>• Strengthened academic presentation, research organization, and communication skills.</li>
          </ul>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
            點擊查看獎狀
            <span aria-hidden="true">-&gt;</span>
          </div>
          </div>
          */}
        </Link>
      </section>

      {/* Student Association Experience */}
      <section id="student-association" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Student Association</h2>

        <Link
          href="/student-association"
          className="group block rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
        >
          <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
            <div>
              <h3 className="text-xl font-semibold leading-8">
                工業工程與系統管理學系系學會活動組長
              </h3>

              <p className="mt-2 text-slate-400">
                活動規劃、現場協調、團隊合作與執行管理
              </p>
            </div>

            <span className="w-fit rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              Activity Leader
            </span>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {[
              "Event Planning",
              "Teamwork",
              "Coordination",
              "Leadership",
              "On-site Management",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="leading-8 text-slate-300">
            大三上加入系學會並擔任活動組長，參與抽直屬、聖誕傳情、文化季、
            運動週、耶誕晚會與工工之夜等活動。過程中負責活動流程規劃、
            表單與資料統整、攤位管理、工作人員分工與現場流程協調。
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition group-hover:text-emerald-200">
            查看系學會經歷
            <span aria-hidden="true">-&gt;</span>
          </div>
        </Link>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Skills</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-4 text-xl font-semibold">{skill.category}</h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Work Experience</h2>

        <div className="grid gap-6">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  Teaching Assistant - Decision & Data Analysis
                </h3>
                <p className="mt-2 text-slate-400">
                  Feng Chia University | Sep 2025 - Jan 2026
                </p>
              </div>

              <span className="w-fit rounded-full bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
                Teaching Assistant
              </span>
            </div>

            <p className="leading-8 text-slate-300">
              Supported students in data preprocessing, exploratory analysis, model building, and performance evaluation using analytical tools. Guided students in interpreting analytical results and translating data insights into practical decision-making recommendations.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  Teaching Assistant - Database Management System and Design
                </h3>
                <p className="mt-2 text-slate-400">
                  Feng Chia University | Feb 2025 - Jun 2026
                </p>
              </div>

              <span className="w-fit rounded-full bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
                Teaching Assistant
              </span>
            </div>

            <p className="leading-8 text-slate-300">
              Helped students design databases, plan table structures, create tables, and organize structured data. Assisted students with SQL practice, including basic queries, advanced queries, data retrieval, data updates, and common database operations.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  Research Assistant - Code Annotation Generation using Myers Diff and LLaMA 3
                </h3>
                <p className="mt-2 text-slate-400">
                  Feng Chia University | Aug 2025 - Present
                </p>
              </div>

              <span className="w-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                Research Assistant
              </span>
            </div>

            <p className="leading-8 text-slate-300">
              Assisted in an AI research project integrating Myers Diff Algorithm, deep learning classification, and LLaMA 3 for automated code change annotation generation. Supported GitHub code-change data processing, including before-and-after code extraction, diff block identification, and structured dataset preparation.
            </p>
          </article>
        </div>
      </section>

      <section id="work-hidden" className="hidden">
        <h2 className="mb-8 text-3xl font-bold">Work Experience</h2>

        <div className="grid gap-6">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  逢甲大學課程助教
                </h3>
                <p className="mt-2 text-slate-400">
                  資料庫設計、數據與決策分析 | 113-2、114-1、114-2 學期
                </p>
              </div>

              <span className="w-fit rounded-full bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
                Teaching Assistant
              </span>
            </div>

            <p className="leading-8 text-slate-300">
              協助教師進行課程教學與學生學習支援，包含檢查學生課堂進度、解答資料庫與資料分析相關問題、整理課程資料與協助課堂執行。透過助教經驗，強化資料處理、問題拆解、溝通表達與教學輔導能力。
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  國科會研究計畫助理
                </h3>
                <p className="mt-2 text-slate-400">
                  以 LLaMA 3 模型與 Myers 演算法進行程式碼版本差異註解生成模式
                </p>
              </div>

              <span className="w-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                Research Assistant
              </span>
            </div>

            <p className="leading-8 text-slate-300">
              擔任研究計畫助理，協助教授處理計畫執行期間的行政事務、資料整理與經費報支流程。透過參與研究計畫，理解學術研究專案的執行流程，並培養細心度、文件管理與跨角色協作能力。
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
              <div>
                <h3 className="text-xl font-semibold">
                  國中補習班理化助教
                </h3>
                <p className="mt-2 text-slate-400">
                  課堂協助、課業輔導與概念講解
                </p>
              </div>

              <span className="w-fit rounded-full bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                Tutor Assistant
              </span>
            </div>

            <p className="leading-8 text-slate-300">
              協助教師進行國中理化課堂教學與學生課業輔導，將理化觀念與解題步驟轉化為學生較容易理解的說明方式，提升溝通能力、教學表達能力與協助他人解決問題的能力。
            </p>
          </article>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const projectLink =
              index === 0
                ? "/file/畢業專題海報檔案.pdf"
                : index === 2
                  ? "https://seo-entity-tool-3lm5u8i6p-kevins-projects-7a74b0ff.vercel.app"
                  : index === 3
                    ? "/ive"
                    : undefined;
            const CardTag = projectLink ? "a" : "article";

            return (
            <CardTag
              key={project.title}
              href={projectLink}
              target={projectLink ? "_blank" : undefined}
              rel={projectLink ? "noopener noreferrer" : undefined}
              className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                {index === 1 ? (
                  <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200">
                    Ongoing
                  </span>
                ) : null}
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mb-5 leading-7 text-slate-300">
                {project.description}
              </p>

              <ul className="space-y-2 text-sm text-slate-400">
                {project.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              {projectLink ? (
                <div className="mt-6 inline-flex items-center gap-2 text-[0px] font-medium text-purple-300 transition hover:text-purple-200">
                  <span className="text-sm">
                    {index === 0
                      ? "查看海報"
                      : index === 3
                        ? "查看網頁"
                        : "開啟工具"}
                  </span>
                  開啟工具
                  <span aria-hidden="true">-&gt;</span>
                </div>
              ) : null}
            </CardTag>
            );
          })}
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="hidden">
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">Resume</h2>

          <p className="mb-6 leading-8 text-slate-300">
            你可以在這裡下載我的履歷，了解我的教育背景、專題經驗、技術能力與實習申請方向。
          </p>

          <a
            href="/file/新版履歷_英文網站.pdf"
            className="inline-block rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
          >
            Download Resume PDF
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-bold">Contact Me</h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="mb-4 text-slate-300">
            如果您對我的作品、專題或實習申請有興趣，歡迎透過 Email 與我聯繫。
          </p>

          <div className="space-y-2 text-slate-300">
            <p>
              Email:{" "}
              <a
                href="mailto:kevin80609@gmail.com"
                className="text-blue-400 hover:underline"
              >
                kevin80609@gmail.com
              </a>
            </p>

            <p>
              Phone:{" "}
              <a
                href="tel:+886967233343"
                className="text-blue-400 hover:underline"
              >
                +886 967233343
              </a>
            </p>

          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Kevin Huang. All rights reserved.
      </footer>
    </main>
  );
}
