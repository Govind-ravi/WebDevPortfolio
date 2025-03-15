import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

import {
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiSendgrid,
  SiRazorpay,
  SiPostman,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiGodaddy,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  {
    category: "Frontend",
    tools: [
      {
        name: "React.js",
        icon: <FaReact className="text-blue-500" />,
        description: "A JavaScript library for building user interfaces.",
        highlight: "My go-to for building modern UIs.",
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-500" />,
        description: "State management for scalable applications.",
        highlight: "Used for handling complex app state.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
        description: "Utility-first CSS framework for rapid UI design.",
        highlight: "My preferred way to style applications.",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer className="text-pink-500" />,
        description: "Animation library for React applications.",
        highlight: "Brings smooth animations to my projects.",
      },
      {
        name: "HTML",
        icon: <SiHtml5 className="text-orange-500" />,
        description: "The standard markup language for web pages.",
        highlight: "The foundation of every website.",
      },
      {
        name: "CSS",
        icon: <SiCss3 className="text-blue-600" />,
        description: "Stylesheet language for designing web pages.",
        highlight: "Essential for crafting beautiful UIs.",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-500" />,
        description: "The programming language of the web.",
        highlight: "Core of all frontend & backend development.",
      },
    ],
  },
  {
    category: "Backend",
    tools: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500" />,
        description: "JavaScript runtime for server-side applications.",
        highlight: "Handles my backend logic and APIs.",
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-400" />,
        description: "Minimalist web framework for Node.js.",
        highlight: "Used for building REST APIs efficiently.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600" />,
        description: "NoSQL database for modern web applications.",
        highlight: "Preferred database for handling structured data.",
      },
      {
        name: "SendGrid",
        icon: <SiSendgrid className="text-blue-500" />,
        description: "Email API for sending transactional emails.",
        highlight: "Used for handling email notifications.",
      },
      {
        name: "Razorpay",
        icon: <SiRazorpay className="text-indigo-500" />,
        description: "Payment gateway for secure transactions.",
        highlight: "Enables payment processing in my apps.",
      },
    ],
  },
  {
    category: "DevOps & Tools",
    tools: [
      {
        name: "Git & GitHub",
        icon: <FaGitAlt className="text-orange-500" />,
        description: "Version control system for managing code.",
        highlight: "Essential for collaboration and code management.",
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-red-500" />,
        description: "API testing and development tool.",
        highlight: "Used for debugging and testing APIs.",
      },
      {
        name: "VS Code",
        icon: <BiLogoVisualStudio className="text-blue-500" />,
        description: "Popular code editor for developers.",
        highlight: "My primary code editor of choice.",
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-500" />,
        description: "Cloud service for authentication & storage.",
        highlight: "Used for Google Auth & image storage.",
      },
      {
        name: "Vercel",
        icon: <SiVercel className="bg-black text-white p-2 rounded-full" />,
        description: "Cloud platform for frontend deployments.",
        highlight: "My preferred choice for React & Next.js hosting.",
      },
      {
        name: "Netlify",
        icon: <SiNetlify className="text-green-500" />,
        description: "Deploys static sites and serverless functions.",
        highlight: "Great for frontend hosting & quick deploys.",
      },
      {
        name: "GoDaddy",
        icon: <SiGodaddy className="text-orange-600" />,
        description: "Domain registration and hosting service.",
        highlight: "Used for managing domains & hosting.",
      },
    ],
  },
  {
    category: "Currently Learning",
    tools: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-700" />,
        description:
          "A strongly typed programming language built on JavaScript.",
        highlight: "Improving type safety in my projects.",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-gray-400" />,
        description:
          "A React framework for server-side rendering and static site generation.",
        highlight: "Exploring SSR & API optimizations.",
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="text-pink-500" />,
        description:
          "A query language for APIs that enables flexible data fetching.",
        highlight: "Learning efficient data fetching techniques.",
      },
    ],
  },
];

function ToolsSection() {
  return (
    <section className="relative pt-32 z-20 bg-gradient-to-t from-body-bg via-body-bg via-[99%] to-transparent">
      <div className="">
        {skills.map((category, i) => (
          <div
            key={i}
            className="sticky max-h-screen py-16 flex flex-col items-center justify-center bottom-0 bg-gradient-to-t from-transparent via-body-bg/90 via-[10%] to-body-bg"
            style={{ zIndex: skills.length - (i + 1) }}
          >
            <h1 className="text-4xl font-semibold font-[FavoritBookC] text-center bg-body-bg py-1">
              {category.category}
            </h1>
            <div className="card flex flex-wrap gap-16 w-full justify-center">
              {category.tools.map((tool, j) => (
                <motion.div
                  key={j}
                  viewport={{ once: true, amount: 0.3 }}
                  initial={{ opacity: 0, translateZ: 50, scale: 1.1 }}
                  whileInView={{
                    opacity: 1,
                    translateZ: 0,
                    scale: 1,
                    transition: { duration: 0.5, delay: 0 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "-10px 10px 50px rgba(255,255,255,0.9)",
                    transition: { duration: 0.1, ease: "linear" },
                  }}
                  className="w-[300px] h-[250px] pointer-events-auto rounded-xl"
                  style={{ transform: "preserve-3d" }}
                >
                  <motion.div className="group w-full h-full bg-[#fffbfb] z-10 relative rounded-xl shadow-lg flex flex-col items-center justify-center text-black text-4xl font-bold transform cursor-pointer">
                    <div className="flex items-center justify-center gap-1">
                      {tool.icon}
                      {tool.name}
                    </div>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:top-2/3 -z-1 opacity-0 group-hover:opacity-100 w-full px-2 text-base text-center transition-all duration-200">
                      {tool.description}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ToolsSection;
