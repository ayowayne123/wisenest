import React from "react";

const Goal = ({ bg, text, number, title, desc, top }) => {
  return (
    <div
      className={` lg:px-12 lg:py-16  slg:px-10 slg:py-12 md:py-10 md:px-8 ${bg} slg:gap-[25px] md:gap-5 lg:gap-[40px] flex flex-col ${text} ${top} md:rounded-[30px] flex-shrink-0`}
    >
      <div className="opacity-15 text-[64px] font-bold">{number}</div>
      <div className="text-[36px] font-bold leading-tight pr-[30px] pt-6">
        {title}
      </div>
      <p className="pr-[0px] text-xl leading-loose text-black">{desc}</p>
    </div>
  );
};

const goalDetails = [
  {
    bg: "bg-wiseNestPinkBg",
    text: "text-wiseNestPink",
    top: "mt-[0]",
    number: "01",
    title: "Sensitization & Education",
    desc: "Raise awareness among young people (ages 8-19) about the challenges and consequences of unplanned pregnancies.",
  },
  {
    bg: "bg-wiseNestBlueBg",
    text: "text-wiseNestBlue",
    number: "02",
    top: "pt-20 font-bold",
    title: "Support & Empowerment",
    desc: "Provide teenage moms with antenatal and post-natal care, education, and vocational training to secure their financial independence.",
  },
  {
    bg: "bg-wiseNestOrangeBg",
    text: "text-wiseNestOrange",
    top: "mt-[140px]",
    number: "03",
    title: "Advocacy & Collaboration",
    desc: "Work with schools, parents, teachers, and communities to create a supportive ecosystem and advocate for better reproductive health education.",
  },
];
function Goals() {
  return (
    <section>
      <div className="container slg:py-16 lg:py-[70px] py-12">
        <div className="w-full flex md:flex-row flex-col justify-between items-center md:items-start slg:gap-[120px] md:gap-16 lg:gap-[150px] xl:gap-[197px]">
          <h2 className="leading-none flex flex-shrink-0 md:text-left text-center">
            Our Goals
          </h2>
          <p className="lg:text-xl lg:w-[755px] leading-loose md:text-left text-center">
            Wise Nest is dedicated to creating lasting impact through education,
            empowerment, and collaboration. We aim to raise awareness, provide
            essential support to teenage moms, and foster strong partnerships
            with communities to build a brighter future for young girls.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col w-full gap-10 overflow-x-scroll no-scrollbar container md:pr-0  pb-[70px]">
        {goalDetails.map((goal, index) => (
          <div
            key={index}
            className={` lg:w-1/3 md:min-w-[400px] `}
            style={{ marginTop: index * 70 + "px" }}
          >
            <Goal
              bg={goal.bg}
              text={goal.text}
              title={goal.title}
              number={goal.number}
              desc={goal.desc}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Goals;
