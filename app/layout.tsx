import { cookies } from "next/headers";

import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value ?? "light";

  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
