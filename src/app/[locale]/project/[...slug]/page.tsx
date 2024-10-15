"use client";

import forumAssociatif from "@/assets/projects/forumassociatif.png";
import hackerJourney from "@/assets/projects/hackerjourney.png";
import pixelwar from "@/assets/projects/pixelwar.png";
import LaunchProjectButton from "@/components/buttons/launch-project-button";
import SourceCodeButton from "@/components/buttons/source-code-button";
import ProjectH1 from "@/components/project-heading1";
import ProjectImage from "@/components/project-image";
import Footer from "@/components/sections/footer";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

const projectsList = [
  {
    "slug": "pixel-war",
    "title": "Pixel War",
    "images": [pixelwar],
    "source-link": "https://github.com/La-404-Devinci/pixel-war",
    "project-link": "https://war.404devinci.fr/"

  },
  {
    "slug": "hacker-journey",
    "title": "Hacker's Journey",
    "images": [hackerJourney],
    "source-link": "https://github.com/Kan-A-Pesh/hack-journey",
    "project-link": "https://hack.404devinci.fr/"
  },
  {
    "slug": "forum-associatif",
    "title": "Forum Associatif",
    "images": [forumAssociatif],
    "source-link": "https://github.com/La-404-Devinci/forum-associatif-numerique",
    "project-link": "https://www.forum-associatif-numerique.fr/"
  },
]

const ProjectPage = () => {

  const locale = useLocale();
  const t = useTranslations("ProjectPage"); 
  const params = useParams<{ locale: string; slug: string[] }>();
  const slug = params.slug[0];  

  const currentProject = projectsList.find((project) => project.slug === slug);
  
  if (!currentProject) {
    notFound();
  }
  
  const services = (t(`${slug}.services`)).split(", ");
  
  return ( 
    <div>
      <header className="px-4 lg:px-10 w-full max-w-[1700px] mx-auto">
        <nav className="flex items-center justify-end w-full h-20">
          <a
            href="/" 
            className="text-gray-50 text-lg font-medium inline-flex items-center gap-2
            cursor-pointer group ">
            <div className="h-[1px] w-8 group-hover:w-12 transition-[width] bg-gray-50" />
            <span>
            {t("close-button")}
            </span>
          </a>
        </nav>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mt-5">
          <div className="max-w-2xl flex flex-col gap-10">
            <ProjectH1>
              {t(`${slug}.title`)}
            </ProjectH1>
            <div className="flex items-center gap-4 flex-wrap">
              <LaunchProjectButton href={currentProject["project-link"]}>
                {t("launch-button")}
              </LaunchProjectButton>
              <SourceCodeButton href={currentProject["source-link"]}>
                {t("source-code")}
              </SourceCodeButton>
            </div>
          </div>
          <div className="w-full lg:max-w-lg">
            <p className="text-gray-300 font-medium">
              {t(`${slug}.description`)}
            </p>
            <div className="mt-8 flex items-start justify-between flex-wrap gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-gray-50 uppercase font-semibold">
                {t(`${slug}.release-name`)}
                </span>
                <span className="text-gray-300">
                  {t(`${slug}.release-value`)}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-50 uppercase font-semibold">Services</span>
                <div className="flex flex-col">
                {services.map((service, index) => (
                  <span key={`service:${index}`} className="text-gray-300">
                    {service}
                  </span>
                ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-50 uppercase font-semibold">
                {t(`${slug}.agency-name`)}
                </span>
                <span className="text-gray-300">
                  {t(`${slug}.agency-value`)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="w-full px-4 lg:px-10 mx-auto mt-20 flex flex-col 
        gap-5"
      >
        {currentProject.images?.map((image, index) => (
          <ProjectImage key={`image:${index}`} image={image} />
        ))}
      </div>
      <section className="px-4 lg:px-10 w-full max-w-[1700px] mx-auto py-44 flex flex-col gap-10">
        <h2 className="text-xl md:text-3xl xl:text-4xl text-gray-50 text-balance py-2 md:py-5 border-t border-b border-gray-800">
          {t("heading-2")}
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-4 items-start">
          {projectsList.map((project, index) => (
            slug !== project.slug && (
              <div key={`project:${index}`} className="w-full flex flex-col gap-2">
                <a href={`/${locale}/project/${project.slug}`} className="w-full aspect-video overflow-hidden group">
                  <Image
                    src={project.images[0]}
                    alt={project.slug}
                    sizes="100%"
                    width={0}
                    height={0}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform cursor-pointer"
                  />
                </a>
                <h3 className="text-xl md:text-2xl xl:text-3xl text-gray-50">
                  {(t(`${project.slug}.title`)).split(", ")}
                </h3>
              </div>
            )
          ))}
        </div>
      </section>
      <Footer />
    </div>
   );
}
 
export default ProjectPage;