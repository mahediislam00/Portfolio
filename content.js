/* =========================================================================
   content.js — all data-driven sections.
   Add experiences / projects / skills / certs by editing the arrays below.
   No build step. Just save and refresh index.html.

   QUICK GUIDE — HOW TO UPDATE EACH SECTION:
   ─────────────────────────────────────────
   • EXPERIENCE  → edit the `experience` array  (line ~20)
   • PROJECTS    → edit the `projects` array     (line ~65)
   • PUBLICATION → edit the `publication` object (line ~105)
   • SKILLS      → edit `proficiency` + `stack`  (line ~115)
   • EDUCATION   → edit the `education` array    (line ~140)
   • CERTS       → edit the `certifications` array (line ~160)
   • PHOTO       → edit the PHOTO object          (line ~350)

   ACCENT COLORS available for `tone` / `color` fields:
     ""       → cyan  (#00d4ff) — default
     "purple" → purple (#8899ff)
     "green"  → green  (#00ff88)
     "gold"   → gold   (#ffb800)
   ========================================================================= */

/* ---------- DATA ------------------------------------------------------ */

/* ── EXPERIENCE ──────────────────────────────────────────────────────────
   Each entry = one job. Rendered as a timeline in the Experience section.

   HOW TO ADD A NEW JOB:
   1. Copy one of the objects below (from the opening { to its closing }).
   2. Paste it at the TOP of the array (most recent job goes first).
   3. Fill in: role, company, period, accent color, bullets[], and stack[].

   FIELDS:
     role      — job title shown in bold                    (string)
     roleNote  — optional note e.g. "(Contractual)"         (string | omit)
     company   — employer name                              (string)
     period    — date range shown as a badge                (string)
     accent    — hex color for the timeline line & company  (string)
                 recommended: "#00d4ff" | "#8899ff" | "#00ff88" | "#ffb800"
     bullets   — array of achievement strings               (string[])
     stack     — array of { label, color? } tech chips      (object[])
                 color options: omit/"" = cyan, "purple", "green", "gold"

   EXAMPLE NEW ENTRY:
   {
     role: "Senior ML Engineer",
     company: "Acme Corp",
     period: "JAN 2027 — PRESENT",
     accent: "#00ff88",
     bullets: [
       "Built X that achieved Y result.",
     ],
     stack: [{ label: "PyTorch" }, { label: "AWS", color: "gold" }]
   },
   ───────────────────────────────────────────────────────────────────────── */
const experience = [
  {
    role: "AI / ML Engineer",
    company: "ATZ Solution LLC",
    period: "NOV 2024 — PRESENT",
    accent: "#00d4ff",
    bullets: [
      "Built the ML backend for a time-series financial forecasting app — XGBoost + LSTM models, end-to-end architecture, and a production-grade MLOps pipeline with MLflow.",
      "Developed Python automation for U.S. government contract capture — OpenAI APIs, CrewAI agents, Selenium / BeautifulSoup scraping, and pandas + openpyxl ETL.",
      "Cleaned and modeled large government contract datasets with OpenRefine and Power BI for accurate downstream reporting.",
      "Led user-facing work — Chrome extension + AI-powered chatbots — to cut support load and lift engagement."
    ],
    stack: [
      { label: "Python" }, { label: "XGBoost" }, { label: "LSTM" }, { label: "MLflow" },
      { label: "CrewAI", color: "purple" }, { label: "OpenAI API", color: "purple" },
      { label: "Selenium", color: "gold" }, { label: "BeautifulSoup", color: "gold" },
      { label: "Power BI", color: "green" }
    ]
  },

  {
    role: "LLM Trainer",
    roleNote: "(Contractual)",
    company: "Anuttacon",
    period: "NOV 2025 — PRESENT",
    accent: "#8899ff",
    bullets: [
      "Annotated and evaluated narrative game content — dialogues, quests, character interactions — to produce high-quality LLM training datasets.",
      "Ran RLHF evaluations, scoring model outputs against structured rubrics to improve alignment and coherence.",
      "Collaborated with research and product teams on SOTA large language model development."
    ],
    stack: [
      { label: "RLHF", color: "purple" }, { label: "LLM Eval", color: "purple" },
      { label: "Annotation" }, { label: "Alignment" }
    ]
  },
  {
    role: "AI Trainer",
    roleNote: "(Contractual)",
    company: "Scale.AI",
    period: "JUL 2024 — NOV 2024",
    accent: "#00ff88",
    bullets: [
      "Reviewed multiple RLHF projects targeting OpenAI and Google Gemini models — contributed to fine-tuning, accuracy, and client satisfaction.",
      "Built interactive dashboards in Python and Power BI with enterprise-grade UI and actionable insights.",
      "Designed unit, integration, and end-to-end test suites to validate reliability of AI-generated code."
    ],
    stack: [
      { label: "RLHF", color: "green" }, { label: "Code Review", color: "green" },
      { label: "Python" }, { label: "Power BI" }
    ]
  }
];

