"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Hero from "./home/hero";
import Mission from "./home/mission";
import Goals from "./home/goals";
import AOS from "aos";
import Impact from "./home/impact";
import Involved from "./home/involved";
import Newsletter from "./home/newsletter";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-hidden">
      <main>
        <Hero />
        <Mission />
        <Goals />
        <Impact />
        <Involved />
        <Newsletter />
      </main>
    </div>
  );
}
