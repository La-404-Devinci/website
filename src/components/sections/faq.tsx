'use client'

import { montserrat } from "@/app/[locale]/font";
import cn from "@/utils/function";
import H2 from "../heading2";

import { useI18n, useScopedI18n } from '../../locales/client';



const FaqSection = () => {

  const t = useI18n();
  const scopedT = useScopedI18n('faq');

  return (
    <div className="w-full max-w-[1700px] mx-auto my-80 px-5 lg:px-10 flex flex-col 
      lg:flex-row lg: justify-between gap-y-12 gap-x-10 "
    >
      <H2 className="flex flex-col flex-shrink-0">
        <span className={cn(montserrat.className)}>{t('faq.title')}</span>
        <span>{t('faq.title.2')}</span>
      </H2>
      <div className="flex flex-col w-full max-w-3xl">
        {[0, 1, 2, 3].map((index) => (
          <div 
            key={`faq:${index}`} 
            className={cn(
              "flex flex-col gap-2 py-8 px-2",
              index === 0 ? "border-t border-b border-gray-800" : "border-b border-gray-800"
            )}
          >
            <h3 className="text-lg font-semibold text-gray-50">{scopedT(`question${index as 0 | 1 | 2 | 3}`)}</h3>
            <p className="text-gray-300">{scopedT(`answer${index as 0 | 1 | 2 | 3}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
