"use client";

import { FadeImg } from "@/components/image";
import { Influencer } from "@/types/model";
import { useState } from "react";

export const InfluencerItem = ({ item }: { item: Influencer }) => {
  const [selectedSocial, setSocial] = useState(item.socials[0]);

  return (
    <div className="bg-[--grey] w-[343px] md:w-[468px] rounded-[40px] p-5 md:p-10 flex flex-col gap-5 overflow-hidden h-full">
      <FadeImg
        src={`/influencers/${item.id}.jpg`}
        alt={item.title}
        width={388}
        height={218}
        quality={100}
        className="w-[388px] h-[218px] md:w-[388px] md:h-[218px] rounded-[23px]"
      />

      <p className="text-[20px] leading-[140%] md:text-[28px] md:leading-[121%] uppercase mt-5 md:mt-0">
        {item.title}
      </p>

      <div className="flex flex-col justify-between h-full gap-5">
        <div className="flex flex-col inf-text gap-5">
          {item.author && (
            <div className="flex flex-col">
              <span className="text-[--text-color-secondary]">Автор</span>
              <span>{item.author}</span>
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-[--text-color-secondary]">Жанр</span>
            <span>{item.genre}</span>
          </div>
          <div className="flex flex-col">
            <span>{item.desc}</span>
          </div>
        </div>

        <div className="bg-[#10101080] rounded-[20px] flex flex-col overflow-hidden">
          <div className="flex">
            {item.socials.map((social, _, array) => (
              <div
                className={`flex items-center justify-center py-3 bg-[--black] cursor-pointer transition-colors ${
                  selectedSocial.name === social.name && "selected-social"
                }`}
                key={social.name}
                style={{ flexBasis: 100 / array.length + "%" }}
                onClick={() => setSocial(social)}
              >
                <FadeImg
                  src={`/${social.name}.svg`}
                  alt={social.name}
                  width={40}
                  height={40}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-6 justify-center px-3 py-5">
            <div className="flex flex-col basis-1/2 items-center">
              <span
                className="text-[12px] md:text-[14px] capitalize font-[400] text-[--text-color-secondary]"
                style={{ fontFamily: "Inter" }}
              >
                Подписчики
              </span>
              <span className="text-[18px] md:text-[24px]">
                {selectedSocial.subs}
              </span>
            </div>
            <div className="flex flex-col basis-1/2 items-center">
              <span
                className="text-[12px] md:text-[14px] capitalize font-[400] text-[--text-color-secondary]"
                style={{ fontFamily: "Inter" }}
              >
                Просмотры
              </span>
              <span className="text-[18px] md:text-[24px]">
                {selectedSocial.views}
              </span>
            </div>
            {/* COMMENTS */}
            {/* <div className="flex flex-col">
              <span
                className="text-[12px] md:text-[14px] capitalize font-[400] text-[--text-color-secondary]"
                style={{ fontFamily: "Inter" }}
              >
                Комментарии
              </span>
              <span className="text-[18px] md:text-[24px]">
                {selectedSocial.comments}
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
