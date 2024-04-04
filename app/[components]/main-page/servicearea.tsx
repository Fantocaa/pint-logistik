"use client";

import React from "react";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function ServicesArea() {
  const words = [
    {
      text: "Hubungi",
      className: "text-white",
    },
    {
      text: "kami",
      className: "text-white",
    },
    {
      text: "sekarang",
      className: "text-white",
    },
    {
      text: "dan",
      className: "text-white",
    },
    {
      text: "temukan",
      className: "text-white",
    },
    {
      text: "Solusi",
      className: "text-bluepint-500",
    },
    {
      text: "Logistik",
      className: "text-bluepint-500",
    },
    {
      text: "Terbaik",
      className: "text-bluepint-500",
    },
    {
      text: "untuk",
      className: "text-white",
    },
    {
      text: "bisnis",
      className: "text-white",
    },
    {
      text: "Anda!",
      className: "text-white",
    },
  ];
  return (
    <>
      <section className="bg-darkpint">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
          <div className="max-w-screen-md 2xl:max-w-screen-lg mx-auto pb-32">
            <TypewriterEffect words={words} className="text-center" />
          </div>
          <Image
            src="/images/Provinces.svg"
            alt="map"
            width={2560}
            height={2560}
            className="mx-auto w-full h-full"
          />
        </div>
      </section>
    </>
  );
}
