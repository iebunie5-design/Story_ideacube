"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & {
  fallbackClassName?: string;
};

export function ImageWithFallback({ alt, className, fallbackClassName = "", ...props }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full min-h-[220px] w-full items-center justify-center bg-white text-sm text-text-sub ${fallbackClassName}`}
        role="img"
        aria-label={alt}
      >
        이미지를 준비 중입니다
      </div>
    );
  }

  return <Image alt={alt} className={className} onError={() => setFailed(true)} {...props} />;
}
