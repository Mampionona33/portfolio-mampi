import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "../components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import local from "next/font/local";
config.autoAddCss = false;

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Portfolio | RAMAHAZOMANANA Tsanta Mampionona",
  description:
    "Portfolio de RAMAHAZOMANANA Tsanta Mampionona, Développeur full-stack JavaScript/PHP.",
};
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <div>
            <Navbar />
            <main className="flex-grow">
              {children}
              <Analytics />
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
