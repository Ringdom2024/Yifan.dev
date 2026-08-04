import { useId } from "react";

import { SiteLanguage, useLanguage } from "context/language";

type Props = {
  className?: string;
  compact?: boolean;
};

const LanguageSwitcher: React.FC<Props> = ({
  className = "",
  compact = false,
}) => {
  const id = useId();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={`flex items-center ${className}`}>
      <label htmlFor={id} className={compact ? "sr-only" : "mr-2 font-medium"}>
        {t("language.label")}
      </label>
      <select
        id={id}
        value={language}
        onChange={(event) => setLanguage(event.target.value as SiteLanguage)}
        aria-label={t("language.label")}
        className="h-9 min-w-[4.5rem] rounded-md border border-slate-300 bg-cardlight px-2 text-sm font-medium text-bgdark shadow-sm outline-none transition hover:border-marrsgreen focus-visible:ring-2 focus-visible:ring-marrsgreen dark:border-slate-600 dark:bg-carddark dark:text-textlight dark:hover:border-carrigreen dark:focus-visible:ring-carrigreen"
      >
        <option value="en">{compact ? "EN" : t("language.english")}</option>
        <option value="zh-CN">
          {compact ? "简中" : t("language.chinese")}
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
