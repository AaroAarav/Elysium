import React from "react";
import { motion } from "framer-motion";

const seniors = [
  { id: 1, name: "Ananta Taneja", designation: "Chairperson", ph: "+91 95999 28296" },
  { id: 2, name: "Saumya Gupta", designation: "Vice-Chairperson", ph: "+91 96671 84740" },
  { id: 3, name: "Shivangi Singh", designation: "Human Resource Director", ph: "+91 95990 44965" },
  { id: 4, name: "Gouri Sharma", designation: "Managing Director", ph: "+91 93190 01421" },
  { id: 5, name: "Shashwat Singh", designation: "General Secretary", ph: "+91 77009 88711" },
  { id: 6, name: "Devishi Mahajan", designation: "Treasurer", ph: "+91 99888 25198" },
  { id: 7, name: "Aaranay Aadi", designation: "Technical Secretary", ph: "+91 62904 39695" },
];

function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white flex flex-col items-center py-10">
      
      
      <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center text-purple-500">
        Our <span className="text-pink-500">Team</span>
      </h1>

      {/* Convenors*/}
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-purple-500">
        Conv<span className="text-pink-500">enors</span>
      </h2>

      <div className="max-w-7xl w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {seniors.map((ppl, index) => (
          <motion.div
            key={ppl.id}
            className={`bg-gray-950 p-6 text-center rounded-lg shadow-lg border border-purple-300 transition-transform transform hover:scale-105 ${
              index === seniors.length - 1 && seniors.length % 3 === 1 ? "lg:col-start-2" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-fuchsia-700">{ppl.name}</h2>
            <h3 className="text-md sm:text-lg font-medium text-purple-300">{ppl.designation}</h3>
            <p className="text-sm sm:text-md text-purple-100">{ppl.ph}</p>
          </motion.div>
        ))}
      </div>

      {/* Directors */}
      <h2 className="text-3xl sm:text-4xl font-bold mt-20 mb-10 text-center text-purple-500">
        Dire<span className="text-pink-500">ctors</span>
      </h2>

      <div className="max-w-7xl w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {seniors.map((ppl, index) => (
          <motion.div
            key={ppl.id}
            className={`bg-gray-900 p-6 text-center rounded-lg shadow-lg border border-purple-500 transition-transform transform hover:scale-105 ${
              index === seniors.length - 1 && seniors.length % 3 === 1 ? "lg:col-start-2" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg sm:text-xl font-semibold text-fuchsia-700">{ppl.name}</h2>
            <h3 className="text-md sm:text-lg font-medium text-purple-300">{ppl.designation}</h3>
            <p className="text-sm sm:text-md text-purple-100">{ppl.ph}</p>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
}

export default ContactUs;
