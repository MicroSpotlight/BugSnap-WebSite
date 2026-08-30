const SCREEN_CONTENT = {
  en: {
    home: ["assets/bugsnap-home.png", "BugSnap home screen with drafts, recent reports, and monthly usage"],
    capture: ["assets/bugsnap-capture.png", "BugSnap capture screen with photo, screenshot, recording, file, and clipboard inputs"],
    details: ["assets/bugsnap-details.png", "BugSnap details screen with repository, Issue title, description, and severity"],
    review: ["assets/bugsnap-review.png", "BugSnap review screen showing the structured GitHub Issue before creation"],
  },
  zh: {
    home: ["assets/bugsnap-home-zh.png", "BugSnap 首页，显示草稿、最近报告和本月用量"],
    capture: ["assets/bugsnap-capture-zh.png", "BugSnap 采集页，支持照片、截图、录屏、文件和剪贴板"],
    details: ["assets/bugsnap-details-zh.png", "BugSnap 详情页，包含仓库、Issue 标题、描述和严重程度"],
    review: ["assets/bugsnap-review-zh.png", "BugSnap 预览页，展示创建前的结构化 GitHub Issue"],
  },
};

const HERO_CONTENT = {
  en: {
    evidence: [
      "The bug is already on your screen. Send the evidence with it.",
      "Capture a screenshot or recording, add the context your team needs, and review a structured GitHub Issue before it is created.",
    ],
    issue: [
      "A better GitHub Issue starts before anyone opens GitHub.",
      "Collect the evidence, device context, reproduction details, and destination in one focused mobile flow.",
    ],
    field: [
      "Capture first. Explain once.",
      "BugSnap turns the moment a problem appears into a durable handoff for the team that will fix it.",
    ],
  },
  zh: {
    evidence: [
      "Bug 已经在屏幕上，把证据一起交给团队。",
      "截图或录屏，补充团队需要的上下文，并在创建前检查完整的结构化 GitHub Issue。",
    ],
    issue: [
      "更好的 GitHub Issue，在打开 GitHub 之前就开始了。",
      "在一条专注的移动端流程中，收集证据、设备上下文、复现信息和目标仓库。",
    ],
    field: [
      "先记录现场，只解释一次。",
      "BugSnap 把问题出现的那一刻，变成可以交给修复团队持续跟进的任务。",
    ],
  },
};

