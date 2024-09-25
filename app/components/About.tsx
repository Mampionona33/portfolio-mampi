import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("HomePage.About"); // Spécifiez le chemin dans le dictionnaire

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 p-8"
      id="a_propos"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* Première page */}
        <div className="flex-1 p-4 border-r border-neutral-300 dark:border-neutral-700">
          <h1 className="text-4xl font-bold mb-6 border-b-2 border-neutral-700 pb-2 dark:border-neutral-300">
            {t("title")}
          </h1>
          <p className="leading-8 mb-6">{t("paragraph1")}</p>
          <p className="leading-8 mb-6">{t("paragraph2")}</p>
          <p className="leading-8 mb-6">{t("paragraph3")}</p>
        </div>

        {/* Deuxième page */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">{t("educationTitle")}</h2>
          <p className="leading-8 mb-6">{t("paragraph4")}</p>
          <p className="leading-8 mb-6">{t("paragraph5")}</p>
          <p className="leading-8">{t("paragraph6")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
