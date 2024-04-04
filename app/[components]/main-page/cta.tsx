"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Hubungi",
    },
    {
      text: "kami",
    },
    {
      text: "sekarang",
    },
    {
      text: "dan",
    },
    {
      text: "temukan",
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
    },
    {
      text: "bisnis",
    },
    {
      text: "Anda!",
    },
    // {
    //   text: "Aceternity.",
    //   className: "text-blue-500 dark:text-blue-500",
    // },
  ];
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col items-start justify-center h-[40rem] ">
          {/* <p className="text-neutral-600 dark:text-neutral-200 text-base mb-4">
        Let&apos;s make something together
      </p> */}
          <div className="max-w-xl">
            <TypewriterEffect words={words} className="text-left" />
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
            <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
              Contact Us
            </button>
            {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button> */}
          </div>
        </div>
      </section>
    </>
  );
}
