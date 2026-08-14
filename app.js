const experiences = [
  {
    category: "校园经历",
    kind: "education",
    title: "硕士 - 南京大学苏州校区前沿科学学院",
    logo: "./assets/logos/nanjing-university-logo.png",
    logoAlt: "南京大学校徽",
    backTitle: "修读课程与基础",
    points: [
      "修读课程：计量经济学，环境经济政策与分析。",
      "有统计学、经济学专业知识基础，了解模型调优等相关内容。",
    ],
  },
  {
    category: "校园经历",
    kind: "education",
    title: "本科 - 苏州大学商学院",
    logo: "./assets/logos/soochow-university-logo.png",
    logoAlt: "苏州大学校徽",
    backTitle: "修读课程与基础",
    points: [
      "修读课程：运筹学，市场营销，品牌管理，电子商务、计量经济学。",
      "具备商科相关背景。",
    ],
  },
  {
    category: "实习经历",
    kind: "internship",
    title: "字节跳动 - 抖音电商",
    logo: "./assets/logos/bytedance-logo.png",
    logoAlt: "字节跳动 logo",
    role: "用户增长产品实习生",
    time: "2026.03 - 2026.08",
    summary: "负责抖音电商“三单挑战”玩法迭代，推动用户支付增长和 GMV 提升。",
    backTitle: "具体工作内容",
    points: [
      "识别玩法感知弱、二三单转化不足、承接页效率低等问题，推进首页工具区、支付成功页入口升级，协助尾单大奖玩法上线，优化承接页运营效率。",
      "独立推进近 10 项增长需求，负责 PRD 撰写、需求评审，协调设计、研发、测试多方，完成需求上线和复盘。",
      "Q2 相关实验累计带来 100 万+ 增量 DAC、近 1000 万增量 GMV。",
      "生命周期页承接需求上线后，商品曝光点击率由 1.1% 提升至 5%。",
    ],
  },
  {
    category: "实习经历",
    kind: "internship",
    title: "帆软软件",
    logo: "./assets/logos/fanruan-logo.png",
    logoAlt: "帆软 logo",
    role: "场景产品 - 增长产品实习生",
    time: "2025.08 - 2025.12",
    summary: "围绕简道云场景模板增长链路，进行数据分析、漏斗优化和增长渠道建设。",
    backTitle: "具体工作内容",
    points: [
      "拆解“安装-激活-活跃-付费”链路，搭建数据看板。针对项目管理场景提出优化策略，推动次月安装量环比提升近 20%。",
      "搭建安装后活跃漏斗，识别各环节问题，输出触达策略，推动月活提升 12%。",
      "从“产品内承接 + 产品外生态 + 内部反馈”三类路径提升增长转化，内部优化 15 个产品体验问题，外部收益 80 万+。",
    ],
  },
  {
    category: "实习经历",
    kind: "internship",
    title: "Momenta - Cruise Pilot",
    logo: "./assets/logos/momenta-logo.png",
    logoAlt: "Momenta logo",
    role: "产品项目实习生",
    time: "2024.03 - 2024.09",
    summary: "参与自动驾驶相关项目的需求推进、数据分析与问题归因以及项目管理工作。",
    backTitle: "具体工作内容",
    points: [
      "梳理并导入 161 条功能需求并跟进测试、研发分析和问题流转，一个月内推动近 70% 需求完成实现。",
      "在 Jira 中建立 120+ 任务，维护项目看板。跟进 60+ 功能项进展并负责 20+ 路测任务，推动版本任务交付率超过 95%。",
    ],
  },
  {
    category: "实习经历",
    kind: "internship",
    title: "美团 - 小象超市",
    logo: "./assets/logos/meituan-logo.png",
    logoAlt: "美团 logo",
    role: "销售策略实习生",
    time: "2023.11 - 2024.02",
    summary: "通过数据分析进行日常业务管理，负责低质量订单整改专项。",
    backTitle: "具体工作内容",
    points: [
      "每日追踪实时人效、质量指标、转化率等核心业务数据，进行日常异动分析。",
      "基于订单特征、团队人效等数据分析、定位低质量订单问题，归因后协同业务侧推进整改动作，2 个月内将低质量订单占比由 20% 降至 10%。",
    ],
  },
];

