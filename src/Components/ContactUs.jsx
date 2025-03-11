import React from "react";
import { motion } from "framer-motion";

const seniors = [
  {
    id: 1,
    name: "Ananta Taneja",
    desigantion: "Chairperson",
    ph: "+91 95999 28296",
  },
  {
    id: 2,
    name: "Saumya Gupta",
    desigantion: "Vice-Chairperson",
    ph: "+91 96671 84740",
  },
  {
    id: 3,
    name: "Shivangi Singh",
    desigantion: "Human Resource Director",
    ph: "+91 95990 44965",
  },
  {
    id: 4,
    name: "Gouri Sharma",
    desigantion: "Managing Director",
    ph: "+91 93190 01421",
  },
  {
    id: 5,
    name: "Shashwat Singh",
    desigantion: "General Secretary",
    ph: "+91 77009 88711",
  },
  {
    id: 6,
    name: "Devishi Mahajan",
    desigantion: "Tresurer",
    ph: "+91 99888 25198",
  },
  {
    id: 7,
    name: "Aaranay Aadi",
    desigantion: "Technical Secretary",
    ph: "+91 62904 39695",
  },
];

function ContactUs() {
  return (
    <>
      <div className="w-full  text-white flex flex-col items-center py-10 bg-gradient-to-b from-black via-purple-950 to-black">
        <h1 className="text-7xl mb-10 py-10 text-center text-purple-500 font-bold">
          Our <span className="text-pink-500">Team</span>
        </h1>
        <h1 className="text-5xl mb-10 py-10 text-center text-purple-500 font-bold">
          Conv<span className="text-pink-500">enors</span>
        </h1>

        <div className="max-w-6xl w-full mx-auto flex flex-wrap  justify-center gap-8">
          {seniors.map((ppl, index) => (
            <motion.div
              key={ppl.id}
              className="bg-gray-950 p-5 text-center rounded-lg shadow-lg border border-purple-300 w-64"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold mt-3 text-fuchsia-700">
                {ppl.name}
              </h2>
              <h2 className="text-lg font-semibold mt-1 text-purple-300">
                {ppl.desigantion}
              </h2>
              <h2 className="text-lg font-semibold mt-1 text-purple-100">
                {ppl.ph}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full pb-50 text-white flex flex-col items-center py-10 bg-gradient-to-b from-black via-purple-950 to-black">
        <h1 className="text-5xl mb-10 py-10 text-center text-purple-500 font-bold">
          Dire<span className="text-pink-500">ctors</span>
        </h1>

        <div className="max-w-6xl w-full mx-auto flex flex-wrap justify-center gap-8">
          {seniors.map((ppl, index) => (
            <motion.div
              key={ppl.id}
              className="bg-gray-900 p-5 text-center rounded-lg shadow-lg border border-purple-500 w-64"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold mt-3 text-fuchsia-700">
                {ppl.name}
              </h2>
              <h2 className="text-lg font-semibold mt-1 text-purple-300">
                {ppl.desigantion}
              </h2>
              <h2 className="text-lg font-semibold mt-1 text-purple-100">
                {ppl.ph}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>

    </>
  );
}

export default ContactUs;
