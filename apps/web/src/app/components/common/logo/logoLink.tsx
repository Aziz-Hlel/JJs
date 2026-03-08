import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoLinkProps {
  src: string;
  alt: string;
  href: string;
  scrollY?: number | null;
  width?: number;
  height?: number;
}

const LogoLink: React.FC<LogoLinkProps> = ({ href, src, alt, scrollY }) => {
  const biggerLogo =
    scrollY !== undefined && (scrollY === null || scrollY < 20);
  return (
    <Link className=" mx-auto w-fit" href={href}>
      <Image
        src={src}
        priority
        alt={alt}
        width={80}
        height={600}
        className={cn(
          "mx-auto transition-all duration-700 ease-in-out",
          biggerLogo ? "size-20" : "size-10 md:size-20",
        )}
      />
    </Link>
  );
};

export default LogoLink;
