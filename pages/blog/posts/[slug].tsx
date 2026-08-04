import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";

import BlogHeader from "@/components/blog/BlogHeader";
import SkipToMain from "@/components/SkipToMain";
import SocialLinks from "@/components/SocialLinks";
import AppHead, { Meta } from "@/components/AppHead";
import Footer from "@/components/Footer";
import markdownToHtml from "utils/markdownToHtml";
import { getAllPosts, getPostBySlug } from "utils/api";
import PostBody from "@/components/blog/PostBody";
import Tag from "@/components/blog/Tag";
import DateTime from "@/components/DateTime";
import HeadCategory from "@/components/blog/HeadCategory";
import { useLanguage } from "context/language";

export interface MdxMeta extends Meta {
  title: string;
  datetime: string;
  excerpt: string;
  slug: string;
  category: string;
  coverImage?: string;
  tags?: string[];
  content: string;
  coverImageWidth?: string;
  coverImageHeight?: string;
  featured: boolean;
  language: "English" | "Simplified Chinese";
}

type Props = {
  post: MdxMeta;
};

const BlogLayout: React.FC<Props> = ({ post }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const siteUrl = (
    process.env.NEXT_PUBLIC_URL || "http://localhost:3000"
  ).replace(/\/$/, "");
  const postUrl = `${siteUrl}/blog/posts/${post.slug}`;

  const copyPostUrl = async () => {
    const currentUrl = window.location.href || postUrl;

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(currentUrl);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = currentUrl;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  return (
    <>
      <AppHead
        title={`${post.title} - 王一凡`}
        url={`${process.env.NEXT_PUBLIC_URL}/blog/posts/${post.slug}`}
        meta={post}
      />
      <div className="bg-bglight dark:bg-bgdark">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <BlogHeader />
          <SocialLinks />
          <main id="main" className="blog-main">
            <article className="blog-section">
              <h1 className="font-semibold md:font-bold text-3xl md:text-4xl">
                {post.title}
              </h1>
              <div className="mt-2 mb-1 italic text-marrsdark dark:text-carrigreen">
                <DateTime datetime={post.datetime} />
              </div>
              <HeadCategory category={post.category} />
              {post.tags && (
                <div className="my-2">
                  {post.tags.map((tag: string) => (
                    <Tag tag={tag} key={tag} />
                  ))}
                </div>
              )}
              {post.coverImage && (
                <div className="bg-cardlight dark:bg-carddark">
                  <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt || "Picture"}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    priority
                    width={Number(post.coverImageWidth) || 1200}
                    height={Number(post.coverImageHeight) || 700}
                  />
                </div>
              )}
              <PostBody content={post.content} />

              <div className="my-8 border-t border-black/10 pt-6 dark:border-white/10">
                <button
                  type="button"
                  onClick={copyPostUrl}
                  className="link-outline inline-flex items-center gap-2 rounded bg-marrsgreen px-4 py-2 font-medium text-white transition hover:bg-marrslight focus-visible:outline-marrsgreen dark:bg-carrigreen dark:text-bgdark dark:hover:bg-carrilight dark:focus-visible:outline-carrigreen"
                  aria-live="polite"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  {copied ? t("blog.copied") : t("blog.copyLink")}
                </button>
              </div>
            </article>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string, [
    "title",
    "datetime",
    "description",
    "slug",
    "author",
    "content",
    "ogImage",
    "ogImageAlt",
    "coverImage",
    "coverImageWidth",
    "coverImageHeight",
    "category",
    "tags",
    "type",
    "language",
  ]);
  const content = await markdownToHtml((post.content as string) || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default BlogLayout;
