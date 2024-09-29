'use client'
import Arrow from "../arrow";
import H2 from "../heading2";
import MemberCard from "../member-card";
import { useI18n, useScopedI18n } from '../../locales/client';

const members = [
  {
  'name': "Nicolas",
  "slug": "nicolas",
  "position": "President",
  "image": "nicolas.jpg",
  }, {
  "name": "Mattéo",
  "slug": "matteo",
  "position": "Secretary",
  "image": "matteo.jpg",
  }, {
  "name": "Michel",
  "slug": "michel",
  "position": "Treasurer",
  "image": "michel.png",

}
]

const TeamSection = () => {
  const t = useI18n();
  const scopedT = useScopedI18n('team');

  return (
    <div className="w-full max-w-[1700px] mx-auto mt-80 px-5 lg:px-10">
      <div className="flex justify-between sm:items-end flex-col sm:flex-row">
        <H2>
          {t('team.title')}
        </H2>
        <div className="flex items-center gap-2 max-sm:my-4">
          <Arrow color={50} />
          <span className="uppercase text-lg">
            {t('team.title.2')}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-5 sm:mt-12 flex-wrap">
        {members.map((member) => (
          <MemberCard key={member.name} member={{
            ...member,
            position: scopedT(`members.${member.slug}.position` as any),
          }} />
        ))}
      </div>
    </div>
  );
}

export default TeamSection;