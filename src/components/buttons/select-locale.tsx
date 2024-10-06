'use client';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { useState, useTransition } from 'react';

interface LocaleSwitcherSelectProps {
  footer?: boolean;
}

export default function LocaleSwitcherSelect({ footer = false }: LocaleSwitcherSelectProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const initialLocale = useLocale() as 'en' | 'fr'; 
  const [locale, setLocale] = useState<'en' | 'fr'>(initialLocale);

  function onValueChange(nextLocale: 'en' | 'fr') {
    setLocale(nextLocale);

    startTransition(() => {
      router.replace(
        pathname,
        { locale: nextLocale } 
      );
    });
  }  

  return (
    <div className='text-end'>
      {locale === "fr" ? (
        <button 
          disabled={isPending} 
          onClick={() => onValueChange('en')} 
          className={cn(
            footer ? 'text-gray-900' : 'text-gray-300'
          )}
        >
          EN
        </button>
      ) : (
        <button 
          disabled={isPending} 
          onClick={() => onValueChange('fr')} 
          className={cn(
            footer ? 'text-gray-900' : 'text-gray-300'
          )}
        >
          FR
        </button>
      )}
    </div>
  );
}
