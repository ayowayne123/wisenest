import React from "react";

const Goal = ({ bg, text, number, title, desc, top, delay }) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-once="true"
      data-aos-delay={delay}
      className={` lg:px-12 lg:py-16 px-11 py-[56px]   slg:px-10 slg:py-12 md:py-12 md:px-8 ${bg} slg:gap-[25px] md:gap-6 lg:gap-[40px] gap-8 flex flex-col ${text} ${top} rounded-[30px] flex-shrink-0`}
    >
      <div className="opacity-15 slg:text-[64px] md:text-[56px] text-[40px] font-bold">
        {number}
      </div>
      <div className="slg:text-[36px] md:text-[32px] text-[28px] font-bold leading-tight md:pr-[30px] pt-6">
        {title}
      </div>
      <p className="md:pr-[30px] pr-[10px] md:text-xl  text-sm  leading-loose text-black">
        {desc}
      </p>
    </div>
  );
};

const goalDetails = [
  {
    bg: "bg-wiseNestPinkBg",
    text: "text-wiseNestPink",
    top: "mt-[0]",
    number: "01",
    delay: "0",
    title: "Sensitization & Education",
    desc: "Raise awareness among young people (ages 8-19) about the challenges and consequences of unplanned pregnancies.",
  },
  {
    bg: "bg-wiseNestBlueBg",
    text: "text-wiseNestBlue",
    number: "02",
    top: "slg:mt-[70px] md:mt-[40px]",
    delay: "300",
    title: "Support & Empowerment",
    desc: "Provide teenage moms with antenatal and post-natal care, education, and vocational training to secure their financial independence.",
  },
  {
    bg: "bg-wiseNestOrangeBg",
    text: "text-wiseNestOrange",
    top: "slg:mt-[140px] md:mt-[80px]",
    number: "03",
    delay: "600",
    title: "Advocacy & Collaboration",
    desc: "Work with schools, parents, teachers, and communities to create a supportive ecosystem and advocate for better reproductive health education.",
  },
];
function Goals() {
  return (
    <section>
      <div className="container slg:py-16 lg:py-[70px] py-12">
        <div className="w-full flex md:flex-row flex-col justify-between items-center md:items-start slg:gap-[120px] md:gap-16 lg:gap-[150px] xl:gap-[197px]">
          <h2 className="md:leading-none flex flex-shrink-0 md:text-left text-center">
            Our Goals
          </h2>
          <p className="lg:text-xl lg:w-[755px] md:text-base slg:text-lg md:leading-loose  md:text-left text-center py-6 md:py-0  text-sm leading-[24px]">
            WiseNest Africa is dedicated to creating lasting impact through
            education, empowerment, and collaboration. We aim to raise
            awareness, provide essential support to teenage moms, and foster
            strong partnerships with communities to build a brighter future for
            young girls.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col w-full gap-10 overflow-x-scroll no-scrollbar container md:pr-0  pb-[30pxs] slg:pb-[70px]">
        {goalDetails.map((goal, index) => (
          <div key={index} className={` lg:w-1/3 md:min-w-[400px] ${goal.top}`}>
            <Goal
              bg={goal.bg}
              text={goal.text}
              title={goal.title}
              number={goal.number}
              desc={goal.desc}
              delay={goal.delay}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Goals;
