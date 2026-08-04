import { useSection } from "context/section";
import { TranslationKey, useLanguage } from "context/language";
import { contactEmail } from "utils/contact";

const SocialLinks: React.FC<{ page?: string }> = ({ page }) => {
  const { currentSection } = useSection();
  const { t } = useLanguage();
  const email = contactEmail;
  return (
    <>
      {page === "index" ? (
        <div className="hidden fixed left-10 bottom-1/3 md:flex flex-col w-6 h-52 items-center justify-between">
          {navLinks.map((nav) => {
            return (
              <a
                title={t(nav.labelKey)}
                href={nav.url}
                key={nav.url}
                className={`transition-all outline-marrsdark dark:outline-textlight hover:bg-marrsgreen dark:hover:bg-carrigreen ${
                  currentSection === nav.activeKey
                    ? "bg-marrsgreen dark:bg-carrigreen rotate-0"
                    : "opacity-50 focus-visible:opacity-100 hover:opacity-80 rotate-45 hover:rotate-12"
                } w-3 h-3 border-2 border-marrsgreen dark:border-carrigreen`}
              ></a>
            );
          })}
        </div>
      ) : email ? (
        <div className="hidden fixed left-10 bottom-0 md:flex flex-col w-6 h-56 items-center justify-between">
          <div className="-rotate-90 text-lg tracking-widest">
            <a
              href={`mailto:${email}`}
              className="link-outline hover:text-marrsgreen dark:hover:text-carrigreen"
            >
              {email}
            </a>
          </div>
          <div className="w-40 h-1 bg-bgdark dark:bg-bglight rotate-90"></div>
        </div>
      ) : null}
    </>
  );
};

const navLinks = [
  {
    url: "#",
    text: "Welcome",
    labelKey: "nav.welcome" as TranslationKey,
    activeKey: "welcome",
  },
  {
    url: "#whoami",
    text: "Who am i?",
    labelKey: "nav.whoami" as TranslationKey,
    activeKey: "who am i?",
  },
  {
    url: "#projects",
    text: "Projects",
    labelKey: "nav.projects" as TranslationKey,
    activeKey: "projects",
  },
  {
    url: "#blog",
    text: "Blog",
    labelKey: "nav.blog" as TranslationKey,
    activeKey: "blog",
  },
  {
    url: "#contact",
    text: "Contact",
    labelKey: "nav.contact" as TranslationKey,
    activeKey: "contact",
  },
];

export default SocialLinks;
