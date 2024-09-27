import H2 from "../heading2";

const AboutSection = () => {
  return (
    <div className="w-full mt-80 px-5 lg:px-10 flex items-center justify-center relative">
      <div className="flex flex-col gap-12 z-10">
        <H2>
          Who we are
        </H2>
        <div className="max-w-2xl w-full lg:text-xl font-medium leading-6 lg:leading-8">
          <p>
            404 Devinci is an association focused on web development and UI/UX
            design. We&apos;re also interested in emerging technologies such as AI
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
