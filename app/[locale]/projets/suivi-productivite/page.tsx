import React from "react";
import { useTranslations } from "next-intl";

const SuiviProductivite = () => {
  const t = useTranslations("HomePage.Projects.items.0");

  return (
    <div className="pt-20 dark:text-white dark:bg-neutral-900 min-h-screen">
      <h1>{t("name")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};

export default SuiviProductivite;
