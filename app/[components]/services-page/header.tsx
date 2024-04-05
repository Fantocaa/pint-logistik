import React from "react";
import ImageTextHeader from "@/components/main-page/image-text-header";
import { Button } from "@/components/ui/button";
import MarqueeText from "@/components/main-page/marquee-header";
import Image from "next/image";
import Link from "next/link";
import ImageHeader from "@/components/services/image-header";

export default function Header() {
  return (
    <>
      {/* <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"> */}

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {/* <div className="relative h-full w-full bg-white"> */}
      {/* <div className=" absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div> */}
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 pt-32 pb-16 sm:px-6 lg:flex lg:items-center lg:px-8 justify-between">
        <div className="text-left ltr:sm:text-left rtl:sm:text-right max-w-md">
          <h3>PT. PINT INDONESIA LOGISTIK</h3>
          <Image
            src="/images/smoothinnercorner red.svg"
            alt="red"
            width={64}
            height={64}
            className="absolute inset-x-[388px] w-12 h-12"
          />
          <Image
            src="/images/smoothinnercorner red.svg"
            alt="red"
            width={64}
            height={64}
            className="absolute inset-x-[332px] w-12 h-12"
          />
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="text-bluepint-500 leading-tight">Handle</span> your{" "}
            <span className="text-redpint-500">Logistic</span> with{" "}
            <span className="text-bluepint-500">Care</span>
          </h1>
        </div>
        <div className="max-w-sm">
          <h1>
            We will deliver your package quickly, safely than any other shipping
            agency
          </h1>
          {/* <div className="flex gap-4 pt-4">
            <Button className="rounded-full">Get Started</Button>
            <Link href="/about">
              <Button className="rounded-full">About Us</Button>
            </Link>
          </div> */}
        </div>
      </div>
      {/* </div> */}
      {/* <ImageTextHeader /> */}
      <ImageHeader />
      <MarqueeText />
      {/* </section> */}
    </>
  );
}
