import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type SiteLanguage = "en" | "zh-CN";

const english = {
  "language.label": "Site language",
  "language.english": "English",
  "language.chinese": "Simplified Chinese",
  "theme.toggle": "Toggle light and dark theme",
  "skip.main": "Skip to main content",
  "nav.whoami": "Who am I?",
  "nav.welcome": "Welcome",
  "nav.projects": "Projects",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "nav.home": "Home",
  "nav.categories": "Categories",
  "nav.tags": "Tags",
  "nav.portfolio": "Portfolio",
  "hero.background":
    "DATA SCIENCE APPLIED AI COMPUTER VISION SOFTWARE ENGINEERING",
  "hero.greeting": "Hi, I am",
  "hero.name": "Yifan Wang",
  "hero.role": "A Data Science and Applied AI Student",
  "hero.intro1":
    "I study Data Science and Big Data Technology at Shandong Women's University.",
  "hero.intro2":
    "I connect data, AI and software engineering through practical projects, with a current focus on computer vision and applied AI systems.",
  "hero.contact": "Contact me!",
  "hero.scroll": "Scroll",
  "hero.characterAlt": "Yifan Wang character illustration",
  "hero.laptopAlt": "Laptop illustration",
  "about.heading": "Who am I?",
  "about.intro":
    "I am an undergraduate building a practical foundation across Python, Java, databases, data processing, computer vision and web systems. I value honest progress, reproducible work and complete projects over long lists of tools.",
  "about.education": "My current learning path and areas of practice.",
  "projects.heading": "Featured Projects",
  "projects.intro":
    "These projects show how I turn coursework, experiments and ideas into systems that can run, be demonstrated and keep improving.",
  "projects.morePrefix":
    "These cards show only the most complete part of my work. More experiments, tools and evolving code live on",
  "projects.moreLink": "my GitHub profile",
  "projects.moreSuffix": ".",
  "project.redStar.title": "Red Star Smart Government",
  "project.redStar.type": "Applied AI",
  "project.redStar.desc":
    "A digital human interaction system for public service scenarios, connecting speech recognition, RAG retrieval, a local Qwen model, speech synthesis and lip sync.",
  "project.tt100k.title": "TT100K Traffic Sign Detection",
  "project.tt100k.type": "Computer Vision",
  "project.tt100k.desc":
    "A YOLO traffic sign detection practice covering dataset preparation, local GPU training, evaluation metrics and small-object error analysis.",
  "project.research.title": "University Research Project Management",
  "project.research.type": "Web System",
  "project.research.desc":
    "A Java Web system for application, review, progress materials, evaluation, statistics and archiving in university research competitions.",
  "project.heritage.title": "Digital Mamianqun Platform",
  "project.heritage.type": "Cultural Innovation",
  "project.heritage.desc":
    "A cultural heritage digitization concept combining AIGC pattern design, digital resource management and a uni-app based mini program.",
  "project.data.title": "Data Collection and Analysis",
  "project.data.type": "Data Engineering Practice",
  "project.data.desc":
    "Practical data collection and cleaning work using Requests, Scrapy, Playwright and MySQL, with attention to retries, deduplication and compliance.",
  "project.portfolio.title": "Personal Portfolio and Blog",
  "project.portfolio.type": "Web Development",
  "project.portfolio.desc":
    "A bilingual personal portfolio with a Chinese technical blog, used to document projects, experiments, deployment notes and learning progress.",
  "project.stars": "View stargazers for",
  "project.code": "View source code for",
  "project.demo": "View live demo of",
  "project.stack": "Technology stack used in",
  "blog.homeHeading": "Blog",
  "blog.homeIntro":
    "I write down the experiments that worked, the configurations that did not, and the decisions made between them. The result matters, but the reasoning is usually more reusable.",
  "blog.readAll": "Read all blog posts",
  "blog.heroTitle": "Yifan Wang's Blog",
  "blog.intro1": "Welcome to my working notes on technology.",
  "blog.intro2":
    "You will find the excitement of a model finally running, but also stalled metrics, broken environments and the logs that led me out.",
  "blog.intro3":
    "I try to explain each problem honestly and clearly, without turning a learning process into a polished answer key. Articles are maintained in Simplified Chinese.",
  "blog.githubFollow": "",
  "blog.search": "Search for anything...",
  "blog.featured": "Featured Posts",
  "blog.allPosts": "More Posts",
  "blog.searchResults": "Search results",
  "blog.empty": "No posts match the current search.",
  "blog.categories": "Categories",
  "blog.tags": "Tags",
  "blog.category": "Category:",
  "blog.tag": "Tag:",
  "blog.share": "Share",
  "blog.copyLink": "Copy link",
  "blog.copied": "Copied",
  "blog.uncategorized": "Uncategorized",
  "date.postedOn": "Posted on:",
  "date.at": "at",
  "contact.heading": "Contact",
  "contact.title": "Let projects and ideas connect us.",
  "contact.body":
    "I am open to project exchange, learning opportunities and practical collaboration in data science, computer vision, applied AI and software development.",
  "contact.cta": "Get in touch!",
  "contact.email": "Send email",
  "contact.github": "View GitHub",
  "footer.coded": "Coded with",
  "footer.love": "love",
  "footer.by": "by Yifan Wang",
  "notFound.title": "Page not found",
  "notFound.body":
    "The page you are looking for does not exist, or the URL may contain a typo.",
  "notFound.home": "Go back home",
  "notFound.blog": "Go to Blog",
} as const;

