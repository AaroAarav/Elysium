import React from "react";
import { motion } from "framer-motion";

const seniors = [
  {
    id: 1,
    name: "Ananta Taneja",
    desigantion:"Chairperson",
    image: "/images/tech-conference.jpg",
   
  },
  {
    id: 2,
    name: "Saumya Gupta",
    desigantion:"Vice-Chairperson",
    image: "/images/startup-pitch.jpg",
   
  },
  {
    id: 3,
    name: "Shivangi Singh",
    desigantion:"Human Resource Director",
    image: "/images/ai-ml-summit.jpg",
    
  },
];

function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center py-10 justify-center relative overflow-hidden">
      <h1 className="text-5xl mb-10 py-10 text-center text-purple-500 font-bold">
        Our Team
      </h1>
      <div className="flex justify-center items-center gap-20">
        {seniors.map((ppl, index) => (
          <motion.div 
            key={ppl.id} 
            className="bg-gray-900 p-5 w-50 max-h-100 min-h-100 rounded-lg shadow-lg border border-purple-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={ppl.image}
              alt={ppl.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-3 text-purple-400">
              {ppl.name}
            </h2>
            <h2 className="text-l font-semibold mt-3 text-purple-100">
              {ppl.desigantion}
            </h2>
            <p className="text-gray-300 mt-2">{ppl.description}</p>
            <button className="mt-4 w-full p-2 bg-purple-800 text-white rounded hover:bg-purple-600">
              Contact Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
