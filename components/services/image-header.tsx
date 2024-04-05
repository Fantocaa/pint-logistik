import Image from "next/image";
import React from "react";

export default function ImageHeader() {
  return (
    <div>
      <div>
        <Image
          src="/images/ship.jpg"
          alt="header"
          width={2560}
          height={2560}
          className="w-full mx-auto xl:object-top xl:h-96 2xl:h-full object-cover"
        />
      </div>
    </div>
  );
}
