import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300 py-10 mt-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-wide">MyPortfolio</h2>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Building modern web experiences with MERN Stack and creative designs.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-orange-400 transition">Projects</a></li>
            <li><a href="#services" className="hover:text-orange-400 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="https://github.com/dream414" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mahak.dev-ba7829386" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition transform hover:scale-110">
              <FaLinkedin />
            </a>
           <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mahakdev201@gmail.com"
  target="_blank"
  rel="noreferrer"
  className="hover:text-orange-400 transition transform hover:scale-110"
>
  <FaEnvelope />
</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed right-6 bottom-6 bg-orange-500 hover:bg-orange-600 
                   text-white p-3 rounded-full shadow-lg z-50
                   transition transform hover:scale-110"
        aria-label="Back to Top"
      >
        <FaArrowUp size={20} />
      </button>
    </footer>
  );
}
