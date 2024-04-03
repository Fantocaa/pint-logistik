"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
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
            <div>
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <Image
                  src="/logo/pintlogo.svg"
                  alt="logo"
                  width={192}
                  height={64}
                />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-100 lg:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
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
