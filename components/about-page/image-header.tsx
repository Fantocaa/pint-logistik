import React from "react";
import Image from "next/image";

export default function ImageHeader() {
  return (
    <div>
      <Image
        src="/images/Frame 222.png"
        alt="header"
        width={2560}
        height={2560}
        className="w-full mx-auto xl:object-top xl:h-96 2xl:h-full object-cover"
      />
    </div>
  );
}
