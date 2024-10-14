import Arrow from '@/components/arrow'
import H2 from '@/components/heading2'
import cn from '@/utils/function'
import { useTranslations } from 'next-intl'
import { gasoekOne } from './font'
 
export default function NotFound() {

  const t = useTranslations('NotFoundPage');

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-4 text-gray-50 z-20 relative overflow-hidden text-center px-5'>
      <H2 className='flex flex-col gap-2'>
        {t('title')}
      </H2>
      {/* Message : Tu t'es trompé de désert, le dinosaure n'est pas ici. */}
      <p>{t('description')}</p>
      <div className='border border-gray-700 px-4 py-2'>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 group"
        >
          {t('back-home')}
          <div className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition">
            <Arrow rotate color={50} />
          </div>
        </a>
      </div>

      <span className={cn(
        gasoekOne.className,
        `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-900/70 text-[50vw] -z-10 leading-none pointer-events-none
         flex flex-col md:flex-row items-center justify-center`
      )}>
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </span>
    </div>
  )
}