export type TranslationKey = keyof typeof english;

const chinese: Record<TranslationKey, string> = {
  "language.label": "网站语言",
  "language.english": "English",
  "language.chinese": "简体中文",
  "theme.toggle": "切换浅色和深色主题",
  "skip.main": "跳转到主要内容",
  "nav.whoami": "关于我",
  "nav.welcome": "欢迎",
  "nav.projects": "项目",
  "nav.blog": "博客",
  "nav.contact": "联系",
  "nav.home": "首页",
  "nav.categories": "分类",
  "nav.tags": "标签",
  "nav.portfolio": "个人主页",
  "hero.background": "数据科学 人工智能 计算机视觉 软件工程",
  "hero.greeting": "你好，我是",
  "hero.name": "王一凡",
  "hero.role": "数据科学与人工智能学习者",
  "hero.intro1": "我是一名全栈开发人员，热衷于交付卓越的成果。",
  "hero.intro2":
    "凭借我在前端 React 和 Vue 以及后端 Python、FastAPI、NodeJS 和 Yolo 方面的专业知识，我将独特的技术技能和创造性问题解决能力相结合，运用到我参与的每一个项目中。",
  "hero.contact": "联系我",
  "hero.scroll": "向下浏览",
  "hero.characterAlt": "王一凡的人物插画",
  "hero.laptopAlt": "笔记本电脑插画",
  "about.heading": "关于我",
  "about.intro":
    "我是一名正在建立技术体系的行动者，学习范围包括 Python、Java、数据库、数据处理、计算机视觉与 Web 系统。我更看重真实进步、可复现过程和完整项目，而不是罗列大量技术名词。",
  "about.education": "以下是我的教育背景。",
  "projects.heading": "精选项目",
  "projects.intro":
    "这些项目记录我如何把课程、实验和想法推进为能够运行、应用并持续优化的系统。",
  "projects.morePrefix": "您可以在",
  "projects.moreLink": "我的 GitHub 个人资料",
  "projects.moreSuffix": "中查看其他项目。",
  "project.redStar.title": "红星智政",
  "project.redStar.type": "人工智能应用",
  "project.redStar.desc":
    "面向党政服务场景的数字人交互系统，连接语音识别、RAG 检索、本地 Qwen、语音合成与口型驱动。",
  "project.tt100k.title": "TT100K 交通标志检测",
  "project.tt100k.type": "计算机视觉",
  "project.tt100k.desc":
    "围绕 YOLO 开展交通标志检测实践，覆盖数据准备、本地 GPU 训练、指标评估和小目标误差分析。",
  "project.research.title": "高校科研竞赛项目管理系统",
  "project.research.type": "Web 系统",
  "project.research.desc":
    "基于 Java Web 实现项目申报、审核、阶段材料、成果评鉴、统计与归档等业务流程。",
  "project.heritage.title": "非遗马面裙数字化平台",
  "project.heritage.type": "文化创新",
  "project.heritage.desc":
    "将 AIGC 纹样设计、数字资源管理与 uni-app 小程序结合的非遗数字化项目实践。",
  "project.data.title": "数据采集与分析实践",
  "project.data.type": "数据工程实践",
  "project.data.desc":
    "使用 Requests、Scrapy、Playwright 与 MySQL 进行数据采集和清洗，并关注重试、去重与合规边界。",
  "project.portfolio.title": "个人主页与技术博客",
  "project.portfolio.type": "Web 开发",
  "project.portfolio.desc":
    "支持中英文界面的个人主页与中文技术博客，用于沉淀项目、实验、部署记录和学习过程。",
  "project.stars": "查看收藏用户：",
  "project.code": "查看源代码：",
  "project.demo": "查看在线演示：",
  "project.stack": "项目技术栈：",
  "blog.homeHeading": "博客",
  "blog.homeIntro":
    "我把踩过的坑、跑过的实验和推翻重来的方案写在这里。文章不只告诉你结果，也尽量解释我为什么这样判断。",
  "blog.readAll": "查看全部博客文章",
  "blog.heroTitle": "王一凡的博客",
  "blog.intro1": "大家好！欢迎来到我的个人博客。",
  "blog.intro2":
    "在这个博客里，我会写一些关于我的项目（我做什么/我怎么做的）、我的个人经历以及一些杂事。",
  "blog.intro3": "你可以在我的社交媒体和",
  "blog.githubFollow": "Github账号上关注我。",
  "blog.search": "搜索文章...",
  "blog.featured": "精选文章",
  "blog.allPosts": "更多文章",
  "blog.searchResults": "搜索结果",
  "blog.empty": "没有符合当前搜索条件的文章。",
  "blog.categories": "文章分类",
  "blog.tags": "文章标签",
  "blog.category": "分类：",
  "blog.tag": "标签：",
  "blog.share": "分享",
  "blog.copyLink": "复制链接",
  "blog.copied": "已复制",
  "blog.uncategorized": "未分类",
  "date.postedOn": "发布于：",
  "date.at": "时间",
  "contact.heading": "联系我",
  "contact.title": "让项目和想法成为认识彼此的起点。",
  "contact.body":
    "欢迎交流数据科学、计算机视觉、人工智能应用与软件开发，也期待真实的学习机会和项目合作。",
  "contact.cta": "与我联系",
  "contact.email": "发送邮件",
  "contact.github": "查看 GitHub",
  "footer.coded": "用",
  "footer.love": "热爱",
  "footer.by": "编写，作者王一凡",
  "notFound.title": "页面未找到",
  "notFound.body": "你访问的页面不存在，或者网址中可能有拼写错误。",
  "notFound.home": "返回首页",
  "notFound.blog": "前往博客",
};

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  t: (key: TranslationKey, variables?: Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export const ProvideLanguage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguageState] = useState<SiteLanguage>("zh-CN");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("site-language");
    if (storedLanguage === "en" || storedLanguage === "zh-CN") {
      setLanguageState(storedLanguage);
      document.documentElement.lang = storedLanguage;
    } else {
      document.documentElement.lang = "zh-CN";
    }
  }, []);

  const setLanguage = (nextLanguage: SiteLanguage) => {
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.localStorage.setItem("site-language", nextLanguage);
  };

  const value = useMemo<LanguageContextValue>(() => {
    const dictionary = language === "zh-CN" ? chinese : english;
    return {
      language,
      setLanguage,
      t: (key, variables = {}) => {
        let text: string = dictionary[key] ?? english[key];
        Object.entries(variables).forEach(([name, value]) => {
          text = text.replace(`{${name}}`, value);
        });
        return text;
      },
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside ProvideLanguage");
  return context;
};
