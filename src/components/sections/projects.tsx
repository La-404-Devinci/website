import { gasoekOne } from "@/app/font";
import Project from "../project";

const projects = [
  {
    "name": "Pixel War",
    "date": "2023-2024",
    "image": "pixelwar.png",
  },
  {
    "name": "Hacker's Journey",
    "date": "2023-2024",
    "image": "hackerjourney.png",
  },
  {
    "name": "Forum Associatif",
    "date": "2023-2024",
    "image": "forumassociatif.png",
  },
]

const ProjectsSection = () => {
  return ( 
    <div className="w-full max-w-[1700px] mx-auto mt-40 px-5 lg:px-10 flex flex-col items-center gap-12">
      <h2 className={`${gasoekOne.className} uppercase text-7xl text-gray-50`}>
        What we made
      </h2>
      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <Project key={`project:${index}`}  project={project} index={index} />
        ))}
      </div>
    </div>
   );
}
 
export default ProjectsSection;