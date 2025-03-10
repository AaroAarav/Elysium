import React from "react";
import { motion } from "framer-motion";

const events = [
  
  {
    id: 2,
    title: "TechEden: A Premier Tech Symposium",
    image: "/images/startup-pitch.jpg",
    description: "A dynamic gathering of industry leaders and tech enthusiasts, diving into the latest trends in Al, blockchain, and cutting-edge innovations that are shaping tomorrow.",
  },
  {
    id: 3,
    title: "NextTech: Computing Session",
    image: "/images/ai-ml-summit.jpg",
    description: "Discover the future of computing with quantum technologies and photonics, and explore their power to solve today's most pressing challenges.",
  },
  {
    id: 4,
    title: "FutureSync: Drone Building and Robotics Session",
    image: "/images/blockchain-expo.jpg",
    description: "A hands-on workshop where participants get to design and build drones and robotics, applying creativity and problem-solving to real-world challenges.",
  },
  {
    id: 5,
    title: "DataPulse: Mock Quant Datathon",
    image: "/images/cybersecurity-forum.jpg",
    description: "An intense, high-energy datathon where participants analyze real-world datasets, applying quantitative methods to tackle complex financial and analytical challenges.",
  },
  {
    id: 6,
    title: "Binary Bloom: Web3 Development Indulgence",
    image: "/images/women-in-tech.jpg",
    description: "Delve into the world of blockchain and Web3, learning to create decentralized solutions that are set to transform industries and everyday life.",
  },
  {
    id: 7,
    title: "Pandora: AR/VR Workshop for Innovators",
    image: "/images/esports-championship.jpg",
    description: "Step into the immersive world of AR/VR, where participants will create and experiment with technologies that are reshaping industries and experiences.",
  },
  {
    id: 8,
    title: "Artemis: Mental Health Check-In",
    image: "/images/vr-ar.jpg",
    description: "An empowering session dedicated to mental wellness, offering tools and strategies to manage stress, build resilience, and maintain balance in today's fast-paced world. ",
  },
  {
    id: 9,
    title: "HardWired",
    image: "/images/vr-ar.jpg",
    description: "A creative competition that challenges participants to design innovative, practical projects using Arduino, pushing the boundaries of technology and hands-on development.",
  },
];

function Events() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center py-10 justify-center relative overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      <h1 className="text-5xl mb-10 py-10 text-center text-purple-500 font-bold">
        Upcoming <span className="text-pink-500">Events</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-3/4">
        {events.map((event, index) => (
          <motion.div 
            key={event.id} 
            className="bg-gray-900 p-5 rounded-lg text-center shadow-lg border border-purple-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-3 text-purple-400">
              {event.title}
            </h2>
            <p className="text-gray-300 mt-2">{event.description}</p>
            <button className="mt-4 w-full p-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              Register Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Events;
