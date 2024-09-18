import React from "react";
import Image from "next/image";
import impact1 from "@/public/images/impact1.png";
import impact2 from "@/public/images/impact2.png";
import checkmark from "@/public/icons/checkmark.svg";

const ImpactPoints = ({ point }) => {
  return (
    <div className="slg:pt-8 md:pt-5 md:pb-8 slg:pb-11 lg:text-xl slg:text-lg flex flex-row items-center gap-8">
      <span className=" relative flex-shrink-0">
        <Image src={checkmark} width={40} height={40} alt="check" />
      </span>
      <p>{point}</p>
    </div>
  );
};

function Impact() {
  return (
    <section className="py-10 container ">
      <h2>Our Impact</h2>
      <p className="mx-auto leading-loose slg:text-xl lg:w-[1000px] slg:w-[850px] md:w-[650px] text-center my-5">
        Through our programs, WiseNest Africa is transforming lives by improving
        maternal health, reducing teenage pregnancies, and empowering young moms
        to achieve financial independence. Our work is creating healthier
        communities and brighter futures, one step at a time.
      </p>
      <div className="bg-wiseNestBlueGreen w-full rounded-[30px] md:min-h-[500px] slg:min-h-[585px] lg:min-h-[685px] my-5 md:pr-6 slg:pr-10 lg:pr-16 grid grid-cols-2">
        <div className="relative">
          <div className="absolute md:h-[280px] md:w-[250px] slg:h-[330px]  slg:w-[290px] lg:h-[380px] slg:top-[60px] slg:left-[20px]  lg:w-[330px] md:top-[26px] md:left-[6px] lg:top-[76px] lg:left-[56px] z-10">
            <div className="h-full w-full relative">
              <Image
                src={impact1}
                fill
                alt="woman holding child"
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute lg:h-[380px]  lg:w-[330px] md:w-[250px] md:h-[280px]  slg:h-[330px]  slg:w-[290px] z-20 rotate-[30deg] md:top-[126px] md:left-[96px] slg:top-[160px] slg:left-[140px] lg:top-[203px] lg:left-[226px]">
            <div className="h-full w-full relative">
              <Image
                src={impact2}
                fill
                alt="woman holding child"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center text-white    ">
          <ImpactPoints point="Improve maternal health, reducing child mortality and promoting healthier teenage mothers." />
          <div className=" border-b-[0.5px] border-white ml-16"></div>
          <ImpactPoints point="Decrease the prevalence of teenage pregnancies, leading to better health outcomes and increased educational opportunities." />
          <div className=" border-b-[0.5px] border-white ml-16"></div>
          <ImpactPoints point="Empower young mothers with skills and support systems that allow them to lead independent, successful lives." />
        </div>
      </div>
    </section>
  );
}

export default Impact;
