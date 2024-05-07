import Image from "next/image";
import React from "react";

export default function WhyChooseUs() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="my-8 grid grid-cols-1 gap-4 md:my-16 md:grid-cols-2 md:gap-4 2xl:gap-6 lg:grid-cols-4">
            <div className="flex items-start gap-4 md:col-span-4">
              <div className="max-w-xl pb-4">
                <div className="font-bold col-span-3">
                  <h1 className="text-3xl md:text-5xl leading-snug">
                    Deliver your{" "}
                  </h1>
                  <h1 className="text-3xl md:text-5xl">
                    <span className="text-redpint-500">Logistic</span> with{" "}
                    <span className="text-bluepint-500 leading-snug">
                      C.A.R.E
                    </span>
                  </h1>
                </div>
                <p className="mt-4 text-gray-600 2xl:text-xl">
                  This is the reason why you should use our services instead of
                  using other shipping agency
                </p>
              </div>
            </div>

            <div className="block rounded-xl bg-gray-50 border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <span className="inline-block rounded-lg bg-red-100 p-3">
                <Image
                  src="/images/commit.svg"
                  alt="accurate"
                  width={64}
                  height={64}
                  className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16"
                />
              </span>

              <h2 className="mt-2 font-bold text-2xl">Commitment</h2>

              <p className="sm:mt-1 sm:block sm:text-base sm:text-gray-600">
                Solusi logistik yang bertanggung jawab, andal, dan fleksibel,
                dirancang khusus untuk memenuhi kebutuhan bisnis Anda.
              </p>
            </div>
            {/* <div className=" items-start gap-4 bg-gray-50 p-4 md:self-end rounded-xl">
              <span className="shrink-0 rounded-lg bg-red-100 p-6">
                <Image
                  src="/images/commit.svg"
                  alt="accurate"
                  width={64}
                  height={64}
                  className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16"
                />
              </span>

              <div>
                <h2 className=" font-bold text-darkpint text-2xl">
                  Commitment
                </h2>
                <p className="mt-1 text-gray-500">
                  Solusi logistik yang bertanggung jawab, andal, dan fleksibel,
                  dirancang khusus untuk memenuhi kebutuhan bisnis Anda.
                </p>
              </div>
            </div> */}

            <div className="block rounded-xl bg-gray-50 border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <span className="inline-block rounded-lg bg-blue-100 p-3">
                <Image
                  src="/images/accurate.svg"
                  alt="accurate"
                  width={64}
                  height={64}
                  className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16"
                />
              </span>

              <h2 className="mt-2 font-bold text-2xl">Accurate</h2>

              <p className="sm:mt-1 sm:block sm:text-base sm:text-gray-600">
                Kami memastikan menjalankan tugas dengan baik tanpa ada
                kesalahan untuk layanan terbaik kepada pelanggan kami.
              </p>
            </div>

            {/* <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
              <span className="shrink-0 rounded-lg bg-blue-100 p-6">
                <Image
                  src="/images/accurate.svg"
                  alt="accurate"
                  width={64}
                  height={64}
                  className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16"
                />
              </span>
              <div>
                <h2 className=" font-bold text-darkpint text-2xl">Accurate</h2>
                <p className="mt-1 text-gray-500">
                  Kami memastikan menjalankan tugas dengan baik tanpa ada
                  kesalahan untuk layanan terbaik kepada pelanggan kami.
                </p>
              </div>
            </div> */}

            <div className="block rounded-xl bg-gray-50 border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <span className="inline-block rounded-lg bg-green-100 p-3">
                <Image
                  src="/images/responsive.svg"
                  alt="accurate"
                  width={64}
                  height={64}
                  className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16"
                />
              </span>

              <h2 className="mt-2 font-bold text-2xl">Responsive</h2>

              <p className="sm:mt-1 sm:block sm:text-base sm:text-gray-600">
                Mampu memberikan respon yang cepat dan tanggap dalam melayani
                permintaan customer. Kami siap menjadi jawaban dari kebutuhan
                logistik anda.
              </p>
            </div>

            {/* <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
              <span className="shrink-0 rounded-lg bg-green-100 p-6">
                <Image
                  src="/images/responsive.svg"
                  alt="accurate"
                  width={64}
                  height={64}
                  className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16"
                />
              </span>

              <div>
                <h2 className=" font-bold text-darkpint text-2xl">
                  Responsive
                </h2>
                <p className="mt-1 text-gray-500">
                  Kami memastikan menjalankan tugas dengan baik tanpa ada
                  kesalahan untuk layanan terbaik kepada pelanggan kami.
                </p>
              </div>
            </div> */}

            <div className="block rounded-xl bg-gray-50 border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <span className="inline-block rounded-lg bg-yellow-100 p-3">
                <Image
                  src="/images/service.svg"
                  alt="accurate"
                  width={64}
                  height={64}
                  className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16"
                />
              </span>

              <h2 className="mt-2 font-bold text-2xl">Excelent Services</h2>

              <p className="sm:mt-1 sm:block sm:text-base sm:text-gray-600">
                Kami memastikan menjalankan tugas dengan baik tanpa ada
                kesalahan untuk layanan terbaik kepada pelanggan kami.
              </p>
            </div>

            {/* <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
              <span className="shrink-0 rounded-lg bg-yellow-100 p-6">
                <Image
                  src="/images/service.svg"
                  alt="accurate"
                  width={64}
                  height={64}
                  className="w-10 h-10 lg:w-12 lg:h-12 2xl:w-16 2xl:h-16"
                />
              </span>

              <div>
                <h2 className=" font-bold text-darkpint text-2xl">
                  Excelent Services
                </h2>

                <p className="mt-1 text-gray-500">
                  Kami memastikan menjalankan tugas dengan baik tanpa ada
                  kesalahan untuk layanan terbaik kepada pelanggan kami.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
