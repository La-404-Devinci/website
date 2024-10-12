"use client";

import LaunchProjectButton from "@/components/buttons/launch-project-button";
import SourceCodeButton from "@/components/buttons/source-code-button";
import ProjectH1 from "@/components/project-heading1";
import ProjectImage from "@/components/project-image";
import Footer from "@/components/sections/footer";
import { useTranslations } from "next-intl";
import { notFound, useParams } from "next/navigation";

const projectsList = [
  "pixel-war",
  "hacker-journey",
  "forum-associatif"
]

const ProjectPage = () => {

  const t = useTranslations("ProjectPage"); 
  const params = useParams<{ locale: string; slug: string[] }>();
  const slug = params.slug[0];

  
  if (!projectsList.includes(slug)) {
    notFound();
  }
  
  const services = (t(`${slug}.services`)).split(", ");
  const images = (t(`${slug}.images`)).split(", ");
  
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
          <div className="max-w-2xl flex flex-col flex-wrap gap-10">
            <ProjectH1>
              {t(`${slug}.title`)}
            </ProjectH1>
            <div className="flex items-center gap-4">
              <LaunchProjectButton>
                {t("launch-button")}
              </LaunchProjectButton>
              <SourceCodeButton href={t(`${slug}.source-link`)}>
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
      <div className="w-full px-4 lg:px-10 mx-auto mt-20 pb-96 flex flex-col 
        gap-5"
      >
        {images.map((image, index) => (
          <ProjectImage key={`image:${index}`} image={image} />
        ))}
      </div>
      <Footer />
    </div>
   );
}
 
export default ProjectPage;