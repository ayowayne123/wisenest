import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "@/public/images/logoWhite.png";

function Footer() {
  return (
    <footer className="min-h-[500px] bg-black text-white pb-8">
      <div className="container pt-20 slg:pt-32">
        <div className="flex slg:flex-row flex-col justify-between gap-y-10">
          {/* Logo White */}
          <div className="text-2xl font-bold relative w-[320px] h-[60px] ">
            <Link href="/">
              <Image src={logoWhite} alt="" fill className="object-contain" />
            </Link>
          </div>
          <div className="flex flex-col text-lg">
            <span>Address: Emmanuel High, Ogudu/Ojota Road Lagos </span>
            <Link className="hover:text-wiseNestPink" href="tel:+2348138485463">
              Phone: +234 813 848 5463{" "}
            </Link>
            <Link
              className="hover:text-wiseNestPink"
              href="mailto:wisenestafrica@gmail.com"
            >
              Email: wisenestafrica@gmail.com
            </Link>
            <nav className=" flex flex-row gap-10 mt-10">
              <Link className="hover:text-sky-700" href="https://linkedin.com">
                Linkedin
              </Link>
              <Link className="hover:text-sky-400" href="https://Twitter.com">
                Twitter
              </Link>
              <Link
                className="hover:text-pink-700"
                href="https://Instagram.com"
              >
                Instagram
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-b border-white w-full mt-16 slg:mt-24"></div>
        <p className="pt-9 text-center">
          © 2024 Wise Nest Foundation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
