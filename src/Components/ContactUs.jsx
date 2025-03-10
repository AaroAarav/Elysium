import React from "react";
import { motion } from "framer-motion";

const seniors = [
  {
    id: 1,
    name: "Ananta Taneja",
    desigantion:"Chairperson",
    ph:"+91 95999 28296"
   
  },
  {
    id: 2,
    name: "Saumya Gupta",
    desigantion:"Vice-Chairperson",
    ph:"+91 96671 84740"
   
  },
  {
    id: 3,
    name: "Shivangi Singh",
    desigantion:"Human Resource Director",
    ph:"+91 95990 44965"
    
  },
];

function ContactUs() {
  return (
    <div 
  className="w-full min-h-screen text-white flex flex-col items-center py-10 justify-center relative overflow-hidden 
             bg-gradient-to-b from-black via-purple-950 to-black"
>

      <h1 className="text-5xl mb-10 py-10 text-center text-purple-500 font-bold">
        Our <span className="text-pink-500">Team</span>
      </h1>
      <div className="flex justify-center items-center gap-20">
        {seniors.map((ppl, index) => (
          <motion.div 
            key={ppl.id} 
            className="bg-gray-900 p-5 text-center w-50 max-h-100 min-h-50 rounded-lg shadow-lg border border-purple-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mt-3 text-purple-400">
              {ppl.name}
            </h2>
            <h2 className="text-l font-semibold mt-3 text-purple-100">
              {ppl.desigantion}
            </h2>
            <h2 className="text-l font-semibold mt-3 text-purple-100">
              {ppl.ph}
            </h2>
          
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
