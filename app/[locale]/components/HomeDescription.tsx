"use client";

import { useTranslations } from "next-intl";

export function HomeDescription() {
  const t = useTranslations("HomePage");
  const templatesText = t("templates");
  const learningText = t("learning");

  // Get the description with placeholder values (we'll replace them in JSX)
  const description = t("description", {
    templates: "{templates}",
    learning: "{learning}",
  });

  // Split the description and replace placeholders with links
  const parts = description.split(/(\{templates\}|\{learning\})/);

  return (
    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
      {parts.map((part, index) => {
        if (part === "{templates}") {
          return (
            <a
              key={`templates-${index}`}
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              {templatesText}
            </a>
          );
        }
        if (part === "{learning}") {
          return (
            <a
              key={`learning-${index}`}
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              {learningText}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}
