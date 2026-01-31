import { OttricLogo } from "./OttricLogo";

export function FooterNav() {
  const year = new Date().getFullYear();

  return (
    <div className="relative z-50 w-full">
      <footer className="bg-background w-full border-t px-2 sm:px-4 md:px-6">
        <div className="container mx-auto flex max-w-screen-2xl flex-col gap-2 py-4">
          <OttricLogo className="text-5xl" />
          <p className="whitespace-nowrap">
            &copy; {year} <b>&bull;</b> <OttricLogo /> <b>&bull;</b> Patcharapon Tappakwan
          </p>
        </div>
      </footer>
    </div>
  );
}
