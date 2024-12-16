import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative pt-8">
      {/* Logo / Brand Name */}
      <div className="text-xl font-medium absolute top-8 left-0 ml-10">
        Portfolio
      </div>

      {/* Navbar Links */}
      <ul className="gap-10 lg:gap-16 hidden md:flex absolute top-12 right-0 mr-10">
        <li><a href="#hero">Home</a></li>
        <li className="menulink"><a href="#about">About</a></li>
        <li className="menulink"><a href="#projects">Projects</a></li>
        <li className="menulink"><a href="#skills">Skills</a></li>
        <li className="menulink"><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navbar Links */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 md:hidden">
          <li className="menuLink">
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>

          <li className="menuLink">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>

          <li className="menuLink">
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>

          <li className="menuLink">
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>

          <li className="menuLink">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
