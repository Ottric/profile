"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CertificateImageDialogProps {
  src: string;
  alt: string;
  by: string;
  date: string;
  children: React.ReactNode;
}

export function CertificateImageDialog({ src, alt, by, date, children }: CertificateImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl 2xl:max-w-5xl">
        <DialogHeader>
          <DialogTitle>{alt}</DialogTitle>
          <DialogDescription>
            {by} • {date}
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-4/3 w-full">
          <Image src={src} alt={alt} fill className="object-contain" sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
