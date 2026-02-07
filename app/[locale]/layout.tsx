import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Geist, Sarabun } from "next/font/google";
import localFonts from "next/font/local";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { BackgroundPaths } from "@/components/ui/paths";
import { routing } from "@/i18n/routing";

import { LocaleHtml } from "./components/LocaleHtml";

const cloud = localFonts({
  src: [
    {
      path: "./font/Cloud-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/Cloud-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cloud-sans",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const sarabun = Sarabun({
  subsets: ["latin", "latin-ext", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sarabun",
});

export const metadata: Metadata = {
  title: "Profile | Patcharapon Tappakwan",
  description: "About Patcharapon Tappakwan",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value ?? "light";

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <div>
      <LocaleHtml
        locale={locale}
        fontVariable={`${cloud.variable} ${geist.variable} ${sarabun.variable}`}
        theme={theme}
      />
      <BackgroundPaths />
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
    </div>
  );
}
