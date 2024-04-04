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
        <div className="relative h-full w-full bg-darkpint">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-32">
            <h1 className="text-white text-center pb-4 text-xl">
              Our Services Area
            </h1>
            <div className="max-w-screen-md 2xl:max-w-screen-lg mx-auto pb-32">
              <TypewriterEffect words={words} className="text-center" />
            </div>
            <div className="relative">
              <Image
                src="/images/Provinces.svg"
                alt="map"
                width={2560}
                height={2560}
                className="mx-auto w-full h-full"
              />
              <div className="absolute top-0 left-0 w-full h-full">
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="flex h-4 w-4 absolute top-[90px] left-[110px]">
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
                      <span className="flex h-4 w-4 absolute top-[116px] left-[232px]">
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
                      <span className="flex h-4 w-4 absolute top-[126px] left-[244px]">
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
                      <span className="flex h-4 w-4 absolute top-[224px] left-[256px]">
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
                      <span className="flex h-4 w-4 absolute top-[216px] left-[292px]">
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
                      <span className="flex h-4 w-4 absolute top-[212px] left-[436px]">
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
                      <span className="flex h-4 w-4 absolute top-[216px] left-[468px]">
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
                      <span className="flex h-4 w-4 absolute top-[236px] left-[520px]">
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
                      <span className="flex h-4 w-4 absolute top-[236px] left-[520px]">
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
                      <span className="flex h-4 w-4 absolute top-[186px] left-[546px]">
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
                      <span className="flex h-4 w-4 absolute top-[186px] left-[546px]">
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
                      <span className="flex h-4 w-4 absolute top-[176px] left-[556px]">
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
                      <span className="flex h-4 w-4 absolute top-[156px] left-[576px]">
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
                      <span className="flex h-4 w-4 absolute top-[102px] left-[596px]">
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="flex h-4 w-4 absolute top-[366px] left-[672px]">
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
                      <span className="flex h-4 w-4 absolute top-[378px] left-[696px]">
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
                      <span className="flex h-4 w-4 absolute top-[372px] left-[712px]">
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
                      <span className="flex h-4 w-4 absolute top-[410px] left-[748px]">
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
                      <span className="flex h-4 w-4 absolute top-[392px] left-[768px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="flex h-4 w-4 absolute top-[194px] left-[684px]">
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
                      <span className="flex h-4 w-4 absolute top-[164px] left-[648px]">
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
                      <span className="flex h-4 w-4 absolute top-[124px] left-[668px]">
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
                      <span className="flex h-4 w-4 absolute top-[132px] left-[710px]">
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
                      <span className="flex h-4 w-4 absolute top-[118px] left-[772px]">
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
                      <span className="flex h-4 w-4 absolute top-[138px] left-[850px]">
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
                      <span className="flex h-4 w-4 absolute top-[238px] left-[872px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bluepint-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-bluepint-500"></span>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
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
                    <TooltipContent aria-label="Sidoarjo">
                      <p>Sidoarjo</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
