import React from "react";
import Image from "next/image";

export default function ImageTextHeader() {
  return (
    <div>
      <Image
        // src="/images/Frame 221.png"
        src="/images/image 16.png"
        alt="header"
        width={2000}
        height={2000}
        className="w-full mx-auto h-96 2xl:h-[640px] object-cover"
      />
    </div>
  );
}
