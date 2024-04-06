import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="bg-darkpint text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {/* <div className="flex justify-between mb-12 items-center"> */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16 items-center">
            <div className="font-bold col-span-3">
              <h1 className="text-3xl md:text-5xl">How do we </h1>
              <h1 className="text-3xl md:text-5xl">
                <span className="text-redpint-500">Deliver</span> your{" "}
                <span className="text-bluepint-500">Packages</span>
              </h1>
            </div>
            <div className="max-w-md col-span-2">
              <h1>
                PT. PINT INDONESIA LOGISTIK provides several shipping methods
                which have their respective advantages, choose the method that
                suits your packages
              </h1>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center py-8 w-full">
              <h1 className="text-3xl">Air Freight</h1>
              <div className="col-span-2 group relative block overflow-hidden rounded-full">
                <Image
                  src="/images/air.png"
                  alt="air"
                  width={500}
                  height={500}
                  className="h-24 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mx-auto flex gap-4 items-center col-span-2">
                <h1>
                  Air freight is another term for air cargo that is, the
                  shipment of goods through an air carrier
                </h1>
                <Button className="bg-bluepint-500">Button</Button>
              </div>
            </div>
            <Separator className="my-4 opacity-50" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center py-8">
              <h1 className="text-3xl">Sea Freight</h1>
              <div className="col-span-2 group relative block overflow-hidden rounded-full">
                <Image
                  src="/images/sea.png"
                  alt="air"
                  width={500}
                  height={500}
                  className="h-24 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mx-auto flex gap-4 items-center col-span-2">
                <h1>
                  Sea Freight is a method of transporting large amounts of goods
                  using carrier ships
                </h1>
                <Button className="bg-bluepint-500">Button</Button>
              </div>
            </div>
            <Separator className="my-4 opacity-50" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center py-8">
              <h1 className="text-3xl">Road Freight</h1>
              <div className="col-span-2 group relative block overflow-hidden rounded-full">
                <Image
                  src="/images/road.png"
                  alt="air"
                  width={500}
                  height={500}
                  className="h-24 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mx-auto flex gap-4 items-center col-span-2">
                <h1>
                  Road Freight is the physical process of transporting cargo by
                  road using motor vehicles
                </h1>
                <Button className="bg-bluepint-500">Button</Button>
              </div>
            </div>
            <Separator className="my-4 opacity-50" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center py-8">
              <h1 className="text-3xl">Multimoda</h1>
              <div className="col-span-2 group relative block overflow-hidden rounded-full">
                <Image
                  src="/images/multimoda.png"
                  alt="air"
                  width={500}
                  height={500}
                  className="h-24 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mx-auto flex gap-4 items-center col-span-2">
                <h1>
                  You can arrange multimodal delivery of goods by combining
                  several types of transportation to send goods that are
                  difficult to reach by general transportation
                </h1>
                <Button className="bg-bluepint-500">Button</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
