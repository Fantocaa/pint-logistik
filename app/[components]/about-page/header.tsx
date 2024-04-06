import React from "react";
import { Button } from "@/components/ui/button";
import MarqueeText from "@/components/main-page/marquee-header";
import Image from "next/image";
import Link from "next/link";
import ImageHeader from "@/components/about-page/image-header";

export default function Header() {
  return (
    <>
      {/* <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"> */}

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {/* <div className="relative h-full w-full bg-white"> */}
      {/* <div className=" absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div> */}
      {/* <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div> */}
      <div className="relative mx-auto max-w-screen-xl px-4 pt-32 pb-16 sm:px-6 lg:flex lg:items-center lg:px-8 justify-between">
        <div className="text-left ltr:sm:text-left rtl:sm:text-right max-w-xl">
          <h3>About Us</h3>
          {/* <Image
            src="/images/smoothinnercorner red.svg"
            alt="red"
            width={64}
            height={64}
            className="absolute inset-x-[424px] w-12 h-12"
          />
          <Image
            src="/images/smoothinnercorner red.svg"
            alt="red"
            width={64}
            height={64}
            className="absolute inset-x-[480px] w-12 h-12"
          /> */}
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="text-bluepint-500 leading-tight">More</span> than
            just a <span className="text-redpint-500">Logistic</span> with{" "}
            <span className="text-bluepint-500">Shipment</span>
          </h1>
        </div>
        <div className="max-w-md">
          <h1 className="font-bold pt-8 md:pt-0 pb-2">
            PT. PINT INDONESIA LOGISTIK
          </h1>
          <p>
            Menjadi perusahaan logistik yang handal dan terpercaya di Indonesia.
            Dengan komitmen kami terhadap layanan pelanggan yang unggul, inovasi
            terus-menerus, dan keandalan operasional, kami bertekad untuk
            menjadi mitra logistik pilihan utama bagi pelanggan kami.
          </p>
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
