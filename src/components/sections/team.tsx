import Arrow from "../arrow";
import H2 from "../heading2";
import MemberCard from "../member-card";
import {useTranslations} from 'next-intl';

const members = [
  {
    "name": "Nicolas",
    "position": "President・Fullstack Developer",
    "slug": "president",
    "image": "nicolas.jpg",
  },
  {
    "name": "Mattéo",
    "position": "Secretary・Fullstack Developer",
    "image": "matteo.jpg",
    "slug": "secretary",
  },
  {
    "name": "Michel",
    "position": "Treasurer・Fullstack Developer",
    "image": "michel.png",
    "slug": "treasurer",
  },
]



const TeamSection = () => {

  const t = useTranslations('TeamSection');
  return ( 
    <div className="w-full max-w-[1700px] mx-auto mt-80 px-5 lg:px-10">
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