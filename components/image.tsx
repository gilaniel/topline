"use client";

import { useState } from "react";

import Image, { ImageProps } from "next/image";

interface FadeImgProps extends ImageProps {
  className?: string;
}

export const FadeImg = ({ className, ...rest }: FadeImgProps) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <Image
      className={`${className} ${loaded ? "opacity-[1]" : "opacity-0"}`}
      onLoad={onLoad}
      style={{ transition: "all .3s ease" }}
      {...rest}
    />
  );
};
