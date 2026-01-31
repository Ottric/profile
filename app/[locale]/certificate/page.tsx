import { getTranslations } from "next-intl/server";

import { FooterNav } from "../components/FooterNav";
import { HeaderNav } from "../components/HeaderNav";
import { GridCer } from "./components/GridCer";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <>
      <HeaderNav />
      <div className="flex justify-center bg-zinc-100 font-sans dark:bg-black">
        <main className="z-20 m-12 min-h-screen">
          <GridCer />
        </main>
      </div>
      <FooterNav />
    </>
  );
}
