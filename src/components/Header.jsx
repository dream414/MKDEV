// Header.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between 
        bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md`}
    >
      {/* Left side: Logo */}
      <div className="font-bold md:text-2xl text-lg">My Portfolio</div>

      {/* Right side: Menu + Dark Mode */}
      <div className="flex items-center space-x-4">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-yellow-300 transition">Home</a>
          <a href="#about" className="hover:text-yellow-300 transition">About</a>
          <a href="#services" className="hover:text-yellow-300 transition">Services</a>
          <a href="#projects" className="hover:text-yellow-300 transition">Projects</a>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Dark/Light Mode Button (last on right side) */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1  text-orange-600 font-semibold shadow hover:scale-105 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-orange-500 to-red-600 shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
