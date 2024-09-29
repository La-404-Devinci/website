'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { useCurrentLocale, useChangeLocale } from '@/locales/client'


export default function LocalSelect() {
  const locale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  return (
    <Select onValueChange={(value) => {
      changeLocale(value as "en" | "fr")
    }}>
    <SelectTrigger className="w-[180px]" >
      <SelectValue placeholder={locale === 'en' ? '🇬🇧 English' : '🇫🇷 Français'} />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="en">
        🇬🇧
        English
      </SelectItem>
      <SelectItem value="fr">
        🇫🇷
        Français
      </SelectItem>
    </SelectContent>
  </Select>
  )
}