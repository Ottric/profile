"use client";

import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2 rounded-sm border border-solid border-black/8 bg-white p-1.5 dark:border-white/[.145] dark:bg-black">
      {routing.locales.map((loc) => (
        <Button
          key={loc}
          onClick={() => switchLocale(loc)}
          variant={null}
          className={cn(
            `rounded-[calc(var(--radius)-10px)] px-1.5 py-0.5 text-xs font-medium underline-offset-4 transition-colors`,
            locale === loc ? "underline" : "text-foreground/35 hover:text-accent-foreground hover:bg-accent"
          )}
        >
          {loc.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
