import React from "react";
import Her1 from "../assets/Hero1.png";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="sticky -top-24 pt-24 z-20 px-16 h-[100vh] bg-gradient-to-t from-body-bg via-body-bg via-90% to-transparent flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-1/2 space-y-4 text-lg"
      >
        {/* <h1 className="text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-white via-10% hover:via-90% to-white/50 transition-all">
          Who I Am
        </h1> */}
        <p className="text-white/50 text-xl">
          "Great software isn’t just written—it’s crafted, debugged, and
          optimized like a fine piece of art."
        </p>
        <p>
          Every well-built application is a mix of logic, creativity, and a
          constant drive for improvement. I thrive in that intersection. At
          Hashtocolon, I work on developing dynamic web applications, refining
          backend logic, and optimizing performance to ensure smooth, seamless
          user experiences. Whether it’s crafting an elegant UI or structuring
          an API for efficiency, I believe every line of code has a story to
          tell.
        </p>
        <p>
          My toolkit? A fine balance of React for interactive UIs, Node.js &
          Express for scalable backend systems, and MongoDB to handle data with
          flexibility. Pair that with a keen eye for performance optimization,
          state management, and clean architecture, and you get code that isn’t
          just functional—it’s built to last.
        </p>
        <p>
          Technology evolves, and so do the possibilities. The real challenge?
          Writing better code than yesterday.
        </p>
        <motion.button
          whileHover={{
            skewX: -5,
            skewY: 1,
            boxShadow: "5px 5px 10px rgba(255, 255, 255, 0.3)",
          }}
          transition={{ duration: 0.5 }}
          className="relative text-white bg-white/10 px-6 py-3 rounded-lg font-semibold overflow-hidden cursor-pointer text-sm"
        >
          Read More
          <div className="absolute inset-0 w-0 bg-blue-400/20 rounded-lg transition-all duration-300 group-hover:w-full "></div>
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true, amount: 0.1 }}
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
