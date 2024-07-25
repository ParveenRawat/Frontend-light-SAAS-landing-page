"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

import Image from "next/image";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts
          </p>
          <motion.img
            style={{
              translateY,
            }}
            src={starImage.src}
            alt="star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <motion.img
            style={{
              translateY,
            }}
            src={springImage.src}
            alt="spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="mt-10 flex justify-center gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
