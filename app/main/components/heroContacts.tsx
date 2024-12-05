"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const HeroContacts = () => {
  const router = useRouter();
  return (
    <Button
      className="mt-6 md:mt-0"
      onClick={(e) => {
        e.preventDefault();
        router.replace("/?isOpen=true", { scroll: false });
      }}
    >
      Связаться с нами
    </Button>
  );
};
