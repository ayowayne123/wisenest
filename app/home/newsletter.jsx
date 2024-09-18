"use client";
import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to handle the newsletter submission,
    // such as sending the email to your backend or API.
    console.log("Email submitted:", email);
    setEmail("");
  };
  return (
    <section className="container lg:py-[150px]">
      <h2>Stay Informed, Stay Inspired</h2>
      <p className="mx-auto leading-loose slg:text-xl lg:w-[992px] slg:w-[850px] md:w-[650px] text-center my-5">
        Subscribe to our newsletter and be the first to hear about our latest
        initiatives, success stories, and ways you can make a difference in the
        lives of teenage moms. Together, we can create lasting change.
      </p>
    </section>
  );
}

export default Newsletter;
