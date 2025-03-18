import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 2,
    title: "TechEden: A Premier Tech Symposium",
    image: "/techeden.jpg",
    description:
      "A dynamic gathering of industry leaders and tech enthusiasts, diving into the latest trends in AI, blockchain, and cutting-edge innovations shaping tomorrow.",
  },
  {
    id: 3,
    title: "NextTech: Computing Session",
    image: "/nexttech.jpg",
    description:
      "Discover the future of computing with quantum technologies and photonics, and explore their power to solve today's most pressing challenges.",
  },
  {
    id: 4,
    title: "FutureSync: Drone Building and Robotics Session",
    image: "/futuresync.jpg",
    description:
      "A hands-on workshop where participants design and build drones and robotics, applying creativity and problem-solving to real-world challenges.",
  },
  {
    id: 5,
    title: "DataPulse: Mock Quant Datathon",
    image: "/datapulse.jpg",
    description:
      "An intense, high-energy datathon where participants analyze real-world datasets, applying quantitative methods to tackle complex challenges.",
  },
  {
    id: 6,
    title: "Binary Bloom: Web3 Development Indulgence",
    image: "/binarybloom.jpg",
    description:
      "Delve into blockchain and Web3, learning to create decentralized solutions that are set to transform industries and everyday life.",
  },
  {
    id: 7,
    title: "Pandora: AR/VR Workshop for Innovators",
    image: "/pandora.jpg",
    description:
      "Step into the immersive world of AR/VR, where participants will create and experiment with technologies reshaping industries and experiences.",
  },
  {
    id: 8,
    title: "Artemis: Mental Health Check-In",
    image: "/artemis.jpg",
    description:
      "An empowering session dedicated to mental wellness, offering tools and strategies to manage stress, build resilience, and maintain balance in today's fast-paced world.",
  },
  {
    id: 9,
    title: "HardWired",
    image: "/hardwired.jpg",
    description:
      "A creative competition that challenges participants to design innovative, practical projects using Arduino, pushing the boundaries of technology and hands-on development.",
  },
];

function Events() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center pt-24 sm:pt-32 lg:pt-20 lg:pl-35 relative overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      
      <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center text-purple-500">
        Upcoming <span className="text-pink-500">Events</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[90%] max-w-7xl">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="bg-gray-900 p-5 rounded-lg text-center shadow-lg border border-purple-500 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-52 sm:h-60 object-cover rounded-md"
            />
            <h2 className="text-lg sm:text-xl font-semibold mt-3 text-purple-400">
              {event.title}
            </h2>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">{event.description}</p>
            <button className="mt-4 w-full p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all">
              Register Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Events;