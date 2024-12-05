"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Instrument } from "@/types/model";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Instruments = ({ instruments }: { instruments: Instrument[] }) => {
  const router = useRouter();

  return (
    <section className="w-full mt-[40px] md:mt-[200px] mb-10 md:mb-[200px]">
      <div className="flex flex-col items-center">
        <h3 className="text-center px-4 md:px-0">Наши медиа инструменты</h3>

        <div className="w-full rounded-[40px] overflow-hidden bg-[--grey] mt-10">
          <Accordion
            type="single"
            defaultValue={`item-${instruments[0].id}`}
            collapsible
            className="w-full"
          >
            {instruments.map((item) => (
              <AccordionItem value={`item-${item.id}`} key={item.id}>
                <AccordionTrigger>
                  <div className="flex justify-between items-center flex-1 border-b-[1px] border-[--gold] transition-colors pb-[20px] md:pb-0 gap-4">
                    <span className="text-start">{item.title}</span>
                    <Link
                      href="/"
                      className="transition-all hidden md:inline-flex inter text-[--gold] hover:text-[--gold-hover] h-[70px] items-center justify-center text-nowrap"
                      onClick={(e) => {
                        e.preventDefault();
                        router.replace("/?isOpen=true", { scroll: false });
                      }}
                    >
                      Связаться с нами
                    </Link>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="inter">
                  <p className="mb-6">{item.desc}</p>
                  
                  {item.desc_list && (
                    <ul className="flex flex-col gap-4 ml-10 instruments-list">
                      {item.desc_list.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex md:hidden justify-center mt-6">
                    <Button
                      variant="outline"
                      className="transition-all"
                      onClick={(e) => {
                        e.preventDefault();
                        router.replace("/?isOpen=true", { scroll: false });
                      }}
                    >
                      Связаться с нами
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
