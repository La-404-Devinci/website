import { gasoekOne } from "@/app/font";
import cn from "@/utils/function";

const projects = [
  {
    "name": "Pixel War",
    "date": "2023-2024",
  },
  {
    "name": "Hacker's Journey",
    "date": "2023-2024",
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
          <div 
            key={`project:${index}`}
            className={cn(
              "h-40 flex items-center justify-between p-8",
              index === 0 
                ? "border-t border-b border-gray-800" 
                : "border-b border-gray-800"
            )}
          >
            <h3 className="text-6xl text-gray-50 font-medium">{project.name}</h3>
            <p className="text-gray-400">{project.date}</p>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default ProjectsSection;