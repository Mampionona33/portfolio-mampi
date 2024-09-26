import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("HomePage.About"); // Spécifiez le chemin dans le dictionnaire

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 p-8"
      id="a_propos"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row w-full">
        {/* Première colonne */}
        <div className="flex-2 p-4 border-r border-neutral-300 dark:border-neutral-700 w-full">
          <h1 className="text-4xl font-bold mb-6 border-b-2 border-neutral-700 pb-2 dark:border-neutral-300">
            {t("title")}
          </h1>
          <p className="leading-2 mb-6">{t("paragraph1")}</p>
          <p className="leading-2 mb-6">{t("paragraph2")}</p>
          <p className="leading-2 mb-6">{t("paragraph3")}</p>
        </div>

        {/* Deuxième colonne */}
        <div className="flex-2 p-4 w-full">
          <h2 className="text-2xl font-bold mb-4">{t("educationTitle")}</h2>
          <p className="leading-2 mb-6">{t("paragraph4")}</p>
          <p className="leading-2 mb-6">{t("paragraph5")}</p>
          <p className="leading-2">{t("paragraph6")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
