import ParallaxRow from "@/components/parallax-row/parallax-row";
import { HeroContacts } from "./heroContacts";
import { FadeImg } from "@/components/image";

export const Hero = () => {
  return (
    <section className="bg-[--grey] pt-0 pb-10 md:py-10 mt-[109px] w-full rounded-b-[40px] mb-10 md:mb-[200px]">
      <div className="mb-[72px] md:mb-[88px] h-[240px]">
        <ParallaxRow>
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              className="flex items-center justify-center relative w-[426px] h-[240px] rounded-[22px] overflow-hidden"
              key={i}
            >
              <FadeImg
                src={`/carousel/${i + 1}.jpg`}
                alt="Topline"
                sizes="100%"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          ))}
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
