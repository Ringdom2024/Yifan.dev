import { useEffect, useState } from "react";
import { useLanguage } from "context/language";

const DateTime = ({ datetime }: { datetime: string }) => {
  const { language, t } = useLanguage();
  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  const [formattedTime, setFormattedTime] = useState<string | null>(null);

  useEffect(() => {
    const myDatetime = new Date(datetime);
    const modifiedDate = myDatetime.toLocaleDateString(language, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const modifiedTime = myDatetime.toLocaleTimeString(language, {
      hour: "2-digit",
      minute: "2-digit",
    });
    setFormattedDate(modifiedDate);
    setFormattedTime(modifiedTime);
  }, [datetime, language]);

  return (
    <div className="relative">
      <span className="sr-only">{t("date.postedOn")} </span>
      {formattedDate} <span aria-hidden="true">|</span>
      <span className="sr-only">&nbsp;{t("date.at")}&nbsp;</span>{" "}
      {formattedTime}
    </div>
  );
};

export default DateTime;
