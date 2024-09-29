'use client';

import H2 from "../heading2";
import Project from "../project";
import { useI18n, useScopedI18n } from '../../locales/client';

const projects = [
  {
    "name": "Pixel War",
    "slug": "pixel-war",
    "date": "2023-2024",
    "image": "pixelwar.png",
  },
  {
    "name": "Hacker's Journey",
    "slug": "hacker-journey",
    "date": "2023-2024",
    "image": "hackerjourney.png",
  },
  {
    "name": "Forum Associatif",
    "slug": "forum-associatif",
    "date": "2023-2024",
    "image": "forumassociatif.png",
  },
];

const ProjectsSection = () => {

  const t = useI18n(); 
  const scopedT = useScopedI18n('projects');
  return (
    <div className="w-full max-w-[1700px] mx-auto mt-40 px-5 lg:px-10 flex flex-col items-center gap-12">
      <H2>
        {t('projects.title')}
      </H2>
      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <Project
            key={`project:${index}`}
            project={{
              ...project,
              name: scopedT(`project.${project.slug}.name` as any),
            }}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
