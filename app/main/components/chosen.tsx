import { FadeImg } from "@/components/image";
import { ChosenImg } from "@/types/model";

export const Chosen = ({ images }: { images: ChosenImg[] }) => {
  return (
    <section className="w-full mb-10 md:mb-[200px]">
      <div className="flex flex-col gap-10 items-center">
        <h4>Нас выбирают</h4>

        <div className="flex flex-wrap gap-[10px] justify-center">
          {images.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center relative w-[140px] h-[80px] lg:w-[180px] lg:h-[100px]"
            >
              <FadeImg
                src={item.url}
                alt=""
                fill
                sizes="100%"
                className="object-contain p-[10px]"
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
