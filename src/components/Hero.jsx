import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiRedux } from "react-icons/si";
import Hero1 from "../assets/Hero2.png";

const icons = [
  { Icon: FaReact, top: "12%", left: "13%" }, // Near first vertical line
  { Icon: RiJavascriptFill, top: "5%", left: "52%" }, // Near second horizontal & vertical intersection
  { Icon: FaNodeJs, top: "34%", left: "28%" }, // Left side, slightly off-grid
  { Icon: SiExpress, top: "18%", left: "78%" }, // Centered between second and third vertical
  { Icon: SiMongodb, top: "55%", left: "12%" }, // Near bottom-left grid box
  { Icon: FaGithub, top: "35%", left: "56%" }, // Near bottom-right corner but offset
  { Icon: RiTailwindCssFill, top: "77%", left: "22%" }, // Below the last horizontal line
  { Icon: FaHtml5, top: "59%", left: "45%" }, // Top-left corner, slightly offset
  { Icon: FaCss3Alt, top: "80%", left: "60%" }, // Near bottom-left but offset
  { Icon: SiRedux, top: "57%", left: "80%" }, // Near bottom-right corner for balance
];

function Hero() {
  return (
    <main className="h-[70vh] w-screen px-16 flex items-center justify-center -z-1 sticky -top-24">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 2, type: "spring" }}
        className="w-[60%] space-y-4"
      >
        <p className="text-xl font-[FavoritBookC]">Hi! I'm Govind</p>
        <h1 className="text-6xl font-semibold font-[FavoritBookC]">
          Building Scalable & Engaging Web Experiences
        </h1>
        <h2 className="text-2xl">
          I create modern, high-performing websites with seamless user
          experiences and optimized servers.
        </h2>
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 2, type: "spring" }}
        className="relative flex h-full items-end justify-end ml-auto w-1/3"
      >
        <img src={Hero1} alt="Hero" className="w-full h-auto z-1" />
      </motion.div>

      <div className="w-[80vw] h-[300px] bg-radial from-white/50 via-amber-300/20 to-transparent absolute bottom-20 -translate-x-1/2 translate-y-1/2 left-0 rounded-full blur-[150px]" />
      <div className="w-[40vw] h-[200px] bg-radial from-white/50 via-amber-300/20 to-transparent absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 rounded-full blur-[150px]" />
    </main>
  );
}

export default Hero;
