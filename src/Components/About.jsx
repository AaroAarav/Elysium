import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white flex justify-center items-center pt-30 px-6 py-16">
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center text-center md:text-left">
        
        {/* About Elysium Section */}
        <motion.div 
          className="px-4 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl font-adit mb-6 font-extrabold text-purple-500">
            About <span className="text-pink-500">Elysium</span>
          </h1>
          <p className="text-gray-300 text-base font-kek sm:text-lg leading-relaxed max-w-lg">
            Elysium is a flagship event dedicated to celebrating innovation, technology, and engineering excellence. 
            Organized under IEEE Women in Engineering (WIE), it aims to inspire and empower individuals in STEM 
            through engaging workshops, discussions, and competitions.
          </p>
        </motion.div>

        {/* About IEEE WIE Section */}
        <motion.div 
          className="px-4 flex flex-col items-center md:items-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl font-adit mb-6 font-extrabold text-purple-500">
            About <span className="text-pink-500">IEEE WIE</span>
          </h1>
          <p className="text-gray-300 text-base font-kek sm:text-lg leading-relaxed max-w-lg">
            IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting 
            women engineers and scientists. It inspires young minds worldwide to pursue careers in STEM, fostering 
            an inclusive and diverse engineering community.
          </p>
        </motion.div>

      </div>
      
    </div>
  );
}

export default About;
