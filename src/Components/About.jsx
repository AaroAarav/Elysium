import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      <motion.p 
        className="text-gray-300 w-3/4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      <h1 className="text-5xl mb-10 text-center text-purple-500 font-bold">About <span className="text-pink-500">Elysium</span></h1>
        IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.
        IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
      </motion.p>

      <motion.p 
        className="text-gray-300 w-3/4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      <h1 className="text-5xl mt-6 mb-10 text-center text-purple-500 font-bold">About <span className="text-pink-500">IEEE WIE</span></h1>
        IEEE Women in Engineering (WIE) is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.
        IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
      </motion.p>

    </div>
  );
}

export default About;
