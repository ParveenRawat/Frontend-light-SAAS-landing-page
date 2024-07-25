"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, - 150]);

  // useMotionValueEvent(translateY, 'change', (latestValue) => console.log(latestValue));

  return (
    <section
      ref={heroRef}
      className="overflow-clip overflow-y-visible bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-8 md:pb-10 md:pt-5"
    >
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
              Pathway to productivity
            </h1>
            <p className="mt-6 text-xl tracking-tight text-[#010d3E]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your success.
            </p>
            <div className="mt-[30px] flex items-center gap-1">
              <button className="btn btn-primary">
                <span>Get for free</span>
              </button>
              <button className="btn btn-text">
                <span>Learn more </span>
                <ArrowIcon className="h-5 w-5"></ArrowIcon>
              </button>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <motion.img
              src={cogImage.src}
              alt="Cog Image"
              className="md:absolute md:-left-6 md:h-full md:w-auto md:max-w-none lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImage.src}
              alt="Cylinder Image"
              height={221}
              width={220}
              className="-left-32 -top-6 hidden md:absolute md:block"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="noodle Image"
              height={220}
              width={220}
              className="z-5 absolute left-[448px] top-[524px] hidden rotate-[30deg] lg:block"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
