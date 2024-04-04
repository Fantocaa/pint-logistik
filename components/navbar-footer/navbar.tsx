"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

export default function NavigationBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0); // State untuk menyimpan posisi scroll sebelumnya
  const [isVisible, setIsVisible] = useState(true); // State untuk mengontrol keterlihatan navbar
  const controls = useAnimation(); // Controls untuk mengontrol animasi dengan Framer Motion

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Periksa apakah arah scroll berubah
      if (isScrollingDown && isVisible) {
        setIsVisible(false); // Sembunyikan navbar jika sedang digulir ke bawah
      } else if (!isScrollingDown && !isVisible) {
        setIsVisible(true); // Tampilkan navbar jika sedang digulir ke atas
      }
      setPrevScrollPos(currentScrollPos); // Simpan posisi scroll saat ini
    };

    // Tambahkan event listener untuk meng-handle scroll
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener saat komponen tidak lagi digunakan (unmount)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, prevScrollPos]);

  // Variabel untuk mengatur durasi animasi
  const transitionDuration = 0.2;

  // Variabel untuk mengatur animasi navbar saat muncul atau menghilang
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Jalankan animasi menggunakan Framer Motion controls
  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  return (
    <>
      <header>
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-darkpint bg-opacity-95"
          initial="hidden"
          animate={controls}
          variants={navbarVariants}
          transition={{ duration: transitionDuration }}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="flex py-4 items-center justify-between">
              <div className="md:flex md:items-center md:gap-12">
                <Link className="block text-teal-600" href="/">
                  <span className="sr-only">Home</span>
                  <Image
                    src="/logo/pintlogo.svg"
                    alt="logo"
                    width={160}
                    height={64}
                    // className="h-16"
                  />
                </Link>
              </div>

              <div className="hidden md:block">
                <nav aria-label="Global">
                  <ul className="flex items-center gap-6 text-sm">
                    <li>
                      <Link href="/">
                        <Button
                          variant="link"
                          className="text-white hover:text-white/75"
                        >
                          Home
                        </Button>
                      </Link>
                    </li>

                    <li>
                      <Link href="/about">
                        <Button
                          variant="link"
                          className="text-white hover:text-white/75"
                        >
                          About
                        </Button>
                      </Link>
                    </li>

                    <li>
                      <Link href="/services">
                        <Button
                          variant="link"
                          className="text-white hover:text-white/75"
                        >
                          Services
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
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
              </div>
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
}
