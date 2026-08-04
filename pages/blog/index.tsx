import type { GetStaticProps, NextPage } from "next";
import { MdxMeta } from "./posts/[slug]";

import AppHead from "@/components/AppHead";
import BlogHeroSection from "@/sections/BlogHeroSection";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { getAllPosts } from "utils/api";
import { useFilter } from "context/filter";
import Loader from "@/components/Loader";
import { useLanguage } from "context/language";

type Props = {
  posts: MdxMeta[];
};

const Blog: NextPage<Props> = ({ posts }) => {
  const { searchText } = useFilter();
  const { language, t } = useLanguage();
  const filteredPosts = posts.filter(({ title }) =>
    title.toLowerCase().includes(searchText.toLowerCase())
  );
  const listPosts =
    searchText === ""
      ? filteredPosts.filter((post) => !post.featured)
      : filteredPosts;

  return (
    <>
      <AppHead
        title={language === "zh-CN" ? "博客 - 王一凡" : "Blog - Yifan Wang"}
      />
      <Loader>{t("blog.heroTitle")}</Loader>
      <div className="bg-bglight dark:bg-bgdark min-h-screen">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="mb-20">
            <BlogHeroSection />
            {searchText === "" && (
              <>
                <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
                  <h2 className="text-2xl font-medium mb-2">
                    {t("blog.featured")}
                  </h2>
                  <ul>
                    {posts.map(
                      (post) =>
                        post.featured && (
                          <BlogCard post={post} key={post.slug} />
                        )
                    )}
                  </ul>
                </div>
                <hr
                  aria-hidden="true"
                  className="mx-4 sm:mx-20 md:mx-auto max-w-xl lg:max-w-2xl my-6"
                />
              </>
            )}
            <div className="px-4 sm:px-8 md:px-20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-2">
                {searchText === "" && t("blog.allPosts")}
                {searchText !== "" && <div>{t("blog.searchResults")}</div>}
              </h2>
              <ul>
                {listPosts.map((post) => (
                  <BlogCard post={post} key={post.slug} />
                ))}
              </ul>
              {listPosts.length === 0 && (
                <div className="my-8 rounded-md border border-slate-300 bg-cardlight px-5 py-8 text-center text-slate-600 dark:border-slate-600 dark:bg-carddark dark:text-slate-200">
                  {t("blog.empty")}
                </div>
              )}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
  ]);

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
