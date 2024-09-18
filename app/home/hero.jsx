import React from "react";
import Link from "next/link";
import Image from "next/image";
import mom from "@/public/images/mom-hugging.png";
function Hero() {
  return (
    <div className="bg-pinkBg h-screen lg:min-h-[600px] lg:max-h-[900px] bg-cover bg-no-repeat relative pt-20">
      <div className="container grid slg:grid-cols-2 h-full items-center">
        {/* Hero Text */}
        <div className="flex flex-col gap-3">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:text-7xl xl:text-[80px] leading-tight  flex flex-col font-bold"
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
            className="lg:text-2xl"
            data-aos="fade-right"
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
            href="#"
            className="pry-btn btn-base mt-5"
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* mom hugging child image */}
      <div
        data-aos="fade-left"
        className="w-1/2 h-[90%] absolute right-0 bottom-0"
      >
        <div className="relative h-full w-full">
          <Image
            src={mom}
            priority
            fill
            alt="Mom hugging her child"
            className="object-contain object-right-bottom "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
