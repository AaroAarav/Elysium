import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 p-6 flex justify-between items-center border-t border-gray-700">
      
      <div className="flex flex-col gap-2 ml-10">
        <h2 className="text-purple-400 font-bold">Quick Links</h2>
        <a href="/home" className="hover:text-white">Home</a>
        <a href="/events" className="hover:text-white">Events</a>
        <a href="/Ambassadors" className="hover:text-white">Ambassadors</a>
        <a href="/about" className="hover:text-white">About</a>
      </div>

      
      <h1 className="text-2xl text-purple-500 font-bold">Elysium</h1>
      
      
      <div className="flex flex-col gap-2 mr-10">
        <h2 className="text-purple-400 font-bold">Contact Us</h2>
        <p>Email: contact@elysium.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Elysium Street, Tech City</p>
      </div>
    </footer>
  );
}

export default Footer;
