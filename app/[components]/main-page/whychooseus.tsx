import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="my-8 grid grid-cols-1 gap-4 md:my-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            <div className="flex items-start gap-4 col-span-2">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold sm:text-5xl text-darkpint leading-tight">
                  Deliver your{" "}
                  <span className="text-redpint-500">Logistic</span> with{" "}
                  <span className="text-bluepint-500">Care</span>
                </h2>
                <p className="mt-4 text-gray-600">
                  This is the reason why you should use our services instead of
                  using other shipping agency
                </p>
              </div>
            </div>
            {/* <div className="flex items-start gap-4"></div> */}
            <div className="flex items-start flex-col gap-4 bg-gray-50 p-4 rounded-xl">
              <span className="shrink-0 rounded-lg bg-red-100 p-4">
                <Image
                  src="/images/commit.svg"
                  alt="accurate"
                  width={40}
                  height={40}
                />
              </span>

              <div>
                <h2 className="text-lg font-bold text-darkpint">Commitment</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Solusi logistik yang bertanggung jawab, andal, dan fleksibel,
                  dirancang khusus untuk memenuhi kebutuhan bisnis Anda.
                </p>
              </div>
            </div>

            <div className="flex items-start flex-col gap-4 bg-gray-50 p-4 rounded-xl">
              <span className="shrink-0 rounded-lg bg-blue-100 p-4">
                <Image
                  src="/images/accurate.svg"
                  alt="accurate"
                  width={40}
                  height={40}
                />
              </span>
              <div>
                <h2 className="text-lg font-bold text-darkpint">Accurate</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Kami memastikan menjalankan tugas dengan baik tanpa ada
                  kesalahan untuk layanan terbaik kepada pelanggan kami.
                </p>
              </div>
            </div>

            <div className="flex items-start flex-col gap-4 bg-gray-50 p-4 rounded-xl">
              <span className="shrink-0 rounded-lg bg-green-100 p-4">
                <Image
                  src="/images/responsive.svg"
                  alt="accurate"
                  width={40}
                  height={40}
                />
              </span>

              <div>
                <h2 className="text-lg font-bold">Responsive</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Kami memastikan menjalankan tugas dengan baik tanpa ada
                  kesalahan untuk layanan terbaik kepada pelanggan kami.
                </p>
              </div>
            </div>

            <div className="flex items-start flex-col gap-4 bg-gray-50 p-4 rounded-xl">
              <span className="shrink-0 rounded-lg bg-yellow-100 p-4">
                <Image
                  src="/images/service.svg"
                  alt="accurate"
                  width={40}
                  height={40}
                />
              </span>

              <div>
                <h2 className="text-lg font-bold">Excelent Services</h2>

                <p className="mt-1 text-sm text-gray-500">
                  Kami memastikan menjalankan tugas dengan baik tanpa ada
                  kesalahan untuk layanan terbaik kepada pelanggan kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
