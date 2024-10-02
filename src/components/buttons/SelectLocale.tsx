'use client';
import { useLocale } from 'next-intl';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { ReactNode, useTransition, useState } from 'react';
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
  const params = useParams();
  const initialLocale = useLocale();
  const [locale, setLocale] = useState<string>(initialLocale);

  function onValueChange(nextLocale: string) {
    setLocale(nextLocale);
    console.log(nextLocale);
    startTransition(() => {
      router.replace(
        pathname, // Changer ici pour passer un string
        { query: params, locale: nextLocale as string } // Regrouper les options
      );
    });
  }

  return (
    <Select value={locale} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Language</SelectLabel>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="fr">Français</SelectItem>
          {/* Ajoutez d'autres options de langue ici */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
