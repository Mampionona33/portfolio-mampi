import { useTranslations } from "next-intl";

const ProjectPage = () => {
  const t = useTranslations("HomePage.Projects");

  return (
    <div>
      <h1>Titre</h1>
      <p>Mon projet</p>
    </div>
  );
};

export default ProjectPage;
