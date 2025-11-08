"use client"

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Portfolio", path: "#about" },
  { title: "Work", path: "#Projects" },

  { title: "Skills", path: "#stack" },
  { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      <div className="z-50 fixed flex justify-center w-full text-white font-bold mt-4 px-4">
        {/* Desktop Navigation */}
        <div
          className="border border-white/15 backdrop-blur-3xl rounded-xl 
                     hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto"
        >
          <ul className="flex flex-row p-2 space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="transform hover:skew-x-12 hover:text-white/50 
                           transition-all duration-300 ease-in-out font-bold 
                           text-sm lg:text-base"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={toggleNav}
          className="md:hidden fixed top-4 right-4 border rounded-xl z-50 
                     text-white/70 border-white/30 bg-black/50 backdrop-blur-sm 
                     p-3 transition-all duration-300 hover:bg-white/10 hover:border-white/50"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 h-screen w-full bg-black/95 backdrop-blur-lg 
                     transform transition-all duration-500 ease-in-out z-40
                     ${nav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          {/* Close button for mobile */}
          <div className="absolute top-6 right-6 z-50">
            <button
              onClick={closeNav}
              className="p-3 rounded-xl border border-white/30 bg-black/50 
                         text-white/70 hover:bg-white/10 hover:border-white/50 
                         transition-all duration-300"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center justify-center h-full px-6">
            <ul className="flex flex-col items-center space-y-12 w-full max-w-sm">
              {navLinks.map((link, index) => (
                <li key={index} className="w-full text-center">
                  <Link
                    href={link.path}
                    onClick={closeNav}
                    className="block text-3xl sm:text-4xl font-bold py-4 
                               text-white hover:text-emerald-400 transition-all 
                               duration-300 transform hover:scale-105 
                               border-b border-white/10 hover:border-emerald-400/50 w-full"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Additional Info for Mobile */}
            <div className="absolute bottom-10 text-center text-white/60 text-sm">
              <p>Akash Biradar</p>
              <p className="text-xs mt-1">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};