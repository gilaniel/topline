"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Influencer } from "@/types/model";
import { InfluencerItem } from "./influencerItem";

export const Influencers = ({ influencers }: { influencers: Influencer[] }) => {
  return (
    <section className="w-full mb-10 md:mb-[200px] pl-4 md:pl-10 xl:pl-20">
      <div className="flex flex-col items-center">
        <h3 className="text-center px-4 md:px-0 mb-10">Наши Инфлюенсеры</h3>

        <Swiper
          modules={[Pagination]}
          loop
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          slidesPerView="auto"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="inf-swiper"
        >
          {influencers.concat(influencers).map((item) => (
            <SwiperSlide key={item.id + Math.random()}>
              <InfluencerItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
