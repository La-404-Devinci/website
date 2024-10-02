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
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Language</SelectLabel>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">Français</SelectItem>

        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