const ZH_COPY = {
  "language.label": "语言",
  "nav.workflow": "工作流程",
  "nav.product": "产品",
  "nav.trust": "安全边界",
  "nav.release": "发布状态",
  "hero.eyebrow": "面向 GitHub 的移动端 Bug 提交",
  "hero.primary": "查看工作流程",
  "hero.secondary": "了解产品",
  "hero.assurance.repositories": "仅访问选定仓库",
  "hero.assurance.preview": "创建前完整预览",
  "hero.assurance.code": "无需读取仓库代码",
  "hero.capture.title": "采集",
  "hero.capture.detail": "截图 · 照片 · 录屏",
  "hero.deliver.title": "交付",
  "hero.deliver.detail": "一条可处理的 GitHub Issue",
  "proof.attachments": "每条报告最多附件",
  "proof.code": "需要读取的仓库代码",
  "proof.days": "30 天",
  "proof.retention": "临时媒体保留期限",
  "proof.statement": "让证据跟着任务流转，而不是散落在聊天记录里。",
  "workflow.eyebrow": "完整交接",
  "workflow.title": "从“看这里”到团队可以直接处理的 Issue。",
  "workflow.capture.title": "采集第一现场",
  "workflow.capture.detail": "从截图、照片、短录屏、文件、剪贴板或系统分享菜单开始。",
  "workflow.mark.title": "标出真正的问题",
  "workflow.mark.detail": "用箭头、矩形、画笔、文字或马赛克直接标注，不离开移动端流程。",
  "workflow.context.title": "补齐有效上下文",
  "workflow.context.detail": "BugSnap 会整理标题、严重程度、复现信息、设备、系统和 App 版本。",
  "workflow.review.title": "检查后再创建",
  "workflow.review.detail": "选择仓库和元数据，预览最终 Issue，再把它交给 GitHub。",
  "product.eyebrow": "真实产品界面",
  "product.title": "为手边的手机打造一条专注流程。",
  "product.detail": "BugSnap 把采集、上下文、目标仓库和 Issue 预览放进一条可恢复的流程。本地草稿和可重试提交，让它在网络不完美时依然实用。",
  "product.tab.home": "首页",
  "product.tab.capture": "采集",
  "product.tab.context": "上下文",
  "product.tab.review": "预览",
  "product.input": "输入",
  "product.input.detail": "第一现场证据",
  "product.output": "输出",
  "product.output.detail": "结构化 Issue",
  "trust.eyebrow": "清晰边界",
  "trust.title": "只传递证据，不浏览你的代码。",
  "trust.detail": "GitHub 访问范围仅限安装 BugSnap GitHub App 时选定的仓库。移动客户端不会保存 App 私钥、Installation Token 或长期媒体密钥。",
  "trust.privacy": "查看隐私政策",
  "trust.phone": "在你的手机上",
  "trust.phone.detail": "采集、标注、预览，并恢复本地草稿。",
  "trust.bugsnap": "在 BugSnap 中",
  "trust.bugsnap.detail": "短期会话、媒体处理和 Issue 交付。",
  "trust.github": "在 GitHub 中",
  "trust.github.detail": "最终 Issue，可直接分配并进入团队处理流程。",
  "release.eyebrow": "首个版本",
  "release.title": "BugSnap 正在准备上架 App Store。",
  "release.detail": "iOS 将率先发布，Android 正在逐步补齐功能。",
  "release.support": "联系支持",
  "footer.tagline": "记录证据，创建 Issue。",
  "footer.support": "支持",
  "footer.privacy": "隐私",
  "footer.terms": "条款",
};

const META_CONTENT = {
  en: {
    title: "BugSnap — Mobile bug reporting for GitHub",
    description: "BugSnap turns screenshots, recordings, and device context into structured GitHub Issues from your phone.",
  },
  zh: {
    title: "BugSnap — 面向 GitHub 的移动端 Bug 提交工具",
    description: "BugSnap 把手机截图、录屏和设备上下文整理成结构化 GitHub Issue。",
  },
};

const ALT_CONTENT = {
  en: { "screen.review": SCREEN_CONTENT.en.review[1], "app.icon": "BugSnap app icon" },
  zh: { "screen.review": SCREEN_CONTENT.zh.review[1], "app.icon": "BugSnap App 图标" },
};

const body = document.body;
const productImage = document.querySelector("[data-product-image]");
const heroTitle = document.querySelector("#hero-title");
const heroSummary = document.querySelector(".hero-summary");
const tweaksPanel = document.querySelector("[data-tweaks]");
const englishCopy = new Map(
  [...document.querySelectorAll("[data-i18n]")].map((element) => [element.dataset.i18n, element.textContent.trim()]),
);
const englishAria = new Map(
  [...document.querySelectorAll("[data-i18n-aria]")].map((element) => [element.dataset.i18nAria, element.getAttribute("aria-label")]),
);
const storedTweaks = readStoredTweaks();
const tweaks = { ...TWEAK_DEFAULTS, ...storedTweaks };
const savedLocale = localStorage.getItem("bugsnap-locale");
let activeLocale = ["en", "zh"].includes(savedLocale)
  ? savedLocale
  : navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
let activeScreen = "home";

function readStoredTweaks() {
  try {
    return JSON.parse(localStorage.getItem("bugsnap-design-tweaks")) || {};
  } catch {
    return {};
  }
}

function persistTweaks() {
  localStorage.setItem("bugsnap-design-tweaks", JSON.stringify(tweaks));
}

function setTweak(key, value, persist = true) {
  tweaks[key] = value;
  applyTweaks();
  if (persist) persistTweaks();
  window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: value } }, "*");
}

