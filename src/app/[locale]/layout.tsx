import type { Metadata } from "next";
import { montserrat } from "./font";
import "./globals.css";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "404 Devinci",
  description: "Website of the 404 Devinci association.",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className} 
      >
        <Providers locale={params.locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
