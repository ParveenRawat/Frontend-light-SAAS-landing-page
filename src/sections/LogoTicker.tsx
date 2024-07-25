"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex flex-none gap-14 pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration:20 ,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            ></Image>
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            ></Image>
            <Image
              src={echoLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            ></Image>
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            ></Image>
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            ></Image>
            {/* Second Set Of Logos */}
            <Image
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            ></Image>
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            ></Image>
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            ></Image>
            <Image
              src={echoLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            ></Image>
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            ></Image>
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            ></Image>
            <Image
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            ></Image>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
