import { gasoekOne } from "@/app/font";
import cn from "@/utils/function";

const AboutSection = () => {
  return (
    <div className="w-full mt-80 px-5 lg:px-10 flex items-center justify-center relative">
      <div className="flex flex-col gap-12 z-10">
        <h2
          className={cn(gasoekOne.className, "uppercase text-7xl text-gray-50")}
        >
          Who we are
        </h2>
        <div className="max-w-2xl w-full text-xl font-medium leading-8">
          <p>
            404 Devinci is an association focused on web development and UI/UX
            design. We're also interested in emerging technologies such as AI
            and IoT. Our aim is to bring together students who are passionate
            about the digital world and create innovative projects together.
          </p>
          <p className="mt-6">
            We work on the creation of web sites and applications, both in-house
            and in collaboration with our partners. We are also involved in
            communication activities and organize various events related to our
            field.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 rounded-full w-80 aspect-square bg-blue-500
        -translate-x-1/2 blur-[100px] "
      />
    </div>
  );
};

export default AboutSection;
