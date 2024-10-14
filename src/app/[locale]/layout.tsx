import { ReactNode } from "react";
import { montserrat } from "./font";
import "./globals.css";

import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { Providers } from "./providers";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("404-devinci"),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
