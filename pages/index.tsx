import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

import { getAllPosts } from "utils/api";
import { MdxMeta } from "../pages/blog/posts/[slug]";
import { useLanguage } from "context/language";

type Props = {
  blogPosts: MdxMeta[];
};

export const meta = {
  description:
    "Yifan Wang is an undergraduate student in Data Science and Big Data Technology, focused on computer vision, applied AI, data practice and software engineering.",
  author: "Yifan Wang",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/satnaing-illustration.webp`,
  siteName: "Yifan Wang Portfolio",
  imageAlt: "Yifan Wang personal portfolio character illustration",
};

const Home: NextPage<Props> = ({ blogPosts }) => {
  const { language } = useLanguage();
  const localizedMeta =
    language === "zh-CN"
      ? {
          ...meta,
          description:
            "王一凡是数据科学与大数据技术专业本科生，重点关注计算机视觉、人工智能应用、数据实践与软件工程。",
          imageAlt: "王一凡个人主页的人物插画",
        }
      : meta;
  return (
    <>
      <AppHead
        title={
          language === "zh-CN"
            ? "王一凡 - 数据科学与人工智能学习者"
            : "Yifan Wang - Data Science and Applied AI Student"
        }
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={localizedMeta}
      />
      <Loader>Yifan.dev</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <BlogSection posts={blogPosts} />
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = getAllPosts([
    "coverImage",
    "coverImageAlt",
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
  ]);

  return {
    props: {
      blogPosts,
    },
  };
};

export default Home;
