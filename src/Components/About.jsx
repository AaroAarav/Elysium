import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white flex flex-col items-center px-4 py-12 pt-32 sm:pt-40">
      
      {/* About Elysium Section */}
      <motion.div 
        className="w-full max-w-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl mb-8 font-extrabold text-purple-500">
          About <span className="text-pink-500">Elysium</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Elysium is a flagship event dedicated to celebrating innovation, technology, and engineering excellence. 
          Organized under IEEE Women in Engineering (WIE), it aims to inspire and empower individuals in STEM 
          through engaging workshops, discussions, and competitions.
        </p>
      </motion.div>

      {/* About IEEE WIE Section */}
      <motion.div 
        className="w-full max-w-2xl text-center mt-20 sm:mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl mb-8 font-extrabold text-purple-500">
          About <span className="text-pink-500">IEEE WIE</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting 
          women engineers and scientists. It inspires young minds worldwide to pursue careers in STEM, fostering 
          an inclusive and diverse engineering community.
        </p>
      </motion.div>

    </div>
  );
}

export default About;
