import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Clock,
  Hourglass,
  Timer,
} from "lucide-react";
import { Link } from "react-router-dom";

const images = [
  "/e1.jpg",
  "/e2.jpg",
  "/e3.jpg",
  "/e4.jpg",
  "/e5.jpg",
  "/e6.jpg",
];

const IMAGES_PER_SLIDE = 3;

function Home() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-04T00:00:00+05:30"); // IST timezone
    const now = new Date();
    const difference = eventDate - now;
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
    <div className="w-full lg:pl-20 min-h-screen text-white flex flex-col items-center justify-center bg-cover bg-center relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute bg-black top-0 left-0 w-full h-full object-cover -z-1"
      >
        <source src="vid.mp4" type="video/mp4" />
      </video>

      <div className="w-full flex flex-col items-center justify-center text-center py-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-9xl font-extrabold text-white my-10"
        >
          <h2 className="text-purple-400 text-lg md:text-xl font-neon font-bold py-5">
            IEEE WIE PRESENTS
          </h2>
          <span className="relative neon-text font-neon text-white bg-black/70 px-4 py-2 rounded-lg neon-glow">
            ELYSIUM
          </span>
        </motion.h1>

        <p className="max-w-3xl text-sm md:text-lg bg-black/70 text-gray-300 mt-5 font-adit md:mt-10 px-4 py-2 rounded-lg">
          Empowering Women to Lead, Inspiring Innovation to Thrive, and Shaping
          a Future of Inclusivity, Creativity, and Excellence in STEM.
        </p>

        <Link to="/events">
          <button
            className="relative mt-6 px-8 py-4 uppercase font-bold text-white text-sm md:text-lg 
              rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 
              bg-gradient-to-r from-purple-500 to-blue-500 neon-box font-neon"
          >
            Register Now
          </button>
        </Link>
      </div>

      {/* Countdown Timer */}
      <div className="w-full flex flex-col font-adit items-center justify-center py-10">
        <h3 className="text-2xl md:text-3xl text-center text-pink-400 font-bold">
          Event Starts In :
        </h3>
        <div className="flex gap-6 mt-4 text-white text-lg md:text-2xl font-neon font-bold">
          {Object.keys(timeLeft).length > 0 ? (
            <>
              <div className="bg-black/70 p-4 rounded-lg text-center">
                <CalendarDays className="text-pink-400 w-8 h-8 mx-auto" />
                <span className="text-3xl md:text-5xl text-pink-400">
                  {timeLeft.days}
                </span>
                <p className="text-sm md:text-lg">Days</p>
              </div>
              <div className="bg-black/70 p-4 rounded-lg text-center">
                <Clock className="text-blue-400 w-8 h-8 mx-auto" />
                <span className="text-3xl md:text-5xl text-blue-400">
                  {timeLeft.hours}
                </span>
                <p className="text-sm md:text-lg">Hours</p>
              </div>
              <div className="bg-black/70 p-4 rounded-lg text-center">
                <Hourglass className="text-purple-400 w-8 h-8 mx-auto" />
                <span className="text-3xl md:text-5xl text-purple-400">
                  {timeLeft.minutes}
                </span>
                <p className="text-sm md:text-lg">Minutes</p>
              </div>
              <div className="bg-black/70 p-4 rounded-lg text-center">
                <Timer className="text-yellow-400 w-8 h-8 mx-auto" />
                <span className="text-3xl md:text-5xl text-yellow-400">
                  {timeLeft.seconds}
                </span>
                <p className="text-sm md:text-lg">Seconds</p>
              </div>
            </>
          ) : (
            <p className="text-xl text-green-400">The event has started! 🎉</p>
          )}
        </div>
      </div>

      {/* Key Stats */}
      <div className="w-full flex flex-wrap font-adit justify-center gap-15 bg-black/70 p-6 mt-20 md:p-10 rounded-lg">
        <div className="neon-box border-purple-400 text-purple-400">
          <h3 className="neon-text text-2xl md:text-5xl font-neon">6+</h3>
          <p className="text-sm md:text-base">
            Workshops covering AI, blockchain, and more.
          </p>
        </div>
        <div className="neon-box border-blue-400 text-blue-400">
          <h3 className="neon-text text-2xl md:text-5xl font-neon">2000+</h3>
          <p className="text-sm md:text-base">
            Social Media Interactions amplifying our message.
          </p>
        </div>
        <div className="neon-box border-pink-400 text-pink-400">
          <h3 className="neon-text text-2xl md:text-5xl font-neon">30%</h3>
          <p className="text-sm md:text-base">
            New Participants reflecting diverse talent.
          </p>
        </div>
      </div>

      {/* Past Events */}
      <div className="w-full max-w-4xl mx-auto border-2 border-purple-600 border-r-purple-600 rounded-xl py-10 mt-30 px-4 shadow-lg bg-black/80">
        <h2 className="text-2xl font-adit md:text-3xl text-center text-purple-400 font-bold mb-6">
          Past <span className="text-pink-500">Events</span>
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex items-center">
            <button
              className="absolute left-2 md:left-4 bg-black/70 p-2 md:p-4 rounded-full"
              onClick={goToPrevious}
            >
              <ChevronLeft className="text-white w-6 md:w-10 h-6 md:h-10" />
            </button>

            <motion.div
              className="flex gap-4 md:gap-10"
              animate={{ x: -currentIndex * (100 / IMAGES_PER_SLIDE) + "%" }}
              transition={{ duration: 0.5 }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full h-40 md:h-96 object-cover rounded-lg shadow-lg border border-purple-400"
                />
              ))}
            </motion.div>

            <button
              className="absolute right-2 md:right-4 bg-black/70 p-2 md:p-4 rounded-full"
              onClick={goToNext}
            >
              <ChevronRight className="text-white w-6 md:w-10 h-6 md:h-10" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto text-center py-12 px-6  rounded-xl shadow-lg bg-black/80">
        <h2 className="text-2xl font-adit md:text-3xl font-bold text-purple-400 mb-6">
          Frequently Asked <span className="text-pink-500">Questions</span>
        </h2>
        <p className="text-gray-300 text-sm md:text-lg">
          Find answers to the most common questions about our event.
        </p>
      </div>
    </div>
  );
}

export default Home;
