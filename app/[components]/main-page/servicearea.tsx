import React from "react";
import Image from "next/image";

export default function ServicesArea() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-24 lg:pb-32">
      <Image
        src="/images/Provinces.svg"
        alt="map"
        width={2560}
        height={2560}
        className="mx-auto w-full h-full"
      />
    </div>
  );
}