const skillGroups = [
  {
    group: "产品能力",
    focus: "把模糊问题拆成目标、链路、方案和上线节奏",
    tone: "blue",
    items: [
      { name: "PRD", level: 96, detail: "撰写产品需求文档，说明需求背景、目标收益、需求内容和实验方案。" },
      { name: "用户增长", level: 92, detail: "围绕用户链路、入口、转化和复盘做增长策略。" },
      { name: "产品设计", level: 86, detail: "把业务目标拆成页面、流程和可落地的产品方案。" },
      { name: "需求评审", level: 82, detail: "推动需求进入评审、排期、开发、测试和上线。" },
    ],
  },
  {
    group: "数据与结构",
    focus: "用数据定位问题，用结构化表达推动共识",
    tone: "ink",
    items: [
      { name: "数据分析", level: 90, detail: "从业务指标里拆问题、找原因，并支持产品判断。" },
      { name: "Python", level: 76, detail: "用于基础数据处理、分析和自动化小工具。" },
      { name: "XMind", level: 72, detail: "梳理业务逻辑、用户链路和汇报结构。" },
      { name: "飞书多维表格", level: 78, detail: "搭建轻量看板，跟进任务和数据。" },
    ],
  },
  {
    group: "AI 协作",
    focus: "把 AI 当成共创工具，提高搭建、检索和表达效率",
    tone: "mint",
    items: [
      { name: "Vibe Coding", level: 84, detail: "使用 AI 辅助页面搭建、工作提效和知识获取。" },
      { name: "Codex", level: 80, detail: "和 AI 编程工具协作，把想法更快做成页面。" },
      { name: "Figma", level: 78, detail: "制作基础页面原型，辅助需求讲解和交互沟通。" },
      { name: "项目管理", level: 74, detail: "跟进任务、协调团队并推动交付。" },
    ],
  },
];

const skillBalls = [
  { name: "PRD撰写", group: "专业能力", tone: "professional", x: 9, y: 45, size: 106, detail: "撰写产品需求文档，说明需求背景、目标收益、需求内容和实验方案。" },
  { name: "原型图绘制", group: "专业能力", tone: "professional", x: 20, y: 24, size: 110, detail: "制作基础页面原型，辅助需求讲解和交互沟通。" },
  { name: "需求评审", group: "专业能力", tone: "professional", x: 32, y: 19, size: 110, detail: "推动需求进入评审、排期、开发、测试和上线。" },
  { name: "项目管理", group: "专业能力", tone: "professional", x: 42, y: 30, size: 110, detail: "跟进任务、协调团队并推动交付。" },
  { name: "功能交付", group: "专业能力", tone: "professional", x: 52, y: 52, size: 108, detail: "围绕需求目标推进设计、研发、测试协作，完成高质量上线与复盘。" },
  { name: "Xmind", group: "软件技能", tone: "software", x: 62, y: 45, size: 104, detail: "梳理业务逻辑、用户链路和汇报结构。" },
  { name: "Figma", group: "软件技能", tone: "software", x: 69, y: 16, size: 112, detail: "制作基础页面原型，辅助需求讲解和交互沟通。" },
  { name: "Codex", group: "软件技能", tone: "software", x: 80, y: 16, size: 110, detail: "和 AI 编程工具协作，把想法更快做成页面。" },
  { name: "Python", group: "软件技能", tone: "software", x: 99, y: 47, size: 108, detail: "用于基础数据处理、分析和自动化小工具。" },
  { name: "飞书", group: "软件技能", tone: "software", x: 90, y: 20, size: 104, detail: "搭建轻量看板，跟进任务和数据。" },
  { name: "责任心", group: "通用能力", tone: "general", x: 28, y: 67, size: 106, detail: "对承接的任务持续负责，关注过程和结果都能闭环。" },
  { name: "同理心", group: "通用能力", tone: "general", x: 40, y: 79, size: 112, detail: "先理解用户与协作方的处境，再建立有效共识。" },
  { name: "好奇心", group: "通用能力", tone: "general", x: 52, y: 87, size: 108, detail: "习惯追问为什么，并把观察和思考记录下来。" },
  { name: "沟通能力", group: "通用能力", tone: "general", x: 64, y: 87, size: 112, detail: "与产品、设计、研发、测试等协作方高效沟通。" },
  { name: "团队协作能力", group: "通用能力", tone: "general", x: 76, y: 79, size: 116, detail: "同步信息、明确分工，促进多方协同交付。" },
  { name: "抗压能力", group: "通用能力", tone: "general", x: 88, y: 67, size: 104, detail: "多任务并行时保持节奏，按优先级持续推进。" },
];

