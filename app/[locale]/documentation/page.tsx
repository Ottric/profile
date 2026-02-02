import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { FooterNav } from "../components/FooterNav";
import { HeaderNav } from "../components/HeaderNav";

export default function DocumentationPage() {
  const docsItem = [
    {
      title: "GDSC Linux Certificate",
      actions: "/pdf/GDSC_basicLinux101.pdf",
    },
    {
      title: "GDSC React Certificate",
      actions: "/pdf/GDSC_react101.pdf",
    },
    {
      title: "GDSC Figma Certificate",
      actions: "/pdf/GDSC_figma101.pdf",
    },
    {
      title: "CCNA Introduction to Networks Certificate",
      actions: "/pdf/CCNA_Intro_to_Networks.pdf",
    },
    {
      title: "CCNA Switching, Routing, and Wireless Essentials Certificate",
      actions: "/pdf/CCNA_Switching_Routing_and_Wireless_Essentials.pdf",
    },
    {
      title: "NSTDA Internship Letter",
      actions: "/pdf/Letter-NSTDA-NECTEC.pdf",
    },
    {
      title: "CCNA Introduction to Networks Letter",
      actions: "/pdf/Letter_CCNA_Intro.pdf",
    },
    {
      title: "CCNA Switching, Routing, and Wireless Essentials Letter",
      actions: "/pdf/Letter_CCNA_Switching.pdf",
    },
  ];

  return (
    <>
      <HeaderNav />
      <div className="flex justify-center bg-zinc-100 font-sans dark:bg-black">
        <main className="z-20 m-12 min-h-screen w-full max-w-5xl">
          <h1 className="mb-8 text-center text-3xl font-bold">Documentation</h1>
          <Table className="bg-background border-separate overflow-hidden rounded-lg border-2">
            <TableHeader>
              <TableRow>
                <TableHead className="border-b-2 text-center">
                  <b>Title</b>
                </TableHead>
                <TableHead className="border-b-2 text-center">
                  <b>Actions</b>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {docsItem.map((item, index) => (
                <TableRow key={index} className="decoration-1 underline-offset-2 hover:underline">
                  <TableCell className="pl-6">{item.title}</TableCell>
                  <TableCell className="text-center">
                    <Button asChild variant="link">
                      <a href={item.actions} target="_blank" rel="noopener noreferrer">
                        <b>View PDF</b>
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </div>
      <FooterNav />
    </>
  );
}
