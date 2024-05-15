"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  const handleBackToTopClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const backToTopButton = document.getElementById("back-to-top-button");
      if (backToTopButton) {
        if (window.scrollY > 400) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      }
    });
  }

  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-darkpint">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-8">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <button
              onClick={handleBackToTopClick}
              className="inline-block rounded-full bg-bluepint-500 p-2 text-white shadow transition hover:bg-bluepint-300 sm:p-3 lg:p-4"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div className="flex flex-col items-center md:block">
              <div className="flex justify-center text-teal-600 lg:justify-start ">
                <Image
                  src="/logo/pintlogo.svg"
                  alt="logo"
                  width={192}
                  height={64}
                />
              </div>

              <div className="flex items-center gap-4 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-building text-white"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01" />
                  <path d="M16 6h.01" />
                  <path d="M12 6h.01" />
                  <path d="M12 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 10h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 10h.01" />
                  <path d="M8 14h.01" />
                </svg>
                <p className="mx-auto max-w-md text-center leading-relaxed text-gray-100 lg:text-left my-4">
                  Komplek Ruko Semut Square Blok D no.11 Jalan Semut kali
                  no.48-50 Kec. Pabean Cantikan, Surabaya
                </p>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-phone text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <p className=" text-center leading-relaxed text-gray-100 lg:text-left my-4">
                  031 - 99096665
                </p>
              </div>
              <Link href="https://wa.link/qnedf4" target="_blank">
                <Button variant="secondary">
                  <Image
                    src="/images/call-calling.svg"
                    alt="telp"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Hubungi Kami
                </Button>
              </Link>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75"
                  href="/"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75"
                  href="/about"
                >
                  {" "}
                  About{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-100 transition hover:text-gray-100/75"
                  href="/services"
                >
                  {" "}
                  Services{" "}
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-gray-200 lg:text-right">
            Copyright &copy; {currentYear}. PT. PINT INDONESIA LOGISTIK. All
            rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
