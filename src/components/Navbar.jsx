import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About me", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Learnings", link: "/learnings" },
  { name: "Contact me", link: "/contact" },
];

function Navbar() {
  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 2, type: "spring" }}
      className="px-16 py-8 flex justify-between items-center"
    >
      {/* Logo */}
      <div className="">
        <svg
          width="76"
          height="50"
          viewBox="0 0 76 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.872 87.464C55.0187 86.3547 54.08 85.3307 53.056 84.392C52.032 83.368 50.9227 82.472 49.728 81.704C47.5947 84.0933 44.864 86.1413 41.536 87.848C38.2933 89.4693 34.624 90.28 30.528 90.28C23.5307 90.28 17.6853 88.4453 12.992 84.776C8.29867 81.1067 4.97067 76.072 3.008 69.672C1.13067 63.1867 0.832 55.8053 2.112 47.528L3.264 40.104C4.544 31.9973 6.93333 25 10.432 19.112C14.016 13.224 18.5813 8.70133 24.128 5.544C29.6747 2.30133 36.032 0.679993 43.2 0.679993C49.9413 0.679993 55.488 2.00266 59.84 4.64799C64.192 7.208 67.2213 10.5787 68.928 14.76C70.72 18.856 71.0187 23.2507 69.824 27.944L54.208 31.656C56.512 23.0373 56.6827 16.4667 54.72 11.944C52.8427 7.42133 48.9173 5.16 42.944 5.16C37.7387 5.16 33.1307 7.37866 29.12 11.816C25.1093 16.2533 22.2933 23.5493 20.672 33.704L17.472 53.928C14.144 75.176 18.7093 85.8 31.168 85.8C33.8987 85.8 36.672 85.2453 39.488 84.136C42.304 82.9413 44.7787 80.7653 46.912 77.608L49.984 60.328C50.496 57.4267 50.6667 55.6773 50.496 55.08C50.4107 54.4827 49.6853 54.1413 48.32 54.056L38.848 53.16L39.488 49.576H75.84L75.2 53.16L68.032 54.056C66.6667 54.2267 65.7707 54.6107 65.344 55.208C65.0027 55.72 64.576 57.4267 64.064 60.328L59.328 87.464H55.872Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex gap-12 text-xl font-[FavoritHeavyC]">
        {menuItems.map((item, i) => (
          <motion.p
            key={i}
            className="cursor-pointer text-secondary-text/80 hover:text-secondary-text transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {item.name}
          </motion.p>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
