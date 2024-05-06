import React from "react";
import Image from "next/image";

export default function Member() {
  return (
    <>
      <div className="relative h-full w-full bg-white py-16 md:py-0">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:pt-24 lg:pb-40">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <div className="md:flex justify-between flex-row-reverse relative">
            <div className="mx-auto w-full md:w-1/2 text-left">
              <div className="flex flex-col justify-between h-full">
                <h1 className="text-3xl md:text-5xl mx-auto">
                  Meet a<span className="font-bold leading-snug"> Man</span> who
                  makes this <span className="font-bold">Possible</span>
                </h1>
                <div className="hidden md:block">
                  <Image
                    src="/logo/pintlogo.svg"
                    width={380}
                    height={300}
                    alt="pint"
                    className="w-64 pt-8 md:pt-0"
                  ></Image>
                  <h1 className="text-xl md:text-3xl pt-2 pb-4 ">
                    PT. PINT INDONESIA LOGISTIK
                  </h1>
                </div>
                <div className="hidden md:block">
                  <h1 className="text-4xl font-semibold">Irwan Handoko</h1>
                  <h1 className="text-2xl pt-1 pb-4">
                    Director PT. PINT INDONESIA LOGISTIK
                  </h1>
                  {/* <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Omnis perferendis hic asperiores quibusdam quidem voluptates
                    doloremque reiciendis nostrum harum. Repudiandae?
                  </p> */}
                </div>
              </div>
            </div>
            <div>
              <Image
                alt="pp"
                src="/images/irwan.webp"
                className="h-[32rem] md:max-w-md object-cover rounded-xl object-top py-8 md:py-0"
                width={1080}
                height={1080}
              />
            </div>
            {/* <div className="md:hidden pb-8">
              <Image
                src="/logo/pintlogo.svg"
                width={380}
                height={300}
                alt="pint"
                className="w-64"
              ></Image>
              <h1 className="text-xl md:text-3xl pt-2 pb-4 ">
                PT. PINT INDONESIA LOGISTIK
              </h1>
            </div> */}
            <div className="md:hidden">
              <h1 className="text-4xl font-semibold">Irwan Handoko</h1>
              <h1 className="text-2xl pt-1 pb-4">
                Director of PT. PINT LOGISTIK INDONESIA
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
