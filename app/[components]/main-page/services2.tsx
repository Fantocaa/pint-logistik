import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function Services2() {
  return (
    <>
      <section
        className="bg-gray-100 text-darkpint relative"
        style={{
          backgroundImage: "url('/images/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-90 z-10"></div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 z-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 items-center">
            <div className="font-bold col-span-3">
              <h1 className="text-3xl md:text-5xl z-10">How do we </h1>
              <h1 className="text-3xl md:text-5xl z-10">
                <span className="text-redpint-500">Deliver</span> your{" "}
                <span className="text-bluepint-500">Packages</span>
              </h1>
            </div>
            <div className="max-w-md col-span-2 z-10">
              <h1>
                PT. PINT INDONESIA LOGISTIK provides several shipping methods
                which have their respective advantages, choose the method that
                suits your packages
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-8 w-full">
            <Link href="/services">
              <div className="group relative block overflow-hidden rounded-xl bg-darkpint">
                <div className="relative h-64">
                  <Image
                    src="/images/air.png"
                    alt="air"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-all duration-500 scale-105 md:scale-100 md:group-hover:scale-105 md:opacity-100 md:group-hover:opacity-30 opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="translate-y-0 md:translate-y-16 transform opacity-100 md:opacity-0 transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        <h1 className="text-3xl text-white font-semibold">
                          Air Freight
                        </h1>
                        <p className="text-sm text-white max-w-md py-2">
                          Air freight is another term for air cargo that is, the
                          shipment of goods through an air carrier.
                        </p>
                        <Button className="rounded-full">Our Services</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/services">
              <div className="group relative block overflow-hidden rounded-xl bg-darkpint">
                <div className="relative h-64">
                  <Image
                    src="/images/sea.png"
                    alt="air"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-all duration-500 scale-105 md:scale-100 md:group-hover:scale-105 md:opacity-100 md:group-hover:opacity-30 opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="translate-y-0 md:translate-y-16 transform opacity-100 md:opacity-0 transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        <h1 className="text-3xl text-white font-semibold">
                          Sea Freight
                        </h1>
                        <p className="text-sm text-white max-w-md py-2">
                          Sea Freight is a method of transporting large amounts
                          of goods using carrier ships.
                        </p>
                        <Button className="rounded-full">Our Services</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/services">
              <div className="group relative block overflow-hidden rounded-xl bg-darkpint">
                <div className="relative h-64">
                  <Image
                    src="/images/road.png"
                    alt="air"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-all duration-500 scale-105 md:scale-100 md:group-hover:scale-105 md:opacity-100 md:group-hover:opacity-30 opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="translate-y-0 md:translate-y-16 transform opacity-100 md:opacity-0 transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        <h1 className="text-3xl text-white font-semibold">
                          Road Freight
                        </h1>
                        <p className="text-sm text-white max-w-md py-2">
                          Road Freight is the physical process of transporting
                          cargo by road using car vehicles
                        </p>
                        <Button className="rounded-full">Our Services</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/services">
              <div className="group relative block overflow-hidden rounded-xl bg-darkpint">
                <div className="relative h-64">
                  <Image
                    src="/images/multimoda.png"
                    alt="air"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-all duration-500 scale-105 md:scale-100 md:group-hover:scale-105 md:opacity-100 md:group-hover:opacity-30 opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="translate-y-0 md:translate-y-16 transform opacity-100 md:opacity-0 transition-all md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        <h1 className="text-3xl text-white font-semibold">
                          Multimoda
                        </h1>
                        <p className="text-sm text-white max-w-md py-2">
                          You can arrange multimodal delivery of goods by
                          combining several types of transportation to send
                          goods that are difficult to reach by general
                          transportation
                        </p>
                        <Button className="rounded-full">Our Services</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