/* ── PROJECTS ────────────────────────────────────────────────────────────
   Each entry = one project card in the "Projects & Research" grid.
   Cards render in a 2-column grid (left-to-right, top-to-bottom).

   HOW TO ADD A NEW PROJECT:
   1. Copy one object below and paste it at the TOP of the array
      (most recent / featured project first = top-left on screen).
   2. Fill in all fields. Set url:"" if the project page isn't ready yet.

   FIELDS:
     title  — project name shown as the card heading       (string)
     tag    — monospace label at the top of the card       (string)
              convention: "// KEYWORD · KEYWORD · KEYWORD"
     badge  — small pill shown top-right (e.g. accuracy,  (string)
              award, or status like "RESEARCH" / "WIP")
     tone   — card color accent: "" | "purple" | "green" | "gold"
     img    — URL or local path to a project image         (string | omit)
              e.g. "images/my-project.png" or "https://i.imgur.com/abc.png"
              leave out (or set to "") to show the striped placeholder instead
     blurb  — 2–3 sentence description of the project      (string)
     stack  — tech chips: [{ label, color? }]              (object[])
     url    — link to GitHub / demo / paper (or "" to hide)(string)

   EXAMPLE NEW PROJECT:
   {
     title: "Real-Time Anomaly Detection Pipeline",
     tag: "// STREAMING · KAFKA · ML",
     badge: "LIVE",
     tone: "green",
     img: "images/anomaly-detection.png",
     blurb: "End-to-end streaming anomaly detection on IoT sensor data...",
     stack: [{ label: "Kafka" }, { label: "PyTorch", color: "purple" }],
     url: "https://github.com/yourusername/project-repo"
   },
   ───────────────────────────────────────────────────────────────────────── */