function applyTweaks() {
  const variant = HERO_CONTENT[activeLocale][tweaks.variant] ? tweaks.variant : TWEAK_DEFAULTS.variant;
  const density = ["compact", "comfortable", "spacious"].includes(tweaks.density)
    ? tweaks.density
    : TWEAK_DEFAULTS.density;

  body.dataset.variant = variant;
  body.dataset.density = density;
  heroTitle.textContent = HERO_CONTENT[activeLocale][variant][0];
  heroSummary.textContent = HERO_CONTENT[activeLocale][variant][1];
  document.querySelector("select[data-density]").value = density;
  document.querySelectorAll("[data-variant]").forEach((button) => {
    if (button === body) return;
    button.classList.toggle("is-active", button.dataset.variant === variant);
  });
}

function updateProductImage() {
  const [src, alt] = SCREEN_CONTENT[activeLocale][activeScreen];
  productImage.src = src;
  productImage.alt = alt;
}

function applyLocale(locale, persist = true) {
  activeLocale = ["en", "zh"].includes(locale) ? locale : "en";
  document.documentElement.lang = activeLocale === "zh" ? "zh-Hans" : "en";
  document.title = META_CONTENT[activeLocale].title;
  document.querySelector('meta[name="description"]').content = META_CONTENT[activeLocale].description;
  document.querySelector('meta[property="og:title"]').content = META_CONTENT[activeLocale].title;
  document.querySelector('meta[property="og:description"]').content = META_CONTENT[activeLocale].description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = activeLocale === "zh" ? ZH_COPY[key] : englishCopy.get(key);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = ALT_CONTENT[activeLocale][element.dataset.i18nAlt];
  });
  document.querySelector("[data-hero-image]").src = SCREEN_CONTENT[activeLocale].review[0];
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    element.setAttribute("aria-label", activeLocale === "zh" ? ZH_COPY[key] : englishAria.get(key));
  });
  document.querySelectorAll("[data-locale]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.locale === activeLocale));
  });

  updateProductImage();
  applyTweaks();
  if (persist) localStorage.setItem("bugsnap-locale", activeLocale);
}

function showTweaksPanel() {
  tweaksPanel.hidden = false;
}

function hideTweaksPanel() {
  tweaksPanel.hidden = true;
}

document.querySelectorAll("[data-screen]").forEach((button) => {
  button.addEventListener("click", () => {
    activeScreen = button.dataset.screen;
    if (!SCREEN_CONTENT[activeLocale][activeScreen]) return;
    productImage.classList.add("is-changing");
    window.setTimeout(() => {
      updateProductImage();
      productImage.classList.remove("is-changing");
    }, 120);
    document.querySelectorAll("[data-screen]").forEach((tab) => {
      tab.setAttribute("aria-selected", String(tab === button));
    });
  });
});

document.querySelectorAll("[data-locale]").forEach((button) => {
  button.addEventListener("click", () => applyLocale(button.dataset.locale));
});

const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".reveal").forEach((element) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      element.classList.add("is-visible");
      observer.disconnect();
    },
    { threshold: 0.12 },
  );
  observer.observe(element);
});

document.querySelectorAll("[data-variant]").forEach((button) => {
  if (button === body) return;
  button.addEventListener("click", () => setTweak("variant", button.dataset.variant));
});

document.querySelector("select[data-density]").addEventListener("change", (event) => {
  setTweak("density", event.target.value);
});

document.querySelector("[data-close-tweaks]").addEventListener("click", hideTweaksPanel);
document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "t" && !event.metaKey && !event.ctrlKey && !event.altKey) {
    tweaksPanel.hidden ? showTweaksPanel() : hideTweaksPanel();
  }
});

window.addEventListener("message", (event) => {
  if (event.data?.type === "__activate_edit_mode") showTweaksPanel();
  if (event.data?.type === "__deactivate_edit_mode") hideTweaksPanel();
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
document.querySelector("[data-header]").classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", () => {
  document.querySelector("[data-header]").classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });

if (new URLSearchParams(window.location.search).get("tweaks") === "1") showTweaksPanel();
applyLocale(activeLocale, false);
window.parent.postMessage({ type: "__edit_mode_available" }, "*");
