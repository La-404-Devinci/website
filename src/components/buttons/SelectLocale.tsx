'use client';
import { useLocale } from 'next-intl';
import { useTransition, useState } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocaleSwitcherSelect() {
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
    <Select value={locale} onValueChange={onValueChange} disabled={isPending}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select language" className='text-gray-500' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className='uppercase text-gray-500'>Language</SelectLabel>
          <SelectItem value="en" className=' text-gray-500'>English</SelectItem>
          <SelectItem value="fr" className=' text-gray-500'>Français</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
