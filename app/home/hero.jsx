import React from "react";
import Link from "next/link";
import Image from "next/image";
import mom from "@/public/images/mom-hugging.png";
import momPhone from "@/public/images/momPhone.png";
function Hero() {
  return (
    <div className="bg-pinkBg h-screen min-h-[700px] lg:max-h-[900px] bg-cover bg-no-repeat relative pt-20">
      <div className="container grid grid-rows-2 md:grid-rows-1   slg:grid-cols-2 h-full items-center  md:pb-32 pb-0 slg:pb-0">
        {/* Hero Text */}
        <div className="flex flex-col gap-3 md:pt-0 pt-6">
          <h1
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            className="lg:text-7xl xl:text-[80px] slg:text-6xl md:text- text-4xl md:text-left text-center leading-tight  flex flex-col font-bold"
          >
            <span>
              A Nest of{" "}
              <span
                style={{ animation: "colorChange 8s ease-in-out infinite" }}
              >
                Care,
              </span>
            </span>
            <span>A Future of Hope</span>
          </h1>
          <p
            className="lg:text-2xl md:text-xl md:text-left text-center"
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            We empower teenage moms with the care, education, and support they
            need to thrive. Help us build brighter futures for young mothers and
            their children.
          </p>
          <Link
            data-aos="flip-down"
            data-aos-delay="800"
            data-aos-duration="1000"
            data-aos-once="true"
            href="#"
            className="pry-btn btn-base mt-5 md:mx-0 mx-auto"
          >
            Learn More
          </Link>
        </div>
        <div
          data-aos="fade-left"
          className="md:w-1/2 md:h-[90%] md:absolute right-0 bottom-0  w-full h-full"
        >
          <div className="relative h-full w-full md:flex hidden ">
            <Image
              src={mom}
              priority
              fill
              alt="Mom hugging her child"
              className="object-contain object-right-bottom "
            />
          </div>
          <div className="relative h-full w-full flex md:hidden ">
            <Image
              src={momPhone}
              priority
              fill
              alt="Mom hugging her child"
              className="object-contain object-right-bottom "
            />
          </div>
        </div>
      </div>
      {/* mom hugging child image */}
    </div>
  );
}

export default Hero;
