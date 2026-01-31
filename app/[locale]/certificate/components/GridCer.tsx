import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
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
  const cerItem = [
    {
      path: "/image/GDSC_basicLinux101.png",
      alt: "GDSC - Basic Linux 101",
      by: "Google Developer Student Clubs",
      desc: "A beginner's guide to using Shell scripting and basic Linux commands.",
      date: "Jan. 2024",
    },
    {
      path: "/image/GDSC_react101.png",
      alt: "GDSC - React 101",
      by: "Google Developer Student Clubs",
      desc: "A beginner's guide to React, covering the fundamentals of building user interfaces.",
      date: "Jan. 2024",
    },
    {
      path: "/image/GDSC_figma101.png",
      alt: "GDSC - Figma 101",
      by: "Google Developer Student Clubs",
      desc: "A beginner's guide to Figma, covering the basics of UI/UX design.",
      date: "Feb. 2024",
    },
    {
      path: "/image/CCNA_Intro_to_Networks.png",
      alt: "CCNA - Introduction to Networks",
      by: "Cisco Networking Academy",
      desc: "An introduction to networking concepts, protocols, and technologies.",
      date: "Feb. 2024",
    },
    {
      path: "/image/CCNA_Switching_Routing_and_Wireless_Essentials.png",
      alt: "CCNA - Switching, Routing, and Wireless Essentials",
      by: "Cisco Networking Academy",
      desc: "A comprehensive course on switching, routing, and wireless networking essentials.",
      date: "Feb. 2024",
    },
    {
      path: "/image/Letter-NSTDA-NECTEC.png",
      alt: "Internship - NECTEC NSTDA Traffy Team",
      by: "NECTEC NSTDA",
      desc: "A letter of recommendation for my internship at NECTEC NSTDA Traffy Team.",
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
          <div className="mx-3 flex items-center justify-between">
            <Badge className="line-clamp-1 max-w-[60%] truncate">{item.by}</Badge>
            <p className="text-muted-foreground">{item.date}</p>
          </div>
          <CardContent>
            <CardTitle>{item.alt}</CardTitle>
            <CardDescription className="mt-1.5">{item.desc}</CardDescription>
          </CardContent>
          <CardFooter className="absolute bottom-6 w-full px-6">
            <CardAction>View Certificate</CardAction>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
