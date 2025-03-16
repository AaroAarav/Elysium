import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const images = ["/e1.jpg", "/e2.jpg", "/e3.jpg", "/e4.jpg", "/e5.jpg", "/e6.jpg"];

const IMAGES_PER_SLIDE = 3;

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
    <div className="w-full min-h-screen text-white flex flex-col items-center justify-center bg-cover bg-center relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-1"
      >
        <source src="vid.mp4" type="video/mp4" />
      </video>

      <div className="w-full flex flex-col items-center justify-center text-center py-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-extrabold text-white my-10"
        >
          <h2 className="text-purple-400 text-lg md:text-xl font-bold py-5">
            IEEE WIE PRESENTS
          </h2>
          <span className="relative text-white bg-black/70 px-4 py-2 rounded-lg glow-effect">
            ELYSIUM
          </span>
        </motion.h1>

        <p className="max-w-3xl text-sm md:text-lg bg-black/70 text-gray-300 mt-5 md:mt-10 px-4 py-2 rounded-lg">
          Empowering Women to Lead, Inspiring Innovation to Thrive, and Shaping a Future of Inclusivity, Creativity, and Excellence in STEM.
        </p>

        <Link to="/events">
          <button
            className="mt-6 px-6 py-3 md:px-8 md:py-4 uppercase font-bold text-white text-sm md:text-lg 
                   bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg 
                   transition-all duration-300 hover:scale-105 hover:brightness-125"
          >
            Register Now
          </button>
        </Link>
      </div>

      {/* Stats  */}
      <div className="w-full flex flex-wrap justify-center gap-6 bg-black/70 p-6 md:p-10 rounded-lg">
        <div className="border border-purple-400 p-6 md:p-10 rounded-lg text-center">
          <h3 className="text-3xl md:text-4xl font-semibold">6+</h3>
          <p className="text-sm md:text-base">Workshops covering AI, blockchain, and more.</p>
        </div>
        <div className="border border-blue-400 p-6 md:p-10 rounded-lg text-center">
          <h3 className="text-3xl md:text-4xl font-semibold">2000+</h3>
          <p className="text-sm md:text-base">Social Media Interactions amplifying our message.</p>
        </div>
        <div className="border border-pink-400 p-6 md:p-10 rounded-lg text-center">
          <h3 className="text-3xl md:text-4xl font-semibold">30%</h3>
          <p className="text-sm md:text-base">New Participants reflecting diverse talent.</p>
        </div>
      </div>

      {/* Past Events */}
      <div className="w-full max-w-4xl mx-auto py-20 relative px-4">
        <div className="border border-purple-400 p-6 md:p-10 rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl text-center text-purple-400 font-bold mb-6">
            Past <span className="text-pink-500">Events</span>
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center">
              <button className="absolute left-2 md:left-4 bg-black/70 p-2 md:p-4 rounded-full" onClick={goToPrevious}>
                <ChevronLeft className="text-white w-6 md:w-10 h-6 md:h-10" />
              </button>
              <div className="overflow-hidden w-full">
                <motion.div
                  className="flex gap-4 md:gap-10"
                  initial={{ x: 0 }}
                  animate={{
                    x: -currentIndex * (100 / IMAGES_PER_SLIDE) + "%",
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: `${(images.length / IMAGES_PER_SLIDE) * 100}%`,
                    display: "flex",
                  }}
                >
                  {images.map((img, index) => (
                    <div key={index} className="w-1/3 flex-shrink-0" style={{ flex: `0 0 ${100 / IMAGES_PER_SLIDE}%` }}>
                      <img src={img} alt={`slide-${index}`} className="w-full h-40 md:h-96 object-cover rounded-lg shadow-lg" />
                    </div>
                  ))}
                </motion.div>
              </div>
              <button className="absolute right-2 md:right-4 bg-black/50 p-2 md:p-4 rounded-full" onClick={goToNext}>
                <ChevronRight className="text-white w-6 md:w-10 h-6 md:h-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
