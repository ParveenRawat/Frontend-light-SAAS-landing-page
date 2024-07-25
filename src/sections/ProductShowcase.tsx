"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional and responsive
            Saas website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            alt="Product Image"
            className="mt-10"
          ></Image>
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            height={248}
            width={248}
            className="absolute -left-36 bottom-24 hidden md:block"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
