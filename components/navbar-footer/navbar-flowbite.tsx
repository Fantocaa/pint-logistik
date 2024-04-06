"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function NavbarFlowbite() {
  return (
    // <section className="z-50 fixed w-full mx-auto">
    // <div className="">
    <Navbar
      fluid
      rounded
      className="fixed top-0 left-0 right-0 z-50 bg-darkpint bg-opacity-95"
    >
      <div className="px-4 sm:px-6 lg:px-6 2xl:px-8 max-w-screen-xl w-full mx-auto flex items-center justify-between">
        <Navbar.Brand as={Link} href="/">
          <Image
            src="/logo/pintlogo.svg"
            alt="Pint Logo"
            width={128}
            height={64}
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Link
            href="https://wa.link/qnedf4"
            target="_blank"
            className="hidden lg:block"
          >
            <Button variant="secondary">
              <Image
                src="/images/call-calling.svg"
                alt="telp"
                width={16}
                height={16}
                className="mr-2"
              />
              <h1 className="text-md">Hubungi Kami</h1>
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <div className="hidden lg:block">
          <Navbar.Collapse>
            {/* <Navbar.Link href="#" active>
              Home
            </Navbar.Link> */}
            <Link href="/">
              <Button variant="link" className="text-white hover:text-white/75">
                Home
              </Button>
            </Link>
            {/* <Navbar.Link href="#">About</Navbar.Link> */}
            <Link href="/about">
              <Button variant="link" className="text-white hover:text-white/75">
                About
              </Button>
            </Link>
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
          </Navbar.Collapse>
        </div>
      </div>

      <div className="w-full lg:hidden">
        <Navbar.Collapse>
          {/* <Navbar.Link href="#" active>
              Home
            </Navbar.Link> */}
          <Link href="/">
            <Button variant="link" className="text-white hover:text-white/75">
              Home
            </Button>
          </Link>
          {/* <Navbar.Link href="#">About</Navbar.Link> */}
          <Link href="/about">
            <Button variant="link" className="text-white hover:text-white/75">
              About
            </Button>
          </Link>
          <li>
            <Link href="/services">
              <Button variant="link" className="text-white hover:text-white/75">
                Services
              </Button>
            </Link>
          </li>
        </Navbar.Collapse>
      </div>
    </Navbar>
    // </div>
    // </section>
  );
}
