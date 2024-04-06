// "use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function ServicesTab() {
  return (
    // <section className="bg-darkpint text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-36">
      <div className="mx-auto text-center">
        <h1 className="text-xl pb-4">Our Services</h1>
        <p className="text-2xl md:text-6xl font-bold pb-16 max-w-xl text-center mx-auto">
          We Provide Best{" "}
          <span className="text-bluepint-500">Service Experience</span>
        </p>
      </div>
      <Tabs defaultValue="road" className="" orientation="vertical">
        <div className="flex w-full h-full">
          <TabsList className="flex flex-col mr-2 md:mr-8 h-full md:py-8 md:px-4 ">
            <TabsTrigger
              value="road"
              className="px-4 md:px-24 py-4 text-gray-600 text-left"
            >
              <h1 className="">Road Freight</h1>
            </TabsTrigger>
            <TabsTrigger
              value="sea"
              className="px-4 md:px-24 py-4 text-gray-600"
            >
              Sea Freight
            </TabsTrigger>
            <TabsTrigger
              value="multimoda"
              className="px-4 md:px-24 py-4 text-gray-600"
            >
              Multimoda
            </TabsTrigger>
            <TabsTrigger
              value="trailer"
              className="px-4 md:px-24 py-4 text-gray-600"
            >
              Armada Trailer
            </TabsTrigger>
          </TabsList>
          <TabsContent value="road">
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg h-96">
              <Image
                alt="roading"
                src="/images/roading.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={1080}
                height={1080}
              />
              <div className="relative pt-32 md:pt-56 bg-gradient-to-t from-gray-900 to-slate-900/5 h-full">
                <div className="p-4 sm:p-6">
                  <div>
                    <h3 className="mt-0.5 text-white font-bold text-xl md:text-4xl">
                      Road Freight
                    </h3>
                  </div>

                  <p className="mt-2 text-base md:text-lg/relaxed text-white/95 ">
                    Kami menyediakan trucking jalur darat untuk beberapa tujuan
                    yaitu Jawa, Bali, dan Lombok serta jasa transportasi
                    container kereta api tujuan Surabaya-Jakarta
                  </p>
                </div>
              </div>
            </article>
          </TabsContent>
          <TabsContent value="sea">
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg h-96">
              <Image
                alt="roading"
                src="/images/seafrieght.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={1080}
                height={1080}
              />
              <div className="relative pt-44 md:pt-56 bg-gradient-to-t from-slate-900 to-slate-900/5 h-full">
                <div className="p-4 sm:p-6">
                  <div>
                    <h3 className="mt-0.5 text-white font-bold text-xl md:text-4xl">
                      Sea Freight
                    </h3>
                  </div>

                  <p className="mt-2 text-base md:text-lg/relaxed text-white/95 ">
                    Tersedia layanan menggunakan kapal loss cargo atau kapal
                    container dengan system door to door maupun port to port
                  </p>
                </div>
              </div>
            </article>
          </TabsContent>
          <TabsContent value="multimoda">
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg h-96">
              <Image
                alt="multimoda"
                src="/images/multi.png"
                className="absolute inset-0 w-full h-full object-cover object-center"
                width={1080}
                height={1080}
              />
              <div className="relative pt-24 md:pt-48 bg-gradient-to-t from-gray-900 to-slate-900/5 h-full">
                <div className="p-4 sm:p-6">
                  <div>
                    <h3 className="mt-0.5 text-white font-bold text-xl md:text-4xl">
                      Multimoda
                    </h3>
                  </div>

                  <p className="mt-2 text-base md:text-lg/relaxed text-white/95 ">
                    Kami dapat mengatur pengiriman barang secara multimoda
                    dengan menggabungkan beberapa jenis transportasi untuk
                    pengiriman barang yang sulit dijangkau oleh transportasi
                    pada umumnya
                  </p>
                </div>
              </div>
            </article>
          </TabsContent>
          <TabsContent value="trailer">
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg h-[480px] md:h-96">
              <Image
                alt="trailer"
                src="/images/trailer.png"
                className="absolute inset-0 w-full h-full object-cover object-bottom"
                width={1080}
                height={1080}
              />
              <div className="relative pt-5 md:pt-36 bg-gradient-to-t from-gray-900 to-slate-900/5 h-full">
                <div className="p-4 sm:p-6">
                  <div>
                    <h3 className="mt-0.5 text-white font-bold text-xl md:text-4xl">
                      Armada Trailer
                    </h3>
                  </div>

                  <p className="mt-2 text-base md:text-lg/relaxed text-white/95 ">
                    Kami mendapat support penih dari perusahaan trucking PT.
                    ARMADA BERKAT ANUGERAH dibawah Holding Company PT. TAKO
                    ANUGERAH KOPORASI.
                  </p>

                  <p className="mt-2 text-base md:text-lg/relaxed text-white/95 ">
                    Jumlah armada yang dimiliki per tahun 2022 sudah mencapai 80
                    unit trailer 20&apos;, 25 unit trailer 40&apos; di Surabaya
                    dan juga beberapa armada yang tersedia di kantor-kantor
                    cabang.
                  </p>
                </div>
              </div>
            </article>
          </TabsContent>
        </div>
      </Tabs>
    </div>
    // </section>
  );
}
