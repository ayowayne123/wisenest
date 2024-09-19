"use client";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to handle the newsletter submission,
    // such as sending the email to your backend or API.
    console.log("Email submitted:", email);

    setEmail("");
    toast.success("You have been added to our Newsletter!");
  };
  return (
    <section
      className="container slg:py-[100px] lg:py-[150px] md:py-20 py-[75px]"
      id="contact"
    >
      <div>
        <Toaster />
      </div>
      <h2 className="md:max-w-full max-w-[200px] mx-auto">
        Stay Informed, Stay Inspired
      </h2>
      <p className="mx-auto md:leading-loose slg:text-xl lg:w-[992px] slg:w-[850px] md:w-[650px] text-center my-5 text-sm  md:text-base">
        Subscribe to our newsletter and be the first to hear about our latest
        initiatives, success stories, and ways you can make a difference in the
        lives of teenage moms. Together, we can create lasting change.
      </p>
      {/* Newsletter form */}
      <form
        onSubmit={handleSubmit}
        className="flex md:flex-row flex-col justify-center gap-2 md:gap-5 items-center"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" md:placeholder:text-base placeholder:text-sm slg:px-12 md:px- px-5 md:py-3 py-1 slg:py-5 border-[0.5px] border-black rounded-full md:rounded-2xl focus:outline-none lg:w-[640px] slg:w-[550px] md:w-[380px] w-full"
          required
        />
        <button
          type="submit"
          className="capitalize bg-wiseNestPink flex font-semibold items-center md:text-xl text-sm justify-center text-white rounded-full md:rounded-2xl hover:bg-wiseNestBlueGreen md:w-[184px] md:h-[70px] h-11 w-36"
        >
          submit
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