const projects = [
  {
  title: "Multi-Horizon Price Forecasting with XGBoost and Technical Indicators",
  tag: "// FORECASTING · FINTECH · XGBOOST",
  badge: "Time-series",
  tone: "green",
  img: "images/markex.jpeg",
  blurb: "Full-stack financial forecasting platform covering stocks, crypto, forex, commodities and ETFs. XGBoost regression models trained on 5 years of OHLCV data with 40+ engineered features with tools and price targets. Django REST backend with persistent forecast storage, daily scheduled retraining, and token-authenticated API.",
  stack: [{ label: "XGBoost", color: "green" }, { label: "Django" }, { label: "yfinance" }, { label: "REST API" }, { label: "Scikit-Learn" }, { label: "Pandas" }],
  url: "https://atzsolution.tech/"
},
  {
    title: "Federated ML for Decentralized Healthcare",
    tag: "// FEDERATED · HEALTHCARE · ENSEMBLES",
    badge: "100K+ REC",
    tone: "purple",
    img: "images/fed.png",              // e.g. "images/federated-healthcare.png" or a full URL
    blurb: "Privacy-preserving federated learning across institutions with no raw patient data sharing. Processed 100K+ insurance records; ensemble models (AdaBoost, RF, GBR, HGB, SGD, XGBoost) for cost prediction and risk scoring.",
    stack: [{ label: "Federated", color: "purple" }, { label: "XGBoost" }, { label: "AdaBoost" }, { label: "RF · GBR" }, { label: "Scikit-Learn" }],
    url: "https://fedhealth-8j66.onrender.com/"
  },
  {
    title: "XAI-Integrated MobileNet Ensembles",
    tag: "// MOBILENET · ENSEMBLE · XAI",
    badge: "RESEARCH",
    tone: "gold",             // "", "purple", "green", "gold"
    img: "images/xai.png",              // e.g. "images/xai-mobilenet.png" or a full URL
    blurb: "Fine-tuned MobileNet ensembles on a curated 30,000+ image dataset with explainability layers — robust, generalizable image detection with strong real-world consistency.",
    stack: [{ label: "TensorFlow" }, { label: "Keras" }, { label: "MobileNet" }, { label: "XAI", color: "green" }],
    url: "https://drive.google.com/file/d/16WTfMP01jj94dHwQ5t7HvAWiVf7h_zak/view?usp=sharing"
  },
  {
    title: "AAOTP — ASCII-Art OTP System",
    tag: "// 2FA · ACCESSIBILITY · ASCII",
    badge: "RESEARCH",
    tone: "gold",
    img: "images/aaotp.png",              // e.g. "images/aaotp.png" or a full URL
    blurb: "An SMS-based 2FA system for low-literacy users — 12×12 ASCII-rendered OTPs delivered within the 160-char GSM limit, with threat modeling against interception, shoulder-surfing, and phone-sharing.",
    stack: [{ label: "Accessibility", color: "gold" }, { label: "Security", color: "gold" }, { label: "Python" }, { label: "SMS · GSM" }],
    url: "https://drive.google.com/file/d/1dfweyABRPpU_SPDIcU1edXQil8FmZinv/view"
  },
  {
  title: "Regime-Aware Time Series Forecasting with Hybrid HMM–XGBoost",
  tag: "// HMM · XGBOOST · TIME-SERIES · XAI",
  badge: "RESEARCH",
  tone: "purple",
  img: "images/hmm.png",
  blurb: "Time-series research combining Hidden Markov Models with XGBoost for regime-aware financial forecasting across stocks and commodities. HMM detects latent market regimes which are fed as contextual features into XGBoost. TreeSHAP applied for global, regime-specific, and local explainability.",
  stack: [{ label: "HMM", color: "purple" }, { label: "XGBoost" }, { label: "TreeSHAP" }, { label: "Scikit-Learn" }, { label: "Time Series" }, { label: "IEEE" }],
  url: "https://drive.google.com/file/d/1GgEPJI57wzdnzdOSrsW7HiZrLSwsX1iD/view?usp=sharing"
},
  {
    title: "ESP32 Surveillance & Observation Robot",
    tag: "// ESP32 · ROBOTICS · IoT",
    badge: "TOP PROJECT AWARD · RUET",
    tone: "green",
    img: "images/robot.jpg",              // e.g. "images/esp32-robot.png" or a full URL
    blurb: "Remote-controlled surveillance robot with ESP32-CAM — real-time video streaming, 270° camera coverage, Wi-Fi & Bluetooth control, and a mobile/web interface. Awarded Top 6 Project at RUET.",
    stack: [{ label: "ESP32-CAM", color: "green" }, { label: "IoT" }, { label: "Embedded" }, { label: "Web UI" }],
    url: "https://drive.google.com/file/d/1ygdJyhcplTu70_KO1YApYhnVZe0y2Dw9/view?usp=sharing"
  },
 

];

/* ── PUBLICATION / PAPER ─────────────────────────────────────────────────
   Single featured paper shown in the gold card below the projects grid.
   Only ONE paper is shown here — for multiple papers, consider converting
   this into an array and updating renderPublication() in the RENDER section.

   HOW TO UPDATE:
   - Replace all fields below with your new paper's details.
   - Set url:"" if the paper isn't publicly available yet.

   FIELDS:
     title  — full paper title                              (string)
     venue  — journal / conference name (shown in italics)  (string)
     blurb  — one-sentence abstract or key contribution     (string)
     stack  — keyword chips: [{ label, color? }]            (object[])
     url    — DOI link, arXiv URL, or publisher page        (string)

   EXAMPLE:
   const publication = {
     title: "Efficient Federated Fine-Tuning of LLMs via LoRA",
     venue: "NeurIPS 2026",
     blurb: "Proposed LoRA-based federated training that reduces comm. overhead by 40%.",
     stack: [{ label: "LLM", color: "gold" }, { label: "Federated" }, { label: "LoRA" }],
     url: "https://arxiv.org/abs/xxxx.xxxxx"
   };
   ───────────────────────────────────────────────────────────────────────── */
