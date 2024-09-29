'use client'

import H2 from "../heading2";
import { useI18n, useScopedI18n } from '../../locales/client'


const AboutSection =  async () => {
  const t = useI18n()
  const scopedT = useScopedI18n('hello')  
  return (
    <div className="w-full mt-80 px-5 lg:px-10 flex items-center justify-center relative">
      <div className="flex flex-col gap-12 z-10">
        <H2>
          {t('about.who-we-are.title')}
        </H2>
        <div className="max-w-2xl w-full lg:text-xl font-medium leading-6 lg:leading-8">
          <p>

            {t('about.who-we-are.description')}
          </p>
          <p className="mt-6">
            {t('about.who-we-are.description2')}
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
