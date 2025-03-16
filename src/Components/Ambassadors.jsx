import React from "react";
import { motion } from "framer-motion";

function Ambassadors() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white flex flex-col items-center justify-center px-6 py-12">
      
  
      <h1 className="text-3xl sm:text-5xl font-bold text-purple-500 mb-6 text-center">
        Campus <span className="text-pink-500">Ambassadors</span>
      </h1>

      <motion.p 
        className="text-gray-300 text-sm sm:text-lg leading-relaxed max-w-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Elysium is a premier event bringing together innovators, leaders, and visionaries in technology. 
        We aim to foster creativity, inclusivity, and excellence in STEM fields.
      </motion.p>
      
    </div>
  );
}

export default Ambassadors;
