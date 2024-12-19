import ParallaxRow from "@/components/parallax-row/parallax-row";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroContacts } from "./heroContacts";

export const Hero = () => {
  return (
    <section className="bg-[--grey] pt-0 pb-10 md:py-10 mt-[109px] w-full rounded-b-[40px] mb-10 md:mb-[200px]">
      <div className="mb-[72px] md:mb-[88px] h-[240px]">
        <ParallaxRow>
          <div className="flex items-center justify-center relative w-[426px] h-[240px]">
            <Image
              src="/carousel/1.png"
              alt="Topline"
              sizes="100%"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          <div className="flex items-center justify-center relative w-[426px] h-[240px]">
            <Image
              src="/carousel/2.png"
              alt="Topline"
              sizes="100%"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          <div className="flex items-center justify-center relative w-[426px] h-[240px]">
            <Image
              src="/carousel/3.png"
              alt="Topline"
              sizes="100%"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
          <div className="flex items-center justify-center relative w-[426px] h-[240px]">
            <Image
              src="/carousel/4.png"
              alt="Topline"
              sizes="100%"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </ParallaxRow>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap items-stretch md:items-end justify-between px-4 md:px-10">
        <div>
          <p className="inter">Повысьте узнаваемость вашего бренда с нами</p>
          <h1 className="mt-6">
            #Инфлюенсер <br />
            Маркетинг
          </h1>
        </div>

        <HeroContacts />
      </div>
    </section>
  );
};
