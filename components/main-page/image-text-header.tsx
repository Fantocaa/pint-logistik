import React from "react";
import Image from "next/image";

export default function ImageTextHeader() {
  return (
    <div>
      <Image
        src="/images/Frame 221.png"
        alt="header"
        width={2560}
        height={2560}
        className="w-full mx-auto xl:object-top h-96 2xl:h-full object-cover"
      />
    </div>
  );
}
