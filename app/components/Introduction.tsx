import { useTranslations } from "next-intl";

const Introduction = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="min-h-screen flex items-center" id="accueil">
      <div className="px-12">
        <hr className="h-2 bg-neutral-900 dark:bg-neutral-100 rounded w-1/6 mb-6" />
        <div className="flex flex-col gap-2 w-full sm:w-full md:w-1/2">
          <h1 className="text-3xl font-medium">{t("Introduction.title")}</h1>
          <p>{t("Introduction.description")}</p>
        </div>
      </div>
    </section>
  );
};
export default Introduction;
