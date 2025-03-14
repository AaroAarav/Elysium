import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 p-6 flex justify-between items-center border-t border-gray-700">
      
      <div className="flex-1 flex flex-col items-center">
        <h2 className="text-purple-400 font-bold mb-2">Quick Links</h2>
        <div className="grid grid-cols-2 gap-2">
          <a href="/Home" className="hover:text-white">Home</a>
          <a href="/Events" className="hover:text-white">Events</a>
          <a href="/KeyStats" className="hover:text-white">Key Stats</a>
          <a href="/Ambassadors" className="hover:text-white">Community</a>
          <a href="/About" className="hover:text-white">About</a>
          <a href="/ContactUs" className="hover:text-white">Contact Us</a>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img src="src\Components\photos\elysium.png" alt="Elysium Logo" className="h-35" />
      </div>
      
      <div className="flex-1 flex flex-col gap-2 items-center">
        <h2 className="text-purple-400 font-bold">Contact Us</h2>
        <p>Email: Elysium.muj@gmail.com</p>
        <p>Phone: +91 95999 28296</p>
        <p>IEEE WIE, Manipal Univeristy Jaipur</p>
      </div>
    </footer>
  );
}

export default Footer;
