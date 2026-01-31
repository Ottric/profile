import { ChessQueen, Workflow } from "lucide-react";

import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { FooterNav } from "../components/FooterNav";
import { HeaderNav } from "../components/HeaderNav";

export default async function AboutPage() {
  const t = await getTranslations("About");

  return (
    <>
      <HeaderNav />
      <main className="relative z-20 m-16 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="m-8 mt-0">
          <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white">About</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">Hi, I'm Patcharapon Tappakwan</p>
        </div>

        <Card className="w-full max-w-[clamp(20rem,80vw,52rem)]">
          <CardContent className="flex flex-col">
            <section className="grid min-h-56 grid-cols-2 gap-6 border-b pb-4 text-justify wrap-break-word hyphens-auto [text-justify:inter-character]">
              <div className="relative w-full overflow-hidden rounded-md">
                <Image
                  src="/image/profile-img.png"
                  alt="Profile Image"
                  fill
                  className="object-cover object-[50%_15%]"
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Who I Am</h2>
                <p className="indent-8">{t("sec_1")}</p>
              </div>
            </section>
            <section className="mt-4 border-b px-4 pb-4 text-justify wrap-break-word hyphens-auto [text-justify:inter-character]">
              <h2 className="mb-4 flex gap-2 text-2xl font-bold">
                <ChessQueen /> What I Do
              </h2>
              <p className="indent-8">{t("sec_2")}</p>
            </section>
            <section className="mt-4 px-4 text-justify wrap-break-word hyphens-auto [text-justify:inter-character]">
              <h2 className="mb-4 flex gap-2 text-2xl font-bold">
                <Workflow /> Values & Working Style
              </h2>
              <ul className="list-disc space-y-2 pb-2 pl-12">
                {t("sec_3-1")
                  .split("\n")
                  .map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
              <p>{t("sec_3-2")}</p>
            </section>
          </CardContent>
        </Card>
      </main>
      <FooterNav />
    </>
  );
}
