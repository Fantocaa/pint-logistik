"use client";

import React from "react";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      {/* <section className="bg-darkpint"> */}
      <div className="relative h-full w-full bg-darkpint">
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32 relative z-10">
          <h1 className="text-white text-center pb-4 text-xl">
            Our Services Area
          </h1>
          <div className=" md:max-w-screen-md 2xl:max-w-screen-lg mx-auto pb-32 flex flex-col items-center">
            <TypewriterEffect words={words} className="text-center text-2xl" />
            <Link href="https://wa.link/qnedf4">
              <Button className="mt-4" variant={"secondary"}>
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/Provinces.svg"
              alt="map"
              width={2560}
              height={2560}
              className="mx-auto w-full h-full"
            />
            {/* <video width="320" height="240" controls preload="none">
              <source src="/path/to/video.mp4" type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video> */}

            <div className="hidden md:block">
              {/* Sumatera */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[15px] left-[32px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Aceh">
                    <p>Aceh</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[120px] left-[60px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Nias">
                    <p>Nias</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[44px] left-[80px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Belawan">
                    <p>Belawan</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[104px] left-[100px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Sibolga">
                    <p>Sibolga</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[120px] left-[162px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Pekanbaru">
                    <p>Pekanbaru</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[116px] left-[232px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Batam">
                    <p>Batam</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[126px] left-[244px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Tanjung Pinang">
                    <p>Tanjung Pinang</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[224px] left-[256px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Palembang">
                    <p>Palembang</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[216px] left-[292px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Bangka Belitung">
                    <p>Bangka Belitung</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* Kalimantan */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[212px] left-[436px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Kumai">
                    <p>Kumai</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[216px] left-[468px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Sampit">
                    <p>Sampit</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[236px] left-[520px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Banjarmasin">
                    <p>Banjarmasin</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[186px] left-[546px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Sepaku">
                    <p>Sepaku</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[176px] left-[566px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Balikpapan">
                    <p>Balikpapan</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[156px] left-[576px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Samarinda">
                    <p>Samarinda</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[102px] left-[596px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Berau">
                    <p>Berau</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[78px] left-[588px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Sidoarjo">
                    <p>Sidoarjo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[78px] left-[588px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Tarakan">
                    <p>Tarakan</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* NTB NTT */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[368px] left-[560px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Lombok">
                    <p>Lombok</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[380px] left-[606px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Sumbawa">
                    <p>Sumbawa</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[366px] left-[628px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Bima">
                    <p>Bima</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[368px] left-[656px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Labuan Bajo">
                    <p>Labuan Bajo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* NTT */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[366px] left-[672px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Reo">
                    <p>Reo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[378px] left-[696px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Ende">
                    <p>Ende</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[372px] left-[712px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Maumere">
                    <p>Maumere</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[410px] left-[748px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Kupang">
                    <p>Kupang</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[392px] left-[768px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Atambua">
                    <p>Atambua</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* Sulawesi */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[286px] left-[650px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Makassar">
                    <p>Makassar</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[286px] left-[730px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Baubau">
                    <p>Baubau</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[252px] left-[718px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Kendari">
                    <p>Kendari</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[248px] left-[700px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Kolaka">
                    <p>Kolaka</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[218px] left-[700px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Morowali">
                    <p>Morowali</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[164px] left-[648px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Palu">
                    <p>Palu</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[124px] left-[668px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Toli-Toli">
                    <p>Toli-Toli</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[132px] left-[736px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Gorontalo">
                    <p>Gorontalo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[106px] left-[792px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Bitung">
                    <p>Bitung</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[138px] left-[850px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Ternate">
                    <p>Ternate</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[238px] left-[872px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Ambon">
                    <p>Ambon</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* Papua */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[292px] left-[992px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Tual">
                    <p>Tual</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[172px] left-[948px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Sorong">
                    <p>Sorong</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[172px] left-[1026px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Manokwari">
                    <p>Manokwari</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="flex h-4 w-4 absolute top-[218px] right-[0px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent aria-label="Jayapura">
                    <p>Jayapura</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
}
