import Image from "next/image";
import Arrow from "../arrow";
import H2 from "../heading2";

const members = [
  {
    "name": "Nicolas",
    "position": "President・Fullstack Developer",
    "image": "nicolas.jpg",
  },
  {
    "name": "Mattéo",
    "position": "Secretary・Fullstack Developer",
    "image": "matteo.jpg",
  },
  {
    "name": "Michel",
    "position": "Treasurer・Fullstack Developer",
    "image": "michel.png",
  },
]

const TeamSection = () => {
  return ( 
    <div className="w-full max-w-[1700px] mx-auto mt-80 px-5 lg:px-10">
      <div className="flex justify-between sm:items-end flex-col 
        sm:flex-row"
        >
        <H2>
          Our team
        </H2>
        <div className="flex items-center gap-2 max-sm:mt-4">
          <Arrow color={50} />
          <span className="uppercase text-lg ">
            Meet the team
          </span>
        </div>
      </div>
      <div className="flex items-center gap-5 sm:mt-12 flex-wrap">
        {members.map((member, index) => (
          <div 
            key={`member:${index}`} 
            className="flex flex-1 flex-col gap-2 min-w-56"
          >
            <div className="relative w-full overflow-hidden aspect-square bg-black">
              {member.image ? (
                <Image 
                  src={`/img/${member.image}`} 
                  width={0}
                  height={0}
                  sizes="100%"
                  alt={member.name}
                  className="object-cover w-full h-full" 
                />
              ) : (
                <Image 
                  src="/img/dino-gray.svg" 
                  width={200}
                  height={200}
                  alt={member.name}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-2xl uppercase text-gray-50">{member.name}</span>
              <span className="text-gray-400">{member.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default TeamSection;