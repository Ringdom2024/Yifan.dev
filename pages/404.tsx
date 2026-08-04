import type { NextPage } from "next";

import AppHead from "@/components/AppHead";
import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";

import { meta } from "pages";
import Link from "next/link";
import { useLanguage } from "context/language";

const Home: NextPage = () => {
  const { language, t } = useLanguage();
  return (
    <>
      <AppHead
        title={
          language === "zh-CN"
            ? "页面未找到 - 王一凡"
            : "Page not found - Yifan Wang"
        }
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="h-screen flex flex-col justify-center selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <div className="flex justify-center items-center flex-col mt-auto">
            <h1 className="text-8xl xs:text-9xl font-bold text-marrsgreen dark:text-carrigreen">
              404
            </h1>
            <div className="text-lg xs:text-2xl my-2">
              {t("notFound.title")}
            </div>
            <div className="max-w-xs text-center mb-10">
              {t("notFound.body")}
            </div>
            <div className="flex space-x-4">
              <LinkButton href="/" outline>
                {t("notFound.home")}
              </LinkButton>
              <Link
                href="/blog"
                className="link flex items-center px-4 lg:text-xl hover:underline"
              >
                {t("notFound.blog")}
              </Link>
            </div>
          </div>
          <Footer noPadding />
        </div>
      </div>
    </>
  );
};

export default Home;
