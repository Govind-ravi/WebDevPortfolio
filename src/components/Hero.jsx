import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaLongArrowAltRight } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";

const icons = [
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiExpress, name: "Express" },
  { Icon: RiReactjsLine, name: "React" },
  { Icon: FaNodeJs, name: "Node.js" },
];

function Hero() {
  return (
    <main className="h-[70vh] w-screen px-16 flex items-center sticky -top-24 ">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 2, type: "spring" }}
        className="w-[60%] space-y-8"
      >
        <div className="space-y-2">
          <p className="text-xl font-[FavoritBookC]">Hi! I'm Govind</p>
          <h1 className="text-6xl font-semibold font-[FavoritBookC]">
            Building Scalable & Engaging Web Experiences
          </h1>
          <h2 className="text-2xl">
            I create modern, high-performing websites with seamless user
            experiences and optimized servers.
          </h2>
        </div>
        <div className="flex gap-12">
          {icons.map((Icon, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-4xl font-[FavoritHeavyC] text-white/50 hover:text-white cursor-default transition-all"
            >
              <Icon.Icon />
              {Icon.name}
            </div>
          ))}
        </div>
        <motion.div className="relative group flex items-center gap-2 w-fit font-[FavoritBookC] px-4 py-2 runded bg-white/20 rounded-lg cursor-pointer overflow-hidden">
          See my works
          <FaLongArrowAltRight />
          <div className="absolute top-0 left-0 h-full w-0 group-hover:w-full bg-gradient-to-r from-white/20 via-transparent to-transparent transition-all duration-200 rounded-r-full group-hover:rounded-r-none" />
        </motion.div>
      </motion.div>

      <div className="w-[80vw] h-[300px] bg-radial from-white/50 via-amber-300/20 to-transparent absolute bottom-20 -translate-x-1/2 translate-y-1/2 left-0 rounded-full blur-[150px] -z-1" />
      <div className="w-[40vw] h-[200px] bg-radial from-white/50 via-amber-300/20 to-transparent absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 rounded-full blur-[150px] -z-1" />
    </main>
  );
}

export default Hero;
