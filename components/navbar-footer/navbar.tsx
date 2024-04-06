"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { Navbar } from "flowbite-react";

export default function NavigationBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0); // State untuk menyimpan posisi scroll sebelumnya
  const [isVisible, setIsVisible] = useState(true); // State untuk mengontrol keterlihatan navbar
  const controls = useAnimation(); // Controls untuk mengontrol animasi dengan Framer Motion
  const [isOpen, setIsOpen] = useState(false);

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

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isOpen, controls]);

  return (
    <>
      {/* {!isMobileView && ( */}
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
                    className="w-32 md:w-40"
                  />
                </Link>
              </div>

              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
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
      {/* )} */}

      {/* {isMobileView && (
        <Navbar
          fluid
          rounded
          className={
            isMobileView
              ? "fixed top-0 w-full z-50 bg-darkpint"
              : "hidden md:block"
          }
        >
          <Navbar.Brand href="/">
            <Image
              src="/logo/pintlogo.svg"
              alt="logo"
              width={128}
              height={64}
            />
          </Navbar.Brand>
          {isMobileView && (
            <div className="flex md:order-2">
              <Button>Hubungi Sekarang</Button>
              <Navbar.Toggle onClick={toggleMobileMenu} />
            </div>
          )}
          <Navbar.Collapse className={isMobileMenuOpen ? "block" : "hidden"}>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      )} */}
    </>
  );
}
