import type { Metadata } from "next";
import { montserrat } from "./font";
import "./globals.css";


export const metadata: Metadata = {
  title: "404 Devinci",
  description: "Website of the 404 Devinci association.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className} 
      >
        {children}
      </body>
    </html>
  );
}
