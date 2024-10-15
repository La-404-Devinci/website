import placeholder from "@/assets/dino-gray.svg";
import { MemberType } from "@/utils/types";
import Image from "next/image";

interface MemberCardProps {
  member: MemberType;
}

const MemberCard = ({ member }: MemberCardProps) => {
  return ( 
    <div 
      className="flex flex-1 flex-col gap-2 min-w-40"
    >
      <div className="relative w-full overflow-hidden aspect-square bg-black">
        {member.image ? (
          <Image 
            src={member.image} 
            width={0}
            height={0}
            sizes="100%"
            alt={member.name}
            className="object-cover w-full h-full" 
          />
        ) : (
          <Image 
            src={placeholder} 
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
   );
}
 
export default MemberCard;