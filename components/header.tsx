"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [withShadow, setShadow] = useState(false);

  const switchHeader = () => {
    const scrollY = window.scrollY;

    setShadow(scrollY > 570);
  };

  console.log(withShadow);

  useEffect(() => {
    switchHeader();

    document.addEventListener("scroll", switchHeader);

    return () => {
      document.removeEventListener("scroll", switchHeader);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10">
      <div
        className={cn(
          "max-w-[2160px] px-0 md:px-10 xl:px-20 mx-auto transition-all",
          withShadow && "max-w-[100%] px-0"
        )}
      >
        <div
          className={cn(
            "bg-[--grey] py-10 flex justify-center transition-all",
            withShadow && "rounded-b-[40px] header-shadow"
          )}
        >
          <Image src="/logo.svg" alt="Topline" width={294} height={30} />
        </div>
      </div>
    </header>
  );
};
