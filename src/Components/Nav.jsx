import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop  */}
      <div className="hidden md:flex fixed left-2 lg:left-3 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-10 z-50 pointer-events-none bg-black/40 border-l border-purple-500/50 pl-4 py-6 rounded-r-xl">
        <div className="text-purple-300 font-neon mt-2">explore</div>

        <NavLink to="/" className="mb-6 pointer-events-auto">
          <img src="/ely.png" alt="Elysium Logo" className="h-12 w-12 cursor-pointer" />
        </NavLink>

        {["Home", "Events", "Key Stats", "Ambassadors", "About", "Contact Us"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
            className="relative flex flex-col items-center group pointer-events-auto font-neon text-xs lg:text-sm tracking-widest uppercase opacity-40 transition-all duration-300 hover:opacity-100 hover:scale-110"
          >
            <div className="h-[2px] w-8 bg-purple-500 group-hover:w-16 transition-all duration-300 cursor-pointer"></div>
            <span className="mt-2 text-purple-300 group-hover:text-white transition-all duration-300">
              {item}
            </span>
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex fixed right-2 lg:right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-6 z-50 pointer-events-auto">
        <a 
          href="https://www.instagram.com/ieee.wiemuj?igsh=MTkyM2w1Y2poOXF5dw==" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="/insta1.png" alt="Instagram" className="h-12 w-12 cursor-pointer" />
        </a>

        <a 
          href="https://www.linkedin.com/company/elysium-25/posts/?feedView=all" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="h-12 w-12 cursor-pointer" />
        </a>
      </div>

      {/* Mobile */}
      <nav className="md:hidden p-4 bg-black/90 border-b border-purple-500 flex items-center justify-between fixed top-0 w-full z-50">
        <NavLink to="/" className="ml-6">
          <img src="/elysium.png" alt="Elysium" className="h-12 cursor-pointer" />
        </NavLink>

        <button
          className="mr-6 text-purple-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      
      <div
        className={`fixed inset-0 bg-black/90 flex flex-col items-center justify-center text-purple-300 text-xl z-40 transition-transform duration-300 font-neon tracking-wider ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {["Home", "Events", "Key Stats", "Ambassadors", "About", "Contact Us"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
            className="mb-6 hover:text-white transition-all duration-300 relative text-2xl"
            onClick={closeMenu}
          >
            {item}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 hover:w-full"></span>
          </NavLink>
        ))}

        {/* Social Media */}
        <div className="flex space-x-6 mt-10">
          <a 
            href="https://www.instagram.com/ieee.wiemuj?igsh=MTkyM2w1Y2poOXF5dw==" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/insta1.png" alt="Instagram" className="h-10 w-10 cursor-pointer" />
          </a>

          <a 
            href="https://www.linkedin.com/company/elysium-25/posts/?feedView=all" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="h-10 w-10 cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;
