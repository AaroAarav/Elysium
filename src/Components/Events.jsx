import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Tech Conference 2025",
    image: "/images/tech-conference.jpg",
    description: "Join industry leaders to discuss the latest in technology.",
  },
  {
    id: 2,
    title: "Startup Pitch Night",
    image: "/images/startup-pitch.jpg",
    description: "Watch emerging startups pitch their ideas to investors.",
  },
  {
    id: 3,
    title: "AI & ML Summit",
    image: "/images/ai-ml-summit.jpg",
    description: "Explore advancements in artificial intelligence and machine learning.",
  },
  {
    id: 4,
    title: "Blockchain Expo",
    image: "/images/blockchain-expo.jpg",
    description: "Learn about the future of decentralized finance and Web3.",
  },
  {
    id: 5,
    title: "Cybersecurity Forum",
    image: "/images/cybersecurity-forum.jpg",
    description: "Stay updated on the latest trends in cybersecurity.",
  },
  {
    id: 6,
    title: "Women in Tech Summit",
    image: "/images/women-in-tech.jpg",
    description: "Empowering women in the technology industry.",
  },
  {
    id: 7,
    title: "E-Sports Championship",
    image: "/images/esports-championship.jpg",
    description: "Witness the top gamers compete in an intense battle.",
  },
  {
    id: 8,
    title: "VR & AR Innovations",
    image: "/images/vr-ar.jpg",
    description: "Experience the latest in virtual and augmented reality.",
  },
];

function Events() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center py-10 justify-center relative overflow-hidden">
      <h1 className="text-5xl mb-10 py-10 text-center text-purple-500 font-bold">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-3/4">
        {events.map((event, index) => (
          <motion.div 
            key={event.id} 
            className="bg-gray-900 p-5 rounded-lg shadow-lg border border-purple-500"
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
