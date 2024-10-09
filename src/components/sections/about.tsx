import { useTranslations } from 'next-intl';
import H2 from "../heading2";

const AboutSection = () => {
  const t = useTranslations('AboutSection');
  return (
    <div className="w-full mt-80 px-4 lg:px-10 flex items-center justify-center relative">
      <div className="flex flex-col gap-12 z-10">
        <H2>
          {t('title')}
        </H2>
        <div className="max-w-2xl w-full lg:text-xl font-medium leading-6 lg:leading-8">
          <p>
            {t('description')}
          </p>
          <p className="mt-6">
            {t('description-2')}
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
