import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import redStarImage from "public/projects/red-star-smart-government.webp";
import tt100kImage from "public/projects/tt100k-detection.webp";
import researchImage from "public/projects/research-management.webp";
import heritageImage from "public/projects/heritage-platform.webp";
import dataImage from "public/projects/data-analysis.webp";
import portfolioImage from "public/projects/portfolio-blog.webp";
import { TranslationKey, useLanguage } from "context/language";
import { githubUrl } from "utils/contact";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();
  const { language, t } = useLanguage();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">{t("projects.heading")}</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        {t("projects.intro")}
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.titleKey}
            index={index}
            project={{
              ...project,
              title: t(project.titleKey),
              type: t(project.typeKey),
              desc: t(project.descKey),
            }}
          />
        ))}
      </div>
      <div className="others mx-auto mb-16 mt-4 max-w-3xl border-t border-marrsgreen/20 pt-7 text-center leading-relaxed dark:border-carrigreen/20">
        {t("projects.morePrefix")}
        {language === "zh-CN" ? "" : " "}
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="link font-medium underline decoration-2 underline-offset-4"
        >
          {t("projects.moreLink")}
        </a>
        {t("projects.moreSuffix")}
      </div>
    </section>
  );
};

const projects = [
  {
    titleKey: "project.redStar.title" as TranslationKey,
    typeKey: "project.redStar.type" as TranslationKey,
    image: (
      <Image
        src={redStarImage}
        sizes="100vw"
        fill
        alt="红星智政数字人系统架构插画"
        className="transition-transform duration-500 hover:scale-105 object-cover"
      />
    ),
    descKey: "project.redStar.desc" as TranslationKey,
    tags: ["SenseVoice", "Qwen", "FAISS", "Wav2Lip", "WebRTC"],
    bgColor: "bg-[#6f2b2b] dark:bg-[#402126]",
  },
  {
    titleKey: "project.tt100k.title" as TranslationKey,
    typeKey: "project.tt100k.type" as TranslationKey,
    image: (
      <Image
        src={tt100kImage}
        sizes="100vw"
        fill
        alt="TT100K 交通标志目标检测插画"
        className="transition-transform duration-500 hover:scale-105 object-cover"
      />
    ),
    descKey: "project.tt100k.desc" as TranslationKey,
    tags: ["PyTorch", "Ultralytics", "YOLO", "TT100K"],
    bgColor: "bg-[#d8e4e5] dark:bg-[#263a43]",
  },
  {
    titleKey: "project.research.title" as TranslationKey,
    typeKey: "project.research.type" as TranslationKey,
    image: (
      <Image
        src={researchImage}
        sizes="100vw"
        fill
        alt="高校科研竞赛项目管理系统插画"
        className="transition-transform duration-500 hover:scale-105 object-cover"
      />
    ),
    descKey: "project.research.desc" as TranslationKey,
    tags: ["Java", "JSP", "Servlet", "MySQL", "Tomcat"],
    bgColor: "bg-[#d9ddd1] dark:bg-[#31403c]",
  },
  {
    titleKey: "project.heritage.title" as TranslationKey,
    typeKey: "project.heritage.type" as TranslationKey,
    image: (
      <Image
        src={heritageImage}
        sizes="100vw"
        fill
        alt="非遗马面裙纹样数字化设计插画"
        className="transition-transform duration-500 hover:scale-105 object-cover"
      />
    ),
    descKey: "project.heritage.desc" as TranslationKey,
    tags: ["Vue 3", "uni-app", "AIGC", "Mini Program"],
    bgColor: "bg-[#ead9d1] dark:bg-[#463035]",
  },
  {
    titleKey: "project.data.title" as TranslationKey,
    typeKey: "project.data.type" as TranslationKey,
    image: (
      <Image
        src={dataImage}
        sizes="100vw"
        fill
        alt="数据采集清洗与可视化分析流程插画"
        className="transition-transform duration-500 hover:scale-105 object-cover"
      />
    ),
    descKey: "project.data.desc" as TranslationKey,
    tags: ["Python", "Scrapy", "Playwright", "Pandas", "MySQL"],
    bgColor: "bg-[#d4e3df] dark:bg-[#273d3b]",
  },
  {
    titleKey: "project.portfolio.title" as TranslationKey,
    typeKey: "project.portfolio.type" as TranslationKey,
    image: (
      <Image
        src={portfolioImage}
        sizes="100vw"
        fill
        alt="王一凡个人主页与技术博客工作台插画"
        className="transition-transform duration-500 hover:scale-105 object-cover"
      />
    ),
    descKey: "project.portfolio.desc" as TranslationKey,
    tags: ["Next.js", "TypeScript", "TailwindCSS", "GSAP", "MDX"],
    bgColor: "bg-[#cbdde5] dark:bg-[#263642]",
  },
];

export default ProjectSection;
