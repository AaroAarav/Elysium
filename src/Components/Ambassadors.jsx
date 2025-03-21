import React from "react";
import { motion } from "framer-motion";

function Ambassadors() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white flex flex-col items-center justify-center px-6 py-12">
      
      <h1 className="text-3xl sm:text-5xl font-bold text-purple-500 mb-6 text-center">
        Community <span className="text-pink-500">Partnership</span>
      </h1>

      <motion.p 
        className="text-gray-300 text-sm sm:text-lg leading-relaxed max-w-2xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Join us as a <span className="text-pink-400 font-semibold">Community Partner</span> at 
        <span className="text-purple-400 font-semibold"> Elysium 2025</span>, organized by IEEE WIE, Manipal University Jaipur.  
        Gain <span className="font-bold">recognition, exclusive access, and networking opportunities</span> at one of India’s largest tech events.
      </motion.p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center max-w-3xl">
        <div className="bg-white/10 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-400">🎖️ Recognition</h3>
          <p className="text-gray-400 text-sm">Your logo on our platforms & event promotions.</p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-pink-400">🤝 Networking</h3>
          <p className="text-gray-400 text-sm">Connect with students, professionals & industry leaders.</p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-400">📌 Visibility</h3>
          <p className="text-gray-400 text-sm">Showcase your community to 25,000+ attendees.</p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-400">🚀 Exclusive Access</h3>
          <p className="text-gray-400 text-sm">Attend workshops, competitions & speaker sessions.</p>
        </div>
      </div>

      {/* Button */}
      <motion.a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSevK02WwwXT93UJiP5KpHneWjxMO-1Gzd2ok33zVFDZ_LsLWw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block mt-6 px-6 py-2 text-xs sm:text-sm font-semibold text-white uppercase rounded-md 
                   transition-all duration-300 transform hover:scale-105 
                   border-2 border-transparent bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 
                   shadow-[0_0_8px_#3b82f6,0_0_15px_#a855f7,0_0_20px_#ec4899] 
                   hover:shadow-[0_0_10px_#3b82f6,0_0_20px_#a855f7,0_0_25px_#ec4899] 
                   neon-box animate-pulse"
      >
        Apply Now
      </motion.a>

    </div>
  );
}

export default Ambassadors;
