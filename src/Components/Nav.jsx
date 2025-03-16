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
      
      <nav className="p-5 text-white flex bg-[#451f55] items-center font-semibold relative z-50">
        
        <div className="absolute left-5">
          <img src="/elysium.png" alt="Elysium" className="h-16 md:h-20" />
        </div>

        <div className="hidden md:flex text-lg md:text-xl gap-8 mx-auto">
          {["Home", "Events", "Key Stats", "Ambassadors", "About", "Contact Us"].map(
            (item, index) => (
              <NavLink
                key={index}
                to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
                className="hover:underline"
                style={({ isActive }) => ({
                  color: isActive ? "#d3d3d3" : "",
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: isActive ? "underline" : "none",
                })}
              >
                {item}
              </NavLink>
            )
          )}
        </div>

      
        <button className="md:hidden absolute right-5 z-50" onClick={toggleMenu}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#451f55]/80 flex flex-col items-center 
                    justify-center gap-6 text-white text-lg font-semibold z-50 transition-transform 
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} duration-300`}
      >
        {["Home", "Events", "Key Stats", "Ambassadors", "About", "Contact Us"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
            className="hover:text-gray-300 transition-all text-2xl "
            onClick={closeMenu}
            style={({ isActive }) => ({
              color: isActive ? "#d3d3d3" : "",
              fontWeight: isActive ? "bold" : "",
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            {item}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Nav;
