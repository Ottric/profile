"use client";

import { setCookie } from "cookies-next";
import { Moon, SunMedium } from "lucide-react";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ToggleTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const html = document.documentElement;
    const current = html.classList.contains("dark") ? "dark" : "light";

    setTheme(current);
  });

  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.classList.contains("dark") ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";

    html.classList.remove(current);
    html.classList.add(next);

    setCookie("theme", next, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });

    setTheme(next);
  };

  return (
    <Button onClick={toggleTheme} variant="outline">
      {theme === "light" ? <SunMedium /> : <Moon />}
    </Button>
  );
}