const publication = {
  title: "Prediction of Fetal Brain Gestational Age Using Multi-Head Attention with Xception",
  venue: "Elsevier",
  blurb: "A deep-learning model combining Xception with multi-head attention, trained on MRI data to estimate fetal gestational age across multiple spatial planes.",
  stack: [
    { label: "Medical Imaging", color: "gold" },
    { label: "Xception" }, { label: "Multi-Head Attn" }, { label: "MRI" }, { label: "Computer Vision" }
  ],
  url: "https://www.sciencedirect.com/science/article/pii/S001048252401240X"
};

const proficiency = [
  { label: "Python",                       pct: 95 },
  { label: "Machine Learning",             pct: 92 },
  { label: "Deep Learning (TensorFlow / Keras)",   pct: 88 },
  { label: "LLM / Agents / LangChain",     pct: 85, fill: "linear-gradient(90deg,#8899ff,#00d4ff)" },
  { label: "Automation (Selenium / Zapier)",  pct: 90, fill: "linear-gradient(90deg,#00d4ff,#00ff88)" },
  { label: "Data Viz (Power BI / Tableau)",pct: 82, fill: "linear-gradient(90deg,#00d4ff,#ffb800)" },
  { label: "SQL / Data Modeling",          pct: 80 },
  { label: "MLOps (MLflow)",               pct: 78, fill: "linear-gradient(90deg,#8899ff,#00ff88)" }
];

const stack = [
  { label: "LANGUAGES",             chips: [{label:"Python"},{label:"C"},{label:"JavaScript"},{label:"HTML"},{label:"CSS"}] },
  { label: "FRAMEWORKS & LIBRARIES",chips: [{label:"Pandas"},{label:"NumPy"},{label:"Scikit-Learn"},{label:"Matplotlib"},{label:"TensorFlow"},{label:"Keras"}] },
  { label: "AI & AUTOMATION",       chips: [
      {label:"CrewAI",color:"purple"},{label:"LangChain",color:"purple"},{label:"OpenAI API",color:"purple"},
      {label:"Zapier",color:"gold"},{label:"BeautifulSoup",color:"gold"},{label:"Serper",color:"gold"}
  ]},
  { label: "TOOLS & DATA",          chips: [
      {label:"Power BI",color:"green"},{label:"Tableau",color:"green"},{label:"MySQL",color:"green"},
      {label:"OpenRefine",color:"green"},{label:"Excel"}
  ]},
  { label: "PLATFORMS",             chips: [{label:"PyCharm"},{label:"Jupyter"},{label:"VS Code"},{label:"Google Colab"}] }
];

/* ── EDUCATION ───────────────────────────────────────────────────────────
   Each entry = one academic institution in the Education timeline.
   Rendered newest-first (top of the array = topmost item on screen).

   HOW TO ADD A NEW DEGREE / INSTITUTION:
   1. Copy one object below and paste it at the TOP of the array.
   2. Fill in the fields below.

   FIELDS:
     degree — degree name and field of study                (string)
     school — institution name and city                     (string)
     meta   — years + GPA/grade shown in small mono text    (string)
     accent — hex color for the timeline node + school name (string)
              recommended: "#00d4ff" | "#8899ff" | "#00ff88" | "#ffb800"

   EXAMPLE NEW ENTRY:
   { degree: "PhD, Artificial Intelligence",
     school: "MIT · Cambridge, MA",
     meta: "2026 — CURRENT  ·  Thesis: Federated LLMs",
     accent: "#00d4ff" },
   ───────────────────────────────────────────────────────────────────────── */
