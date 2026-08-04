import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useFilter } from "context/filter";
import { useLanguage } from "context/language";
import { githubUrl } from "utils/contact";

const BlogHeroSection: React.FC = () => {
  const { searchText, onSearch } = useFilter();
  const { t } = useLanguage();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch!(e.target.value);
  };

  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // text animation after initial load
    gsap.fromTo(
      q(".main-header"),
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "transform,opacity",
      }
    );

    // intro animation
    let tl = gsap.timeline({
      defaults: { stagger: 0.08, duration: 0.35, ease: "power2.out" },
    });
    tl.fromTo(q(".intro-1"), { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(q(".intro-2"), { y: 30, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(q(".intro-3"), { y: 30, opacity: 0 }, { y: 0, opacity: 1 });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-4 pt-20 md:pt-24 px-4 sm:px-8 md:px-20 max-w-4xl mx-auto"
    >
      <div className="mt-10">
        <div className="overflow-hidden py-1">
          <h1 className="main-header text-4xl lg:text-5xl font-bold">
            {t("blog.heroTitle")}
          </h1>
        </div>
        <div>
          <p className="intro-1 mt-4 mb-2">{t("blog.intro1")}</p>
          <p className="intro-2">{t("blog.intro2")}</p>
          <p className="intro-3">
            {t("blog.intro3")}
            {t("blog.githubFollow") && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                {t("blog.githubFollow")}
              </a>
            )}
          </p>
        </div>
      </div>
      <label className="relative block my-4">
        <input
          className="placeholder:italic placeholder:text-opacity-75 py-3 pr-14 pl-5 
                    block bg-cardlight dark:bg-carddark w-full rounded shadow-md
                    border border-cardlight dark:border-carddark border-opacity-40 
                    focus:outline-none focus:border-marrslight focus:dark:border-carrilight"
          placeholder={t("blog.search")}
          type="text"
          name="search"
          value={searchText}
          onChange={handleSearch}
          autoComplete="off"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-5 opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            aria-hidden="true"
            className="fill-marrsgreen dark:fill-carrigreen"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </span>
      </label>
    </section>
  );
};

export default BlogHeroSection;
