import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import LinkButton from "@/components/LinkButton";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import { useLanguage } from "context/language";
import { contactEmail, githubLabel, githubUrl } from "utils/contact";

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for contact section
  const contactSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    contactSection && onSectionChange!("contact");
  }, [contactSection]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section min-h-[700px] text-center"
    >
      <div className="text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="text-2xl inline-block my-6 font-medium">
            {t("contact.heading")}
          </h2>
        </RoughNotation>
      </div>
      <div className="mt-8 mb-20">
        <h3 className="font-medium text-lg mb-2 md:text-3xl" ref={elementRef}>
          {t("contact.title")}
        </h3>
        <p className="mb-6 mx-auto max-w-lg md:mb-10 lg:leading-loose">
          {t("contact.body")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <LinkButton href={`mailto:${contactEmail}`}>
            {t("contact.email")}
          </LinkButton>
          <LinkButton href={githubUrl} targetBlank outline>
            {t("contact.github")}
          </LinkButton>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-4">
          <a
            href={`mailto:${contactEmail}`}
            className="link-outline hover:text-marrsgreen dark:hover:text-carrigreen"
          >
            {contactEmail}
          </a>
          <span aria-hidden="true" className="hidden opacity-40 sm:inline">
            /
          </span>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="link-outline hover:text-marrsgreen dark:hover:text-carrigreen"
          >
            {githubLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
