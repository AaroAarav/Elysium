import React from "react";
import { Link } from "react-router-dom"; // Use 'next/link' if using Next.js

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 p-6 border-t border-gray-700 flex flex-col md:flex-row items-center text-center md:text-left gap-6">
      
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h2 className="text-purple-400 font-bold mb-2">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/events" className="hover:text-white">Events</Link>
          <Link to="/keystats" className="hover:text-white">Key Stats</Link>
          <Link to="/ambassadors" className="hover:text-white">Community</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/contactus" className="hover:text-white">Contact Us</Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img src="/elysium.png" alt="Elysium Logo" className="h-20 md:h-28" />
      </div>
      
      <div className="flex-1 flex flex-col gap-2 items-center md:items-end">
        <h2 className="text-purple-400 font-bold">Contact Us</h2>
        <p>Email: <a href="mailto:Elysium.muj@gmail.com" className="hover:text-white">Elysium.muj@gmail.com</a></p>
        <p>Phone: <a href="tel:+919599928296" className="hover:text-white">+91 95999 28296</a></p>
        <p>IEEE WIE, Manipal University Jaipur</p>
      </div>

    </footer>
  );
}

export default Footer;
