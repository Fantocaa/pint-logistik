import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBar from "@/components/navbar-footer/navbar";
import "./globals.css";
import Footer from "@/components/navbar-footer/footer";
import localFont from "next/font/local";
import ServicesArea from "./[components]/main-page/servicearea";
import NavbarFlowbite from "@/components/navbar-footer/navbar-flowbite";
// import NavigationBar from "@/components/navbar-footer/navbar copy";

const inter = Inter({ subsets: ["latin"] });

// const speedy = localFont({
//   src: "/fonts/SPEEDYREGULAR-7BLOE.woff",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "PINT INDONESIA LOGISTIK - Handle your Logistic with Care",
  description: "Handle your Logistic with Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {/* <NavbarFlowbite /> */}
        {children}
        <ServicesArea />
        <Footer />
      </body>
    </html>
  );
}
