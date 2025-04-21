import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 font-poppins">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-normal text-lynq-yellow mb-4">LynqLogic</h3>
          <p className="text-gray-400">
            Your trusted partner for software, design, and cloud innovation.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-xl hover:text-blue-400 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-pink-400 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-normal mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#hero" className="hover:text-blue-400 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400 transition">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-normal mb-4 text-white">Contact</h4>
          <p className="text-gray-400">
            Phone:{" "}
            <a href="tel:+919408425165" className="hover:text-blue-400">
              +91 9408425165
            </a>
          </p>
          <p className="text-gray-400">
            Email:{" "}
            <a href="mailto:lynqlogic@gmail.com" className="hover:text-blue-400">
              lynqlogic@gmail.com
            </a>
          </p>
          <p className="text-gray-400">WhatsApp: Same as phone number</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} LynqLogic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
