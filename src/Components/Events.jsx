import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 2,
    title: "TechEden: A Premier Tech Symposium",
    image: "/techeden.jpg",
    date: "April 4, 2025",
    time: "11:30 AM - 2:30 PM",
    description:
      "A dynamic gathering of industry leaders and tech enthusiasts, diving into the latest trends in AI, blockchain, and cutting-edge innovations shaping tomorrow.",
  },
  {
    id: 3,
    title: "NextTech: Computing Session",
    image: "/nexttech.jpg",
    date: "April 4, 2025",
    time: "3:00 AM - 4:30 PM",
    description:
      "Discover the future of computing with quantum technologies and photonics, and explore their power to solve today's most pressing challenges.",
  },
  {
    id: 4,
    title: "FutureSync: Drone Building and Robotics Session",
    image: "/futuresync.jpg",
    date: "April 4, 2025",
    time: "4:30 PM - 6:00 PM",
    description:
      "A hands-on workshop where participants design and build drones and robotics, applying creativity and problem-solving to real-world challenges.",
  },
  {
    id: 5,
    title: "DataPulse: Mock Quant Datathon",
    image: "/datapulse.jpg",
    date: "April 4/5, 2025",
    time: "9:00 PM(4) - 6:00 AM(5)",
    description:
      "An intense, high-energy datathon where participants analyze real-world datasets, applying quantitative methods to tackle complex challenges.",
  },
  {
    id: 6,
    title: "Binary Bloom: Web3 Development Indulgence",
    image: "/Binary Bloom.jpg",
    date: "April 5, 2025",
    time: "10:00 AM - 11:30 AM",
    description:
      "Delve into blockchain and Web3, learning to create decentralized solutions that are set to transform industries and everyday life.",
  },
  {
    id: 7,
    title: "Pandora: AR/VR Workshop for Innovators",
    image: "/pandora.jpg",
    date: "April 5, 2025",
    time: "12:00 AM - 2:00 PM",
    description:
      "Step into the immersive world of AR/VR, where participants will create and experiment with technologies reshaping industries and experiences.",
  },
  {
    id: 8,
    title: "Artemis: Mental Health Check-In",
    image: "/artemis.jpg",
    date: "April 5, 2025",
    time: "2:30 PM - 3:30 PM",
    description:
      "An empowering session dedicated to mental wellness, offering tools and strategies to manage stress, build resilience, and maintain balance in today's fast-paced world.",
  },
  {
    id: 9,
    title: "HardWired",
    image: "/hardwired.jpg",
    date: "April 5, 2025",
    time: "4:00 PM - 6:00 PM",
    description:
      "A creative competition that challenges participants to design innovative, practical projects using Arduino, pushing the boundaries of technology and hands-on development.",
  },
];

function Events() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center pt-30 sm:pt-35 lg:pt-20 lg:pl-35 pb-32 relative overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      <h1 className="text-4xl sm:text-5xl font-adit mb-10 text-center text-purple-500">
        Upcoming <span className="text-pink-500">Events</span>
      </h1>
      

      <div className="grid pt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] max-w-7xl">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="bg-gray-900 p-5 rounded-lg text-center shadow-lg border border-purple-500 transition-transform transform hover:scale-105 flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-110 sm:h-90 md:h-90 object-cover rounded-md"
            />
            <h2 className="text-lg sm:text-xl font-semibold font-kek mt-3 text-purple-400">
              {event.title}
            </h2>
            <p className="text-gray-400 text-sm font-kek sm:text-base mt-1">
              📅 {event.date} | ⏰ {event.time}
            </p>
            <p className="text-gray-300 mt-2 text-sm font-kek sm:text-base flex-grow">
              {event.description}
            </p>
           
          </motion.div>
        ))}
      </div>
      <button
              className="relative px-4 py-2 uppercase font-semibold text-xs md:text-sm 
              text-white rounded-md transition-all duration-300 transform hover:scale-105 
              border-2 border-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 
              shadow-[0_0_8px_#3b82f6,0_0_15px_#a855f7,0_0_20px_#ec4899] 
              hover:shadow-[0_0_10px_#3b82f6,0_0_20px_#a855f7,0_0_25px_#ec4899] 
              neon-box font-neon animate-pulse mt-10"
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSebXiZyDrqS502hoapDiWwvDw3R-TQPozkO8-LNeYwdLbbLNw/viewform?usp=send_form" target="_blank">Register Now</a>
            </button>
    </div>
  );
}

export default Events;
