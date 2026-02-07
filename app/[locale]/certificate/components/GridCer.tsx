import { SquareArrowOutUpRight } from "lucide-react";

import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CertificateImageDialog } from "./CertificateImageDialog";

export async function GridCer() {
  const t = await getTranslations("Certificate");
  const cerItem = [
    {
      path: "/image/GDSC_basicLinux101.png",
      pdf: "/pdf/GDSC_basicLinux101.pdf",
      alt: "GDSC - Basic Linux 101",
      by: "Google Developer Student Clubs",
      desc: t("GDSC_Linux"),
      date: "Jan. 2024",
    },
    {
      path: "/image/GDSC_react101.png",
      pdf: "/pdf/GDSC_react101.pdf",
      alt: "GDSC - React 101",
      by: "Google Developer Student Clubs",
      desc: t("GDSC_react"),
      date: "Jan. 2024",
    },
    {
      path: "/image/GDSC_figma101.png",
      pdf: "/pdf/GDSC_figma101.pdf",
      alt: "GDSC - Figma 101",
      by: "Google Developer Student Clubs",
      desc: t("GDSC_figma"),
      date: "Feb. 2024",
    },
    {
      path: "/image/CCNA_Intro_to_Networks.png",
      pdf: "/pdf/CCNA_Intro_to_Networks.pdf",
      alt: "CCNA - Introduction to Networks",
      by: "Cisco Networking Academy",
      desc: t("CCNA_intro"),
      date: "Feb. 2024",
    },
    {
      path: "/image/CCNA_Switching_Routing_and_Wireless_Essentials.png",
      pdf: "/pdf/CCNA_Switching_Routing_and_Wireless_Essentials.pdf",
      alt: "CCNA - Switching, Routing, and Wireless Essentials",
      by: "Cisco Networking Academy",
      desc: t("CCNA_switch"),
      date: "Feb. 2024",
    },
    {
      path: "/image/Letter-NSTDA-NECTEC.png",
      pdf: "/pdf/Letter-NSTDA-NECTEC.pdf",
      alt: "Internship - NECTEC NSTDA Traffy Team",
      by: "NECTEC NSTDA",
      desc: t("NSTDA_intrenship"),
      date: "May. 2025",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 min-[54rem]:grid-cols-3 lg:grid-cols-4 min-[100rem]:grid-cols-5">
      {cerItem.map((item, index) => (
        <Card key={index} className="relative max-h-128 overflow-hidden pt-0 pb-16">
          <CertificateImageDialog src={item.path} alt={item.alt} by={item.by} date={item.date}>
            <CardHeader className="relative h-48 w-full cursor-pointer border-b p-0 transition-opacity hover:opacity-80">
              <Image src={item.path} alt={item.alt} fill className="object-cover object-top" />
            </CardHeader>
          </CertificateImageDialog>
          <div className="mx-5 flex items-center justify-between">
            <Badge className="max-w-[60%]">
              <p className="line-clamp-1 truncate">{item.by}</p>
            </Badge>
            <p className="text-muted-foreground">{item.date}</p>
          </div>
          <CardContent>
            <CardTitle>{item.alt}</CardTitle>
            <CardDescription className="mt-1.5">{item.desc}</CardDescription>
          </CardContent>
          <CardFooter className="absolute bottom-6 w-full px-6">
            <CardAction>
              <Button
                asChild
                className="bg-foreground text-background hover:bg-accent hover:text-accent-foreground rounded-[0.6rem]"
                size="sm"
              >
                <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                  <p className="font-medium">View PDF</p> <SquareArrowOutUpRight />
                </a>
              </Button>
            </CardAction>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
