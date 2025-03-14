import React from "react";
import Her1 from "../assets/Hero1.png";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="relative z-20 px-16 h-[100vh] bg-gradient-to-t from-body-bg via-body-bg via-90% to-transparent flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 space-y-6"
      >
        <h1 className="text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-white via-10% hover:via-90% to-white/50 transition-all">
          Who I Am
        </h1>
        <p className="text-xl text-white/80 leading-relaxed">
          I’m not just a developer—I’m a digital architect, turning ideas into
          immersive web experiences. Every line of code I write is a step toward
          crafting seamless, powerful, and user-first applications that redefine
          expectations.
        </p>
        <p className="text-lg text-white/60 italic">
          "I believe technology isn’t just about functionality—it’s about
          creating something that inspires."
        </p>
        <motion.button
          whileHover={{
            skewX: -5,
            skewY: 1,
            boxShadow: "5px 5px 10px rgba(255, 255, 255, 0.3)",
          }}
          transition={{ duration: 0.5 }}
          className="relative text-white bg-white/10 px-6 py-3 rounded-lg font-semibold overflow-hidden cursor-pointer"
        >
          Read More
          <div className="absolute inset-0 w-0 bg-blue-400/20 rounded-lg transition-all duration-300 group-hover:w-full"></div>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 flex justify-center"
      >
        <img
          src={Her1}
          alt="Hero"
          className="w-[400px] h-[400px] object-cover rounded-xl border-[10px] border-gray-700 shadow-xl hover:shadow-white/30 transition-all duration-300"
        />
      </motion.div>
    </section>
  );
}

export default AboutSection;
