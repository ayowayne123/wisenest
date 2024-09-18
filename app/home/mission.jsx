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
      <div className="relative lg:w-16 lg:h-16 rounded-full overflow-hidden bg-wiseNestPink  flex">
        <Image src={icon} fill alt="" className="object-contain p-4" />
      </div>
      <h2 className="font-bold lg:text-3xl">{name}</h2>
      <p className="text-center w-[506px] text-lg">{info}</p>
    </div>
  );
};

function Mission() {
  return (
    <section className="pt-32 bg-missionBg bg-[#FF91CA0D]">
      <div className="container items-center flex flex-col gap-3">
        <h2
          className="lg:text-[48px]  lg:w-[550px] text-center leading-tight"
          data-aos="zoom-up"
          data-aos-duration="800"
        >
          Transforming Lives, Building Stronger Futures
        </h2>
        <p
          className="lg:text-[24px] lg:leading-[45px] lg:w-[826px] text-center"
          data-aos="flip-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          We are dedicated to empowering teenage and expecting mothers through
          education, support, and care.
        </p>
      </div>
      <div className="grid grid-cols-2 container lg:py-20">
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
