import React from "react";
import ImageTextHeader from "@/components/main-page/image-text-header";
import { Button } from "@/components/ui/button";
import MarqueeText from "@/components/main-page/marquee-header";

export default function Header() {
  return (
    <>
      {/* <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"> */}
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 pt-32 pb-16 sm:px-6 lg:flex lg:items-center lg:px-8 justify-between">
        <div className="text-left ltr:sm:text-left rtl:sm:text-right max-w-md">
          <h3>PT. PINT INDONESIA LOGISTIK</h3>
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="text-bluepint-500">Handle</span> your{" "}
            <span className="text-redpint-500">Logistic</span> with{" "}
            <span className="text-bluepint-500">Care</span>
          </h1>
        </div>
        <div className="max-w-sm">
          <h1>
            We will deliver your package quickly, safely than any other shipping
            agency
          </h1>
          <div className="flex gap-4 pt-4">
            <Button className="rounded-full">Get Started</Button>
            <Button className="rounded-full">About Us</Button>
          </div>
        </div>
      </div>
      <ImageTextHeader />
      <MarqueeText />
      {/* </section> */}
    </>
  );
}
