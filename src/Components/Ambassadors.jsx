import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="w-full min-h-screen bg-black bg-gradient-to-b from-black via-purple-950 to-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      <h1 className="text-5xl mb-10 text-center text-purple-500 font-bold">Campus <span className="text-pink-500">Ambassadors</span></h1>
      <motion.p 
        className="text-gray-300 w-3/4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Elysium is a premier event bringing together innovators, leaders, and visionaries in technology. We aim to foster creativity, inclusivity, and excellence in STEM fields.
      </motion.p>
    </div>
  );
}

export default About;
