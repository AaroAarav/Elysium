import React from "react";
import { motion } from "framer-motion";

function KeyStats() {
  return (
    <div className="w-full min-h-screen bg-black bg-gradient-to-b from-black via-purple-950 to-black text-white flex items-center justify-center relative overflow-hidden px-6 py-12 pt-32 sm:pt-40">
      
      <motion.div
        className="text-gray-300 w-full max-w-4xl text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl mb-8 text-left font-adit text-purple-500 font-extrabold">
          Elysium 2025: <span className="text-pink-500">Key Stats</span>
        </h1>
        
        <ul className="space-y-6 text-base sm:text-lg text-white">
          <li>
            <span className="font-bold text-white">• 1,000+ Participants</span>
            <br />
            <span className="text-gray-400">A dynamic mix of talented individuals united by a passion for technology and innovation.</span>
          </li>
          <li>
            <span className="font-bold text-white">• 10,000+ Audience</span>
            <br />
            <span className="text-gray-400">A diverse crowd of students, professionals, and tech enthusiasts from across the country.</span>
          </li>
          <li>
            <span className="font-bold text-white">• 80+ Teams Competing</span>
            <br />
            <span className="text-gray-400">Innovative minds collaborating to solve real-world challenges in engineering and technology.</span>
          </li>
          <li>
            <span className="font-bold text-white">• 6 Workshops & Sessions</span>
            <br />
            <span className="text-gray-400">Covering the latest in AI, robotics, blockchain, and other cutting-edge fields.</span>
          </li>
          <li>
            <span className="font-bold text-white">• 2000+ Social Media Interactions</span>
            <br />
            <span className="text-gray-400">Amplifying our message and creating an engaging digital community.</span>
          </li>
          <li>
            <span className="font-bold text-white">• 30% New Participants</span>
            <br />
            <span className="text-gray-400">Emphasizing our commitment to welcoming fresh faces and diverse talent.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default KeyStats;
