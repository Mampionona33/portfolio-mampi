import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";

interface Project {
  name: string;
  technologies: string;
  description: string;
  link: string;
}

const Projects = () => {
  const t = useTranslations("HomePage.Projects");

  const numberOfProjects = 4;
  console.log("t", t("items"));
  const projects: Project[] = [];

  for (let i = 0; i < numberOfProjects; i++) {
    const name = t(`items.${i}.name`);
    const technologies = t(`items.${i}.technologies`);
    const description = t(`items.${i}.description`);
    const link = t(`items.${i}.link`);

    projects.push({
      name,
      technologies,
      description,
      link,
    });
  }

  return (
    <section
      className="min-h-screen bg-neutral-100 dark:bg-neutral-900 p-8"
      id="projects"
    >
      <h1 className="text-4xl font-bold mb-6 border-b-2 border-neutral-700 pb-2 dark:border-neutral-300">
        {t("title")}
      </h1>
      <div className="flex flex-col gap-8">
        {projects &&
          projects.map((project, index) => (
            <div key={index}>
              <ProjectCard {...project} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
