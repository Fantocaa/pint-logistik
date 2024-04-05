import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function VisiMisi() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80">
            <Image
              alt="vision"
              src="/images/missioni.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              width={1080}
              height={1080}
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Vision</h2>

            <p className="mt-4 text-gray-600">
              {/* Menjadi perusahaan Logistik yang handal dan terpercaya di
              Indonesia */}
              Visi kami adalah menjadi perusahaan logistik yang handal,
              terpercaya, dan terkemuka di seluruh Indonesia.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 ">
          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Mission</h2>
            {/* <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p> */}
            <ul className="mt-4 ml-5 text-gray-600 list-disc list-outside ">
              <li>
                Memberikan layanan jasa logistik yang mampu menjadi solusi
                terbaik dan tepat sesuai kebutuhan customer
              </li>
              <li>
                Membangun hubungan kerjasama yang bertanggung jawab dalam setiap
                perkerjaan yang dipercayakan
              </li>
              <li>
                Membentuk tim profesional yang berkualitas, terpercaya dan terus
                berinovasi dalam setiap kebutuhan customer
              </li>
              <li>
                Berkomitmen memberikan pelayanan jasa logistik yang efektif,
                efisien, dan akurat
              </li>
            </ul>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="mission"
              src="/images/vision.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              width={1080}
              height={1080}
            />
          </div>
        </div>
      </section>
    </>
  );
}
