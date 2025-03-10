import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Home() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-04-04T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden bg-black bg-gradient-to-b from-black via-purple-950 to-black bg-cover bg-center"

    >
      <div className="w-full flex flex-col items-center justify-center text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-8xl font-extrabold text-white"
        >
          <h2 className="text-purple-400 text-xl font-bold">
            IEEE WIE PRESENTS
          </h2>
          ELYSIUM
          <p className="max-w-3xl text-lg text-gray-300 mt-5">
            Empowering Women to Lead, Inspiring Innovation to Thrive, and
            Shaping a Future of Inclusivity, Creativity, and Excellence in STEM.
          </p>
        </motion.h1>
      </div>

      
      <div className="w-full flex justify-center py-20">
        <div className="flex gap-10">
          <div className="border border-purple-400 p-5 rounded-lg text-center">
            <h3 className="text-xl text-white font-semibold">6+</h3>
            <p className="text-gray-400">
              Workshops & Sessions covering AI, blockchain, and more.
            </p>
          </div>
          <div className="border border-blue-400 p-5 rounded-lg text-center">
            <h3 className="text-xl text-white font-semibold">2000+</h3>
            <p className="text-gray-400">
              Social Media Interactions amplifying our message.
            </p>
          </div>
          <div className="border border-pink-400 p-5 rounded-lg text-center">
            <h3 className="text-xl text-white font-semibold">30%</h3>
            <p className="text-gray-400">
              New Participants reflecting diverse talent.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center py-20">
        {Object.keys(timeLeft).length > 0 ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold text-purple-400">
              Event Starts In:
            </h2>
            <motion.p
              className="text-xl text-white font-mono"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </motion.p>
          </motion.div>
        ) : (
          <h2 className="text-2xl font-bold text-red-500">
            The event has started!
          </h2>
        )}
      </div>

      
    </div>
  );
}

export default Home;
