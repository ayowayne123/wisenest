import React from "react";
import Image from "next/image";
import eye from "@/public/icons/eye.svg";
import arrow from "@/public/icons/arrow.svg";

const MissionCard = ({ icon, name, info, delay }) => {
  return (
    <div
      className="flex flex-col items-center gap-5"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={delay}
    >
      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-wiseNestPink  flex">
        <Image src={icon} fill alt="" className="object-contain p-4" />
      </div>
      <h2 className="font-bold lg:text-3xl text-2xl ">{name}</h2>
      <p className="text-center slg:w-[400px] lg:w-[506px] lg:text-lg">
        {info}
      </p>
    </div>
  );
};

function Mission() {
  return (
    <section className="lg:pt-32 md:pt-24 pt-12 bg-missionBg bg-[#FF91CA0D]">
      <div className="container items-center flex flex-col gap-3">
        <h2
          data-aos="zoom-up"
          data-aos-duration="800"
          className="lg:text-[48px] text-[28px] slg:text-[44px] md:text-[36px] slg:w-[530px] w-[320px] md:w-[480px] lg:w-[550px] text-center leading-tight"
        >
          Transforming Lives, Building Stronger Futures
        </h2>
        <p
          className="lg:text-[24px] slg:text-[22px] md:text-base text-[14px] leading-[24px] md:leading-loose lg:leading-[45px] w-[282px] slg:w-[750px] md:w-[580px] lg:w-[826px] text-center"
          data-aos="flip-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          We are dedicated to empowering teenage and expecting mothers through
          education, support, and care.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-y-12 container py-12 slg:py-16 md:py-10 lg:py-20">
        <MissionCard
          delay="50"
          icon={eye}
          name="Our Vision"
          info="To foster a society where teenage expecting moms are well-informed, receive quality healthcare, and are equipped with the skills needed for a life of dignity and financial independence."
        />
        <MissionCard
          delay="200"
          icon={arrow}
          name="Our Mission"
          info="To reduce the prevalence of teenage pregnancies in Africa through comprehensive sensitization programs, educational initiatives, and a holistic support system."
        />
      </div>
    </section>
  );
}

export default Mission;
