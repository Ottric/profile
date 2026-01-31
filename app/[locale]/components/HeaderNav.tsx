"use client";

import { Menu } from "lucide-react";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { OttricLogo } from "./OttricLogo";
import { ToggleTheme } from "./ToggleTheme";

export function HeaderNav() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t("Home"), key: "home" },
    { href: "/certificate", label: t("Certificate"), key: "certificate" },
    { href: "/documentation", label: t("Documentation"), key: "documentation" },
    { href: "/seakeen", label: "SEAKEEN", key: "seakeen" },
    { href: "/about", label: t("About"), key: "about" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="bg-background sticky top-0 w-full border-b px-4 md:px-6">
        <div className="container mx-auto flex h-18 max-w-screen-2xl items-center justify-between gap-4">
          <div className="flex items-center gap-2 lg:gap-4">
            {useIsMobile() && (
              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Menu className="h-4 w-4" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="p-0">
                  <DrawerHeader className="border-b px-6 py-4">
                    <DrawerTitle>
                      <OttricLogo className="text-5xl" />
                    </DrawerTitle>
                  </DrawerHeader>
                  <nav className="flex flex-col p-4">
                    <ul className="flex flex-col gap-2">
                      {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <li key={item.key}>
                            <DrawerClose asChild>
                              <Link
                                href={item.href}
                                className={cn(
                                  "hover:bg-accent hover:text-accent-foreground flex items-center rounded-md px-4 py-3 text-base font-bold transition-colors",
                                  isActive ? "bg-accent/50 text-primary" : "text-foreground"
                                )}
                              >
                                {item.label}
                              </Link>
                            </DrawerClose>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </DrawerContent>
              </Drawer>
            )}
            <OttricLogo className="text-[clamp(1rem,10vw,3rem)]" />
            {!useIsMobile() && (
              <nav
                aria-label="Main"
                data-orientation="horizontal"
                dir="ltr"
                className="group/navigation-menu relative flex max-w-max flex-1 items-center justify-center"
                data-slot="navigation-menu"
                data-viewport="true"
              >
                <div className="relative">
                  <ul
                    data-orientation="horizontal"
                    className="group flex flex-1 list-none items-center justify-center gap-1"
                    data-slot="navigation-menu-list"
                    dir="ltr"
                  >
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <li key={item.key} className="relative" data-slot="navigation-menu-item">
                          <Link
                            href={item.href}
                            data-active={isActive}
                            className={cn(
                              'focus-visible:ring-ring/50 [&_svg:not([class*="text-"])]:text-muted-foreground group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground before:bg-primary relative inline-flex h-10 w-max cursor-pointer flex-col items-center justify-center gap-1 rounded-t-[calc(var(--radius)-10px)] p-2 px-4 py-2 text-sm font-bold transition-colors outline-none before:absolute before:right-0 before:bottom-0 before:left-0 before:h-0.5 before:transition-transform before:duration-300 hover:before:scale-x-100 focus:outline-none focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*="size-"])]:size-4',
                              isActive ? "data-active:bg-accent/50 text-primary before:scale-x-100" : "before:scale-x-0"
                            )}
                            data-slot="navigation-menu-link"
                            data-radix-collection-item=""
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="absolute top-full left-0 isolate z-50 flex justify-center"></div>
              </nav>
            )}
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <LanguageSwitcher />
            <ToggleTheme />
          </div>
        </div>
      </header>
    </div>
  );
}
