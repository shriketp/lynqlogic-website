import { useEffect, useState } from "react";
import LOGO from "../images/log.png"; 

const Navbar = () => {
  const [navbarOpaque, setNavbarOpaque] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarOpaque(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-5 py-2 shadow-2xl flex justify-between items-center font-poppins transition-all duration-300 ${
        navbarOpaque ? "bg-black bg-opacity-50" : "bg-black bg-opacity-70"
      }`}
    >
      {/* Left: Logo and Brand */}
      <div className="flex items-center space-x-3">
        <img
          src={LOGO}
          alt="LynqLogic Symbol"
          className="w-14 h-14 object-contain"
          loading="lazy"
        />
        <div className="text-2xl font-extrabold bg-white text-transparent bg-clip-text">
          LynqLogic
        </div>
      </div>

      {/* Right: Navigation Links */}
      <div className="hidden md:flex gap-6 text-white font-medium">
        <a href="#home" className="hover:text-lynq-yellow transition">
          Home
        </a>
        <a href="#about" className="hover:text-lynq-yellow transition">
          About
        </a>
        <a href="#services" className="hover:text-lynq-yellow transition">
          Services
        </a>
        <a href="#contact" className="hover:text-lynq-yellow transition">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
