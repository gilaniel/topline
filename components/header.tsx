"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FadeImg } from "./image";

export const Header = () => {
  const [withShadow, setShadow] = useState(false);

  const switchHeader = () => {
    const scrollY = window.scrollY;

    setShadow(scrollY > 570);
  };

  useEffect(() => {
    switchHeader();

    document.addEventListener("scroll", switchHeader);

    return () => {
      document.removeEventListener("scroll", switchHeader);
    };
  }, []);

  return (
    <header className="fixed top-0 z-10 w-full">
      <div
        className={cn(
          "max-w-[2160px] px-0 md:px-10 xl:px-20 mx-auto transition-all",
          withShadow && "max-w-[100%] md:px-0 xl:px-0"
        )}
      >
        <div
          className={cn(
            "bg-[--grey] py-10 flex justify-center transition-all",
            withShadow && "rounded-b-[40px] header-shadow"
          )}
        >
          <Link href="/">
            <FadeImg src="/logo.svg" alt="Topline" width={294} height={30} />
          </Link>
        </div>
      </div>
    </header>
  );
};
