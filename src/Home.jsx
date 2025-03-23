import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, CalendarDays, Clock, Hourglass, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";

const images = ["/e1.jpg", "/e2.jpg", "/e3.jpg", "/e4.jpg", "/e5.jpg", "/e6.jpg"];

function Home() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-04T00:00:00+05:30");
    const now = new Date();
    const difference = eventDate - now;
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : {};
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => goToNext(), 3000);
    return () => clearInterval(slideTimer);
  }, []);

  const goToPrevious = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    
    <div className="w-full min-h-screen text-white lg:pl-10 flex flex-col items-center justify-center bg-cover bg-center relative">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-1">
        <source src="vid.mp4" type="video/mp4" />
      </video>

      <div className="w-full flex flex-col items-center justify-center text-center py-16 px-6">
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white my-6">
          <h2 className="text-purple-400 text-lg md:text-2xl font-neon font-bold py-3">IEEE WIE PRESENTS</h2>
          <span className="relative neon-text font-neon text-white bg-black/70 px-4 py-2 rounded-lg neon-glow">ELYSIUM</span>
        </motion.h1>

        <p className="max-w-3xl font-kek text-sm sm:text-lg md:text-xl bg-black/70 text-gray-300 mt-4 px-6 py-3 rounded-lg">
          Empowering Women to Lead, Inspiring Innovation to Thrive, and Shaping a Future of Inclusivity, Creativity, and Excellence in STEM.
        </p>

        <Link to="/events">
          <button className="relative mt-6 px-6 py-3 sm:px-8 sm:py-4 uppercase font-bold text-white text-sm md:text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-purple-500 to-blue-500 neon-box font-neon">
            Register Now
          </button>
        </Link>
      </div>

      <div className="w-full flex flex-col font-adit items-center justify-center py-8">
        <h3 className="text-xl md:text-3xl text-center text-pink-400 font-bold">Event Starts In :</h3>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-white text-lg md:text-2xl font-neon font-bold">
          {Object.keys(timeLeft).length > 0 ? (
            ["days", "hours", "minutes", "seconds"].map((unit, idx) => (
              <div key={idx} className="bg-black/70 p-4 rounded-lg text-center w-20 md:w-24">
                {unit === "days" && <CalendarDays className="text-pink-400 w-6 h-6 mx-auto" />}
                {unit === "hours" && <Clock className="text-blue-400 w-6 h-6 mx-auto" />}
                {unit === "minutes" && <Hourglass className="text-purple-400 w-6 h-6 mx-auto" />}
                {unit === "seconds" && <Timer className="text-yellow-400 w-6 h-6 mx-auto" />}
                <span className={`text-2xl md:text-4xl ${unit === "days" ? "text-pink-400" : unit === "hours" ? "text-blue-400" : unit === "minutes" ? "text-purple-400" : "text-yellow-400"}`}>
                  {timeLeft[unit]}
                </span>
                <p className="text-xs md:text-sm">{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
              </div>
            ))
          ) : (
            <p className="text-xl text-green-400">The event has started! 🎉</p>
          )}
        </div>
      </div>
      <div className="w-full flex font-kek flex-wrap justify-center gap-8 bg-black/70 p-6 mt-12 md:p-10 rounded-lg">
        <div className="neon-box border-purple-400 text-purple-400">
          <h3 className="neon-text text-2xl md:text-5xl font-neon">6+</h3>
          <p className="text-sm md:text-base">Workshops covering AI, blockchain, and more.</p>
        </div>
        <div className="neon-box border-blue-400 text-blue-400">
          <h3 className="neon-text text-2xl md:text-5xl font-neon">2000+</h3>
          <p className="text-sm md:text-base">Social Media Interactions amplifying our message.</p>
        </div>
        <div className="neon-box border-pink-400 text-pink-400">
          <h3 className="neon-text text-2xl md:text-5xl font-neon">30%</h3>
          <p className="text-sm md:text-base">New Participants reflecting diverse talent.</p>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto border-2 border-purple-600 rounded-xl py-8 mt-16 px-4 shadow-lg bg-black/80">
  <h2 className="text-xl md:text-2xl font-adit text-center text-purple-400 font-bold mb-6">
    Past <span className="text-pink-500">Events</span>
  </h2>

  <div className="relative w-full overflow-hidden flex items-center justify-center">
    <button
      className="absolute left-2 bg-black/70 p-2 rounded-full z-10"
      onClick={goToPrevious}
    >
      <ChevronLeft className="text-white w-6 h-6 md:w-8 md:h-8" />
    </button>

    <motion.div
      className="flex w-full transition-transform ease-in-out duration-500"
      animate={{ x: `-${currentIndex * 100}%` }}
    >
      {images.map((img, index) => (
        <div key={index} className="w-full flex-shrink-0">
          <img
            src={img}
            alt={`Event ${index + 1}`}
            className="w-full h-40 sm:h-64 md:h-96 object-cover rounded-lg shadow-lg border border-purple-400 mx-2"
          />
        </div>
      ))}
    </motion.div>

    <button
      className="absolute right-2 bg-black/70 p-2 rounded-full z-10"
      onClick={goToNext}
    >
      <ChevronRight className="text-white w-6 h-6 md:w-8 md:h-8" />
    </button>
  </div>
</div>

    </div>
  );
}

export default Home;