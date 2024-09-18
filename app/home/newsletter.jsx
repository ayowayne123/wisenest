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
      className="container slg:py-[100px] lg:py-[150px] md:py-20"
      id="contact"
    >
      <div>
        <Toaster />
      </div>
      <h2>Stay Informed, Stay Inspired</h2>
      <p className="mx-auto leading-loose slg:text-xl lg:w-[992px] slg:w-[850px] md:w-[650px] text-center my-5">
        Subscribe to our newsletter and be the first to hear about our latest
        initiatives, success stories, and ways you can make a difference in the
        lives of teenage moms. Together, we can create lasting change.
      </p>
      {/* Newsletter form */}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center gap-5 items-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-12 py-5 border-[0.5px] border-black rounded-2xl focus:outline-none lg:w-[640px] slg:w-[550px] md:w-[380px]"
          required
        />
        <button
          type="submit"
          className=" bg-wiseNestPink flex font-semibold items-center text-xl justify-center text-white rounded-2xl hover:bg-wiseNestBlueGreen w-[184px] h-[70px]"
        >
          submit
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
