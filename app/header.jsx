"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out   ${
        isScrolled ? "bg-white fixed shadow-md" : "bg-transparent absolute"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center  h-20">
        {/* Logo */}
        <div className="text-2xl font-bold relative w-[280px] h-[50px] ">
          <Link href="/">
            <Image src={logo} alt="" fill className="object-contain" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-row gap-7 items-center">
          <Link
            href="#contact"
            className="text-lg hover:text-wiseNestBlueGreen hover:underline decoration-2 underline-offset-4 decoration-wiseNestPink  font-semibold"
          >
            Contact Us
          </Link>
          <Link
            href="#donate"
            className="text-lg flex items-center justify-center text-white font-semibold bg-wiseNestPink rounded-full w-[122px] h-[42px] hover:bg-wiseNestBlueGreen"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
