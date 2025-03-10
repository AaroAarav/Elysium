import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
    <nav className="p-10 text-white flex bg-[#451f55] items-center font-semibold relative">
        <div className="absolute left-5">
            <img src="/path-to-logo.png" alt="Logo" className="h-10" />
        </div>
        <div className="flex text-xl gap-10 mx-auto ">
            <NavLink className="hover:underline" style={(e)=>{
                return {
                    color: e.isActive? "#d3d3d3": "",
                    fontWeight: e.isActive? "bold": "",
                    textDecoration: e.isActive ? "underline" : "none"
                }
            }}  to="/home">Home</NavLink>
            <NavLink className="hover:underline" style={(e)=>{
                return {
                    color: e.isActive? "#d3d3d3": "",
                    fontWeight: e.isActive? "bold": "",
                    textDecoration: e.isActive ? "underline" : "none"
                }
            }} to="/Events">Events</NavLink>
            <NavLink className="hover:underline" style={(e)=>{
                return {
                    color: e.isActive? "#d3d3d3": "",
                    fontWeight: e.isActive? "bold": "",
                    textDecoration: e.isActive ? "underline" : "none"
                }
            }} to="/KeyStats">Key Stats</NavLink>
            <NavLink className="hover:underline" style={(e)=>{
                return {
                    color: e.isActive? "#d3d3d3": "",
                    fontWeight: e.isActive? "bold": "",
                    textDecoration: e.isActive ? "underline" : "none"
                }
            }} to="/Ambassadors">Community</NavLink>
            <NavLink className="hover:underline" style={(e)=>{
                return {
                    color: e.isActive? "#d3d3d3": "",
                    fontWeight: e.isActive? "bold": "",
                    textDecoration: e.isActive ? "underline" : "none"
                }
            }} to="/About">About</NavLink>
            
            <NavLink className="hover:underline" style={(e)=>{
                return {
                    color: e.isActive? "#d3d3d3": "",
                    fontWeight: e.isActive? "bold": "",
                    textDecoration: e.isActive ? "underline" : "none"
                }
            }} to="/ContactUs">Contact Us</NavLink>
        </div>
    </nav>
    </>
  )
}

export default Nav
