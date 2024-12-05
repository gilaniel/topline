import Image from "next/image";

type Items = {
  image: string;
};

export const ParallaxItems = ({ items }: { items: Items[] }) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={Math.random()}
          className="flex items-center justify-center relative w-[140px] h-[80px] lg:w-[220px] lg:h-[120px]"
        >
          <Image
            src={item.image}
            alt="Topline"
            className="object-contain p-[10px]"
            fill
            sizes="100%"
            quality={100}
          />
        </div>
      ))}
    </>
  );
};
