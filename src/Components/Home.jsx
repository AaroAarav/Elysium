import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "src/Components/photos/e1.jpg",
  "src/Components/photos/e2.jpg",
  "src/Components/photos/e3.jpg",
  "src/Components/photos/e4.jpg",
  "src/Components/photos/e5.jpg",
  "src/Components/photos/e6.jpg",
];

const IMAGES_PER_SLIDE = 3; // Number of images displayed at once

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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(slideTimer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - IMAGES_PER_SLIDE : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - IMAGES_PER_SLIDE ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center justify-center bg-black bg-gradient-to-b from-black via-purple-950 to-black">
    
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
            <h2 className="text-4xl font-bold text-purple-400">
              Event Starts In:
            </h2>
            <motion.p
              className="text-5xl text-white font-mono"
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

      <div className="w-full max-w-4xl mx-auto py-20 relative">
        <h2 className="text-3xl text-center text-purple-400 font-bold mb-5">
          Past <span className="text-pink-500">Events</span>
        </h2>

        <div className="relative w-full overflow-hidden">
          
          <div className="flex items-center">
            
            <button
              className="absolute left-4 z-10 bg-black/50 p-2 rounded-full"
              onClick={goToPrevious}
            >
              <ChevronLeft className="text-white w-8 h-8" />
            </button>

            <div className="overflow-hidden w-full">
              <motion.div
                className="flex gap-4"
                initial={{ x: 0 }}
                animate={{ x: -currentIndex * (100 / IMAGES_PER_SLIDE) + "%" }}
                transition={{ duration: 0.5 }}
                style={{
                  width: `${(images.length / IMAGES_PER_SLIDE) * 100}%`,
                  display: "flex",
                }}
              >
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="w-1/3 flex-shrink-0"
                    style={{ flex: `0 0 ${100 / IMAGES_PER_SLIDE}%` }}
                  >
                    <img
                      src={img}
                      alt={`slide-${index}`}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            
            <button
              className="absolute right-4 z-10 bg-black/50 p-2 rounded-full"
              onClick={goToNext}
            >
              <ChevronRight className="text-white w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