const education = [
  { degree:"MSc, Computer Science & Engineering",
    school:"BRAC University · Dhaka",
    meta:"2025 — CURRENT",
    accent:"#00d4ff" },
  { degree:"BSc, Electronics & Telecommunication Engineering",
    school:"Rajshahi University of Engineering & Technology (RUET)",
    meta:"2019 — 2024",
    accent:"#8899ff" },
  { degree:"Higher Secondary Certificate (HSC)",
    school:"Dhaka College · Dhaka",
    meta:"2016 — 2018",
    accent:"#00ff88" },
  { degree:"Secondary School Certificate (SSC)",
    school:"Ideal School & College · Motijheel, Dhaka",
    meta:"2006 — 2015",
    accent:"#ffb800" }
];

/* ── CERTIFICATIONS & AWARDS ─────────────────────────────────────────────
   Each entry = one cert or award card in the Certifications panel.

   HOW TO ADD A NEW CERT / AWARD:
   1. Copy one object below and paste it at the TOP of the array.
   2. Fill in all fields. Set url:null for awards with no link.

   FIELDS:
     icon        — 1–2 char abbreviation shown in the icon box (string)
     iconColor   — hex text color for the icon                 (string)
     iconBg      — rgba background for the icon box            (string)
     iconBorder  — rgba border for the icon box                (string)
     title       — cert / award name                           (string)
     body        — issuer + brief description                  (string)
     url         — link to certificate page (or null for none) (string|null)
                   set url:"" to show the link button with no href yet

   EXAMPLE NEW ENTRY:
   { icon:"PT", iconColor:"#ff3366", iconBg:"rgba(255,51,102,0.08)", iconBorder:"rgba(255,51,102,0.2)",
     title:"AWS Certified ML Specialty",
     body:"Amazon Web Services — designing, building, and deploying ML solutions on AWS.",
     url:"https://www.credly.com/badges/your-badge-id" },
   ───────────────────────────────────────────────────────────────────────── */
const certifications = [
  { icon:"AI", iconColor:"#ffb800", iconBg:"rgba(255,184,0,0.08)", iconBorder:"rgba(255,184,0,0.2)",
    title:"Multi-AI Agent Systems with CrewAI",
    body:"DeepLearning.AI — automating business workflows with coordinated multi-agent decision-making.",
    url:"" },
  { icon:"LC", iconColor:"#00d4ff", iconBg:"rgba(0,212,255,0.08)", iconBorder:"rgba(0,212,255,0.15)",
    title:"LangChain for LLM Application Development",
    body:"DeepLearning.AI — building QA systems and deploying production AI agents with LangChain.",
    url:"" },
  { icon:"★", iconColor:"#00ff88", iconBg:"rgba(0,255,136,0.08)", iconBorder:"rgba(0,255,136,0.2)",
    title:"Top 6 Project Award — RUET",
    body:"Recognised for the ESP32-based Surveillance & Observation Robot at Rajshahi University of Engineering & Technology.",
    url:null }
];

/* ---------- HELPERS --------------------------------------------------- */

