import Matteo from "@/assets/teams/matteo.jpg";
import Michel from "@/assets/teams/michel.png";
import Nicolas from "@/assets/teams/nicolas.jpg";
import { useTranslations } from 'next-intl';
import Arrow from "../arrow";
import H2 from "../heading2";
import MemberCard from "../member-card";

const members = [
  {
    "name": "Nicolas",
    "position": "President・Fullstack Developer",
    "slug": "president",
    "image": Nicolas,
  },
  {
    "name": "Mattéo",
    "position": "Secretary・Fullstack Developer",
    "slug": "secretary",
    "image": Matteo,
  },
  {
    "name": "Michel",
    "position": "Treasurer・Fullstack Developer",
    "slug": "treasurer",
    "image": Michel,
  },
]



const TeamSection = () => {

  const t = useTranslations('TeamSection');
  return ( 
    <div className="w-full max-w-[1700px] mx-auto mt-80 px-4 lg:px-10">
      <div className="flex justify-between sm:items-end flex-col 
        sm:flex-row"
        >
        <H2>
          {t('title')}
        </H2>
        <div className="flex items-center gap-2 max-sm:my-4">
          <Arrow color={50} />
          <span className="uppercase text-lg ">
            {t('meet-the-team')}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-5 sm:mt-12 flex-wrap">
        {members.map((member, index) => (
          <MemberCard key={index} member={{
            ...member, 
            position: t(`${member.slug}`) as string }} />
        ))}
      </div>
    </div>
   );
}
 
export default TeamSection;