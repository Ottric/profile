"use client";

import { useEffect } from "react";

export function LocaleHtml({
  locale,
  fontVariable,
  theme,
}: {
  locale: string;
  fontVariable: string;
  theme: string | undefined;
}) {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.className = `${fontVariable} antialiased ${theme}`;
    }
  }, [locale, fontVariable, theme]);

  return null;
}