const esc = (s) => String(s).replace(/[&<>"']/g,
  c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const chip = ({label, color}) =>
  `<span class="tech-badge${color ? ' ' + color : ''}">${esc(label)}</span>`;

const chipList = (arr) => `<div class="chip-list">${arr.map(chip).join('')}</div>`;

/* ---------- RENDER: EXPERIENCE --------------------------------------- */

function renderExperience() {
  const root = document.getElementById('experience-list');
  if (!root) return;
  root.innerHTML = experience.map((e, i) => {
    const colAccent = e.accent;
    const colRGB = colAccent === '#00d4ff' ? '0,212,255'
                 : colAccent === '#8899ff' ? '136,153,255'
                 : colAccent === '#00ff88' ? '0,255,136'
                 : '255,184,0';
    return `
      <div class="tl-item">
        <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <div>
            <div style="font-size:15px;font-weight:600;color:#eaf6ff;">${esc(e.role)}${e.roleNote ? ` <span style="color:#7aadc8;font-weight:400;font-size:12px;">${esc(e.roleNote)}</span>` : ''}</div>
            <div style="font-size:12px;color:${colAccent};font-family:'JetBrains Mono',monospace;letter-spacing:0.04em;">${esc(e.company)}</div>
          </div>
          <div style="font-size:10px;font-family:'JetBrains Mono',monospace;color:#8ab0cc;letter-spacing:0.1em;background:rgba(${colRGB},0.06);border:1px solid rgba(${colRGB},0.18);padding:3px 10px;border-radius:6px;">${esc(e.period)}</div>
        </div>
        <ul class="bullet-list" style="--bullet:${colAccent};">
          ${e.bullets.map(b => `<li>${esc(b)}</li>`).join('')}
        </ul>
        <div class="mt-3">${chipList(e.stack)}</div>
      </div>`;
  }).join('');
}

/* ---------- RENDER: PROJECTS ----------------------------------------- */

function renderProjects() {
  const root = document.getElementById('projects-list');
  if (!root) return;

  const badgeColors = {
    "":       { fg:"#00ff88", bg:"0,255,136" },
    "purple": { fg:"#8899ff", bg:"136,153,255" },
    "green":  { fg:"#00ff88", bg:"0,255,136" },
    "gold":   { fg:"#ffb800", bg:"255,184,0" }
  };

  root.innerHTML = projects.map((p, i) => {
    const tone = p.tone || "";
    const bc = badgeColors[tone];
    return `
      <div class="project-card" style="animation:fadein 0.5s ${0.1 + i * 0.08}s ease both;opacity:0;">
        ${p.img
          ? `<img src="${esc(p.img)}" alt="${esc(p.title)}" style="width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:10px;border:1px solid rgba(0,212,255,0.12);" />`
          : `<div class="proj-ph${tone ? ' ' + tone : ''}"><span>${esc(p.tag)}</span></div>`}
        <div class="flex items-start justify-between gap-3">
          <h3 style="font-family:'Merriweather',Georgia,serif;font-size:16px;font-weight:700;color:#eaf6ff;line-height:1.35;">${esc(p.title)}</h3>
          <span style="font-size:9px;font-family:'JetBrains Mono',monospace;color:${bc.fg};background:rgba(${bc.bg},0.08);border:1px solid rgba(${bc.bg},0.2);padding:3px 8px;border-radius:5px;letter-spacing:0.08em;white-space:nowrap;">${esc(p.badge)}</span>
        </div>
        <p style="font-size:12.5px;color:#d4e0e9;line-height:1.8;">${esc(p.blurb)}</p>
        ${chipList(p.stack)}
        <div class="flex gap-3 mt-1">
          <a href="${esc(p.url || '')}" class="lnk">VIEW PROJECT →</a>
        </div>
      </div>`;
  }).join('');
}

/* ---------- RENDER: PUBLICATION -------------------------------------- */

function renderPublication() {
  const root = document.getElementById('publication-card');
  if (!root) return;
  root.innerHTML = `
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div style="flex:1 1 420px;">
        <div class="section-tag gold">Publication</div>
        <h3 style="font-family:'Merriweather',Georgia,serif;font-size:18px;font-weight:700;color:#eaf6ff;margin-bottom:8px;line-height:1.4;">${esc(publication.title)}</h3>
        <p style="font-size:12.5px;color:#d4e0e9;line-height:1.8;margin-bottom:10px;">
          Published in <em style="color:#ffb800;">${esc(publication.venue)}</em>. ${esc(publication.blurb)}
        </p>
        ${chipList(publication.stack)}
      </div>
      <a href="${esc(publication.url || '')}" class="btn" style="background:linear-gradient(135deg,rgba(255,184,0,0.15),rgba(255,184,0,0.06));border-color:rgba(255,184,0,0.3);color:#ffb800;">READ PAPER →</a>
    </div>`;
}

/* ---------- RENDER: SKILLS ------------------------------------------- */

function renderProficiency() {
  const root = document.getElementById('proficiency-list');
  if (!root) return;
  root.innerHTML = proficiency.map(s => `
    <div class="skill-row">
      <span class="skill-label">${esc(s.label)}</span>
      <div class="skill-bar"><div class="skill-fill" style="width:${s.pct}%;${s.fill ? `background:${s.fill};` : ''}"></div></div>
      <span class="skill-val">${s.pct}%</span>
    </div>`).join('');
}

function renderStack() {
  const root = document.getElementById('stack-list');
  if (!root) return;
  root.innerHTML = stack.map((g, i) => `
    <div style="margin-bottom:${i === stack.length - 1 ? 0 : 18}px;">
      <div style="font-size:10px;font-family:'JetBrains Mono',monospace;color:#7aadc8;letter-spacing:0.14em;margin-bottom:8px;">${esc(g.label)}</div>
      ${chipList(g.chips)}
    </div>`).join('');
}

/* ---------- RENDER: EDUCATION & CERTS -------------------------------- */

function renderEducation() {
  const root = document.getElementById('education-list');
  if (!root) return;
  root.innerHTML = education.map(e => {
    const colRGB = e.accent === '#00d4ff' ? '0,212,255'
                 : e.accent === '#8899ff' ? '136,153,255'
                 : e.accent === '#00ff88' ? '0,255,136'
                 : '255,184,0';
    return `
      <div class="tl-item">
        <div style="font-size:13.5px;font-weight:600;color:#eaf6ff;">${esc(e.degree)}</div>
        <div style="font-size:11.5px;color:${e.accent};font-family:'JetBrains Mono',monospace;margin:2px 0 4px;">${esc(e.school)}</div>
        <div style="font-size:11px;color:#8ab0cc;font-family:'JetBrains Mono',monospace;letter-spacing:0.06em;">${esc(e.meta)}</div>
      </div>`;
  }).join('');
}

function renderCertifications() {
  const root = document.getElementById('certifications-list');
  if (!root) return;
  root.innerHTML = certifications.map(c => `
    <div class="value-item">
      <div class="value-icon" style="background:${c.iconBg};border-color:${c.iconBorder};color:${c.iconColor};">${esc(c.icon)}</div>
      <div>
        <div style="font-size:13px;font-weight:600;color:#eaf6ff;margin-bottom:3px;">${esc(c.title)}</div>
        <div style="font-size:11.5px;color:#d4e0e9;line-height:1.7;">${esc(c.body)}</div>
        ${c.url !== null ? `<a href="${esc(c.url || '')}" class="lnk" style="margin-top:6px;display:inline-block;">CERTIFICATE →</a>` : ''}
      </div>
    </div>`).join('');
}

/* ---------- CHROME: CLOCK + NAV ACTIVE ------------------------------- */

function initClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const tick = () => {
    el.textContent = new Date().toLocaleTimeString('en-GB', {
      timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit', second: '2-digit'
    }) + ' DHK';
  };
  tick();
  setInterval(tick, 1000);
}

function initNavHighlight() {
  const navLinks = document.querySelectorAll('.nav-link');
  const ids = ['home','about','experience','projects','skills','contact'];
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
  function onScroll() {
    const y = window.scrollY + 120;
    let active = sections[0]?.id;
    for (const s of sections) { if (s.offsetTop <= y) active = s.id; }
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + active));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- PHOTO (kept simple — edit values here) ------------------- */

const PHOTO = {
  url:   "https://media.licdn.com/dms/image/v2/D5603AQEE_gQi6RFBJQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722935626062?e=1778716800&v=beta&t=Td7mSYZorWjvzDMOjmR2AelBlpc9U1W8734xnFO8h10",
  size:  160,
  shape: "rounded",   // "rounded" | "circle" | "square"
  show:  true
};

function applyPhoto() {
  const wrap = document.getElementById('about-portrait-wrap');
  const img  = document.getElementById('about-portrait');
  const ph   = document.getElementById('about-portrait-ph');
  if (!wrap || !img || !ph) return;
  if (!PHOTO.show) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';
  wrap.style.width  = PHOTO.size + 'px';
  wrap.style.height = PHOTO.size + 'px';
  wrap.style.borderRadius =
    PHOTO.shape === 'circle' ? '50%' :
    PHOTO.shape === 'square' ? '4px' : '14px';
  if (PHOTO.url) {
    img.src = PHOTO.url;
    img.style.display = 'block';
    ph.style.display  = 'none';
  } else {
    img.removeAttribute('src');
    img.style.display = 'none';
    ph.style.display  = 'flex';
  }
}

/* ---------- BOOT ------------------------------------------------------ */

document.addEventListener('DOMContentLoaded', () => {
  renderExperience();
  renderProjects();
  renderPublication();
  renderProficiency();
  renderStack();
  renderEducation();
  renderCertifications();
  applyPhoto();
  initClock();
  initNavHighlight();
});