const qualities = [
  {
    title: "上进心",
    detail: "GPA 专业第 1，保研 C9。",
    tone: "sun",
  },
  {
    title: "好奇心",
    detail: "对业务爱思考、爱记录，实习期间复盘记录 10+ 篇。",
    tone: "blue",
  },
  {
    title: "责任心",
    detail: "字节实习期间负责近 10 项需求，高质量交付。",
    tone: "mint",
  },
  {
    title: "同理心",
    detail: "90% F 人，擅于倾听。",
    tone: "soft",
  },
];

const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

function activateTab(tabId) {
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabId);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === tabId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => activateTab(button.dataset.tab));
});

document.querySelectorAll("[data-tab-jump]").forEach((button) => {
  button.addEventListener("click", () => activateTab(button.dataset.tabJump));
});

document.querySelectorAll(".about-bubble").forEach((bubble) => {
  bubble.addEventListener("click", (event) => {
    event.stopPropagation();
    const wasOpen = bubble.classList.contains("is-open");
    document.querySelectorAll(".about-bubble.is-open").forEach((item) => item.classList.remove("is-open"));
    bubble.classList.toggle("is-open", !wasOpen);
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".about-bubble.is-open").forEach((item) => item.classList.remove("is-open"));
});

const experienceList = document.querySelector("#experienceList");

const renderExperienceCard = (item, index) => {
  return `
      <article class="experience-card experience-card--${item.kind} ${item.points.length > 2 ? "experience-card--detail-rich" : ""}" data-experience-index="${index}" data-position="0">
        <button class="experience-flip-card" type="button" aria-pressed="false" aria-label="查看${item.title}的详细信息" data-experience="${index}">
          <span class="flip-card-inner">
            <span class="flip-card-face flip-card-front">
              <span class="experience-logo"><img src="${item.logo}" alt="${item.logoAlt}" /></span>
              <span class="experience-front-copy">
                <span class="experience-company">${item.title}</span>
                ${item.kind === "internship" ? `<span class="experience-meta"><span>${item.role}</span><span>${item.time}</span></span><span class="experience-summary">${item.summary}</span>` : ""}
              </span>
              <span class="flip-card-action" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M20 11a8 8 0 1 0-2.34 5.66" /><path d="M20 4v7h-7" /></svg>
              </span>
            </span>
            <span class="flip-card-face flip-card-back">
              <span class="flip-card-back-head">
                <span class="flip-card-back-label">${item.backTitle}</span>
                <span class="flip-card-back-title">${item.title}</span>
              </span>
              <span class="flip-points">
                ${item.points.map((point) => `<span class="flip-point">${point}</span>`).join("")}
              </span>
              <span class="flip-card-action" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M4 13a8 8 0 1 0 2.34-5.66" /><path d="M4 20v-7h7" /></svg>
              </span>
            </span>
          </span>
        </button>
      </article>
    `;
};

const experienceCategories = [
  { name: "校园经历", key: "campus", className: "experience-group--campus", id: "campus-experience-title" },
  { name: "实习经历", key: "internships", className: "experience-group--internships", id: "internship-experience-title" },
];

experienceList.innerHTML = experienceCategories
  .map(
    (category) => `
      <section class="experience-group ${category.className}" aria-labelledby="${category.id}" data-carousel="${category.key}">
        <div class="experience-group-heading">
          <h3 id="${category.id}">${category.name}</h3>
        </div>
        <div class="experience-carousel">
          <button class="carousel-control carousel-control--previous" type="button" data-carousel-nav="previous" aria-label="查看上一条${category.name}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 5-7 7 7 7" /></svg>
          </button>
          <div class="carousel-stage">
          ${experiences
            .map((item, index) => (item.category === category.name ? renderExperienceCard(item, index) : ""))
            .join("")}
          </div>
          <button class="carousel-control carousel-control--next" type="button" data-carousel-nav="next" aria-label="查看下一条${category.name}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 5 7 7-7 7" /></svg>
          </button>
        </div>
      </section>
    `
  )
  .join("");

const carouselStates = new Map(experienceCategories.map((category) => [category.key, 0]));

const getCircularOffset = (index, activeIndex, total) => {
  let offset = index - activeIndex;

  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  return offset;
};

const updateCarousel = (group, activeIndex) => {
  const cards = Array.from(group.querySelectorAll(".experience-card"));
  const total = cards.length;
  const key = group.dataset.carousel;
  const normalizedIndex = (activeIndex + total) % total;

  carouselStates.set(key, normalizedIndex);

  cards.forEach((card, index) => {
    const offset = getCircularOffset(index, normalizedIndex, total);
    const flipButton = card.querySelector("[data-experience]");

    card.dataset.position = String(offset);
    card.classList.toggle("is-center", offset === 0);
    card.setAttribute("aria-hidden", String(offset !== 0));
    flipButton.tabIndex = offset === 0 ? 0 : -1;

    if (offset !== 0 && card.classList.contains("is-flipped")) {
      card.classList.remove("is-flipped");
      flipButton.setAttribute("aria-pressed", "false");
    }
  });
};

experienceCategories.forEach((category) => {
  const group = experienceList.querySelector(`[data-carousel="${category.key}"]`);
  updateCarousel(group, 0);
});

experienceList.addEventListener("click", (event) => {
  const navigation = event.target.closest("[data-carousel-nav]");
  if (navigation) {
    const group = navigation.closest("[data-carousel]");
    const direction = navigation.dataset.carouselNav === "next" ? 1 : -1;
    updateCarousel(group, carouselStates.get(group.dataset.carousel) + direction);
    return;
  }

  const button = event.target.closest("[data-experience]");
  if (!button) return;

  const card = button.closest(".experience-card");
  const group = card.closest("[data-carousel]");

  if (!card.classList.contains("is-center")) {
    updateCarousel(group, Number(card.dataset.experienceIndex));
    return;
  }

  const isFlipped = card.classList.toggle("is-flipped");
  button.setAttribute("aria-pressed", String(isFlipped));
});

const achievementTicker = document.querySelector("#achievementTicker");
const achievementItems = [
  "获得国家奖学金",
  "获评江苏省优秀毕业生",
  "CET-6 643",
  "担任 4 年班级班长",
  "本硕丰富实习经历",
  "独立负责需求项目经验",
];

if (achievementTicker) {
  achievementTicker.innerHTML = `
    <span class="achievement-ticker-dot" aria-hidden="true"></span>
    <div class="achievement-ticker-viewport">
      ${achievementItems
        .map(
          (item, index) =>
            `<p class="achievement-ticker-item${index === 0 ? " is-active" : ""}" aria-hidden="${index === 0 ? "false" : "true"}">${item}</p>`
        )
        .join("")}
    </div>
    <span class="achievement-ticker-dot" aria-hidden="true"></span>
  `;

  let activeAchievementIndex = 0;
  const tickerItems = Array.from(achievementTicker.querySelectorAll(".achievement-ticker-item"));

  window.setInterval(() => {
    tickerItems[activeAchievementIndex].classList.remove("is-active");
    tickerItems[activeAchievementIndex].setAttribute("aria-hidden", "true");
    activeAchievementIndex = (activeAchievementIndex + 1) % tickerItems.length;
    tickerItems[activeAchievementIndex].classList.add("is-active");
    tickerItems[activeAchievementIndex].setAttribute("aria-hidden", "false");
  }, 1500);
}

const lifeCards = [
  {
    id: "sport",
    title: "爱运动",
    images: ["sports-01.jpg", "sports-02.jpg", "sports-03.jpg", "sports-04.jpg"],
  },
  {
    id: "writing",
    title: "写随笔",
    images: ["writing-01.jpg", "writing-02.jpg"],
  },
  {
    id: "photo",
    title: "随手拍",
    images: ["photo-01.jpg", "photo-02.jpg", "photo-03.jpg", "photo-04.jpg", "photo-05.jpg", "photo-06.jpg", "photo-07.jpg", "photo-08.jpg"],
  },
  {
    id: "food",
    title: "品美食",
    images: ["food-01.jpg", "food-02.jpg", "food-03.jpg", "food-04.jpg", "food-05.jpg", "food-06.jpg"],
  },
];

const lifeImageSrc = (fileName) => `./assets/life/${fileName}?v=20260814-images-fixed`;

const lifeCardGrid = document.querySelector("#lifeCardGrid");
const lifeNoteModal = document.querySelector("#lifeNoteModal");
const lifeImageModal = document.querySelector("#lifeImageModal");

if (lifeCardGrid && lifeNoteModal && lifeImageModal) {
  const photoIndices = new Map(lifeCards.map((card) => [card.id, 0]));
  const openedLifeCards = new Set();
  let noteTimer;
  let noteScheduled = false;
  let activeLifeCardId = null;

  const renderGalleryArrow = (direction) => `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="${direction === "previous" ? "m14.5 5-7 7 7 7" : "m9.5 5 7 7-7 7"}" /></svg>
  `;

  lifeCardGrid.innerHTML = lifeCards
    .map(
      (card) => `
        <article class="life-card" data-life-card="${card.id}">
          <div class="life-card-inner">
            <button class="life-card-face life-card-front" type="button" data-life-open aria-expanded="false" aria-label="翻开生活照片卡片">
              <span class="life-box-stars" aria-hidden="true"><i></i><i></i><i></i></span>
            </button>
            <div class="life-card-face life-card-back">
              <div class="life-card-title"><span>${card.title}</span></div>
              <div class="life-gallery">
                <img src="${lifeImageSrc(card.images[0])}" alt="${card.title}照片 1" data-life-image loading="lazy" />
                <button class="life-gallery-button life-gallery-button--previous" type="button" data-life-gallery="previous" aria-label="查看${card.title}上一张照片" title="上一张">
                  ${renderGalleryArrow("previous")}
                </button>
                <button class="life-gallery-button life-gallery-button--next" type="button" data-life-gallery="next" aria-label="查看${card.title}下一张照片" title="下一张">
                  ${renderGalleryArrow("next")}
                </button>
                <span class="life-gallery-count" data-life-count>1 / ${card.images.length}</span>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  const closeLifeNote = () => {
    window.clearTimeout(noteTimer);
    lifeNoteModal.hidden = true;
    document.body.classList.remove("life-note-open");
  };

  const showLifeNote = () => {
    noteScheduled = false;
    lifeNoteModal.hidden = false;
    document.body.classList.add("life-note-open");
    lifeNoteModal.querySelector(".life-note-close").focus();
    noteTimer = window.setTimeout(closeLifeNote, 5000);
  };

  const closeLifeImage = () => {
    lifeImageModal.hidden = true;
    document.body.classList.remove("life-image-open");
  };

  const updateLifeGallery = (cardId, imageIndex) => {
    const cardData = lifeCards.find((card) => card.id === cardId);
    const cardElement = lifeCardGrid.querySelector(`[data-life-card="${cardId}"]`);
    const image = cardElement.querySelector("[data-life-image]");

    photoIndices.set(cardId, imageIndex);
    image.src = lifeImageSrc(cardData.images[imageIndex]);
    image.alt = `${cardData.title}照片 ${imageIndex + 1}`;
    cardElement.querySelector("[data-life-count]").textContent = `${imageIndex + 1} / ${cardData.images.length}`;
  };

  const showLifeImage = (cardId, imageIndex) => {
    const cardData = lifeCards.find((card) => card.id === cardId);
    const modalImage = lifeImageModal.querySelector("img");
    activeLifeCardId = cardId;
    photoIndices.set(cardId, imageIndex);
    modalImage.src = lifeImageSrc(cardData.images[imageIndex]);
    modalImage.alt = `${cardData.title}照片 ${imageIndex + 1}`;
    lifeImageModal.hidden = false;
    document.body.classList.add("life-image-open");
    lifeImageModal.querySelector(".life-image-close").focus();
  };

  const moveLifeImage = (direction) => {
    if (!activeLifeCardId) return;

    const cardData = lifeCards.find((card) => card.id === activeLifeCardId);
    const nextIndex = (photoIndices.get(activeLifeCardId) + direction + cardData.images.length) % cardData.images.length;
    updateLifeGallery(activeLifeCardId, nextIndex);
    showLifeImage(activeLifeCardId, nextIndex);
  };

  lifeCardGrid.addEventListener("click", (event) => {
    const galleryImage = event.target.closest("[data-life-image]");
    if (galleryImage) {
      const cardElement = galleryImage.closest("[data-life-card]");
      showLifeImage(cardElement.dataset.lifeCard, photoIndices.get(cardElement.dataset.lifeCard));
      return;
    }

    const galleryButton = event.target.closest("[data-life-gallery]");
    if (galleryButton) {
      const cardElement = galleryButton.closest("[data-life-card]");
      const cardData = lifeCards.find((card) => card.id === cardElement.dataset.lifeCard);
      const direction = galleryButton.dataset.lifeGallery === "next" ? 1 : -1;
      const nextIndex = (photoIndices.get(cardData.id) + direction + cardData.images.length) % cardData.images.length;
      updateLifeGallery(cardData.id, nextIndex);
      return;
    }

    const openButton = event.target.closest("[data-life-open]");
    if (!openButton) return;

    const cardElement = openButton.closest("[data-life-card]");
    const wasOpened = cardElement.classList.contains("is-open");

    cardElement.classList.add("is-open");
    openButton.setAttribute("aria-expanded", "true");

    if (!wasOpened) {
      openedLifeCards.add(cardElement.dataset.lifeCard);
    }

    if (openedLifeCards.size === lifeCards.length && !noteScheduled && lifeNoteModal.hidden) {
      noteScheduled = true;
      window.setTimeout(showLifeNote, 460);
    }
  });

  lifeNoteModal.addEventListener("click", (event) => {
    if (event.target.closest("[data-life-note-dismiss]")) {
      closeLifeNote();
    }
  });

  lifeImageModal.addEventListener("click", (event) => {
    const navigation = event.target.closest("[data-life-image-nav]");
    if (navigation) {
      moveLifeImage(navigation.dataset.lifeImageNav === "next" ? 1 : -1);
      return;
    }

    if (event.target.closest("[data-life-image-dismiss]")) {
      closeLifeImage();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!lifeImageModal.hidden) {
        closeLifeImage();
      } else if (!lifeNoteModal.hidden) {
        closeLifeNote();
      }
    }

    if (!lifeImageModal.hidden && event.key === "ArrowLeft") {
      moveLifeImage(-1);
    }

    if (!lifeImageModal.hidden && event.key === "ArrowRight") {
      moveLifeImage(1);
    }
  });
}

const skillCloud = document.querySelector("#skillCloud");
const skillDetail = document.querySelector("#skillDetail");
if (skillCloud && skillDetail) {
  skillCloud.innerHTML = skillBalls
    .map(
      (skill, index) => `
        <button
          class="skill-ball skill-ball--${skill.tone}"
          type="button"
          style="--ball-x: ${skill.x}%; --ball-y: ${skill.y}%; --ball-size: ${skill.size}px; --ball-z: ${index + 1};"
          data-skill="${skill.name}"
          aria-label="${skill.group}：${skill.name}"
        >
          <span>${skill.name}</span>
        </button>
      `
    )
    .join("");

  const showSkillDetail = (skillName, persistent = false) => {
    const skill = skillBalls.find((item) => item.name === skillName);
    if (!skill) return;

    skillDetail.hidden = false;
    skillDetail.classList.toggle("is-persistent", persistent);
    skillDetail.innerHTML = `
      <span>${skill.group}</span>
      <strong>${skill.name}</strong>
      <p>${skill.detail}</p>
    `;
  };

  const clearSkillDetail = () => {
    if (skillDetail.classList.contains("is-persistent")) return;
    skillDetail.hidden = true;
    skillDetail.innerHTML = "";
  };

  skillCloud.addEventListener("mouseover", (event) => {
    const ball = event.target.closest("[data-skill]");
    if (ball) showSkillDetail(ball.dataset.skill);
  });

  skillCloud.addEventListener("focusin", (event) => {
    const ball = event.target.closest("[data-skill]");
    if (ball) showSkillDetail(ball.dataset.skill);
  });

  skillCloud.addEventListener("mouseleave", clearSkillDetail);

  skillCloud.addEventListener("click", (event) => {
    const ball = event.target.closest("[data-skill]");
    if (!ball) return;

    const wasSelected = ball.classList.contains("is-selected");
    skillCloud.querySelectorAll(".skill-ball").forEach((item) => item.classList.remove("is-selected"));

    if (wasSelected) {
      skillDetail.classList.remove("is-persistent");
      clearSkillDetail();
      return;
    }

    ball.classList.add("is-selected");
    showSkillDetail(ball.dataset.skill, true);
  });
}

const qualityTags = document.querySelector("#qualityTags");

if (qualityTags) {
  qualityTags.innerHTML = qualities
    .map(
      (quality) => `
        <article class="quality-card quality-${quality.tone}">
          <strong>${quality.title}</strong>
          <em>${quality.detail}</em>
        </article>
      `
    )
    .join("");
}
