import React from "react";
import Link from "next/link";

function Involved() {
  return (
    <section
      id="donate"
      className="min-h-[529px] flex flex-col items-center justify-center bg-wiseNestPinkBg container rounded-[30px] py-[70px] md:py-3 "
    >
      <h2>Get Involved</h2>
      <p className="mx-auto md:leading-loose text-sm leading-[24px] md:text-base slg:text-xl lg:w-[1000px] slg:w-[850px] md:w-[650px] text-center my-5">
        Be a part of the change! Whether you want to volunteer your time,
        partner with us, or donate to support our cause, your involvement makes
        a real difference. By supporting WISENest Africa, you help teenage moms
        across Nigeria gain access to the care, education, and opportunities
        they need to thrive.
      </p>
      <div className="flex md:flex-row flex-col items-center justify-center gap-6 md:gap-9 pt-5">
        <Link
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-once="true"
          href="#"
          className=" btn-base sec-btn "
        >
          Volunteer
        </Link>
        <Link
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-once="true"
          href="#"
          className="pry-btn btn-base "
        >
          Donate
        </Link>
      </div>
    </section>
  );
}

export default Involved;
