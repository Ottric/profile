import { FooterNav } from "./components/FooterNav";
import { HeaderNav } from "./components/HeaderNav";
import { Resume } from "./components/Resume";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
        <main className="z-20 my-6 flex min-h-screen w-full flex-col items-center bg-white px-4 py-3 shadow-md sm:items-start md:max-w-2xl md:px-18 md:py-12 lg:max-w-3xl dark:bg-zinc-800">
          <Resume />
        </main>
      </div>
      <FooterNav />
    </>
  );
}
