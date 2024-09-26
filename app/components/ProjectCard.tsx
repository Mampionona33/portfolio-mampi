import { useLocale } from "next-intl";

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  technologies?: string;
}

const ProjectCard = ({
  name,
  description,
  link,
  technologies,
}: ProjectCardProps) => {
  const locale = useLocale();

  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p className="mb-4">{description}</p>
      <p className="mb-4">{technologies}</p>
      <a href={`${locale}/${link}`} className="text-blue-500 underline">
        En savoir plus
      </a>
    </div>
  );
};

export default ProjectCard;
