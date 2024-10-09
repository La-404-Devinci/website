import H2 from "../heading2";
import Project from "../project";

import { useLocale, useTranslations } from 'next-intl';

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
]

const ProjectsSection = () => {

  const locale = useLocale()  as 'en' | 'fr';

  const t = useTranslations('ProjectsSection');
  return ( 
    <div className="w-full max-w-[1700px] mx-auto mt-40 px-5 lg:px-10 flex flex-col items-center gap-12">
      <H2>
        {t('title')}
      </H2>
      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <Project 
            key={`project:${index}`}  
            project={{
              ...project,
              name: t(`${project.slug}` as const) as string,
            }}
            index={index}
            locale={locale}
          />
        ))}
      </div>
    </div>
   );
}
 
export default ProjectsSection;