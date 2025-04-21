# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




import './App.css';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import background from "./assets/images/bg-3.jpg";
import about from "./assets/images/about-2.jpg";
import p from "./assets/images/p.jpg";
import cd from "./assets/images/cd.jpg";
import {
  MonitorSmartphone,
  PenTool,
  LayoutDashboard,
  Database,
  Smartphone,
  CloudCog,
} from "lucide-react";

function App() {
  return (
    <>
      {/* ✅ Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center font-poppins">
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          LynqLogic
        </div>

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-500 transition">Home</a>
          <a href="#" className="hover:text-blue-500 transition">About</a>
          <a href="#" className="hover:text-blue-500 transition">Services</a>
          <a href="#" className="hover:text-blue-500 transition">Contact</a>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <section
        className="pt-20 h-screen bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 text-white font-poppins px-12 py-12 ml-10 max-w-3xl">
          <p className="text-lg text-white mb-3">Welcome!</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Strong Business <br />
            Strategy To Grow Your <br />
            Business
          </h1>
          <p className="text-xl mb-6">Empowering businesses with digital excellence</p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-lg transition">
              Get Started
            </button>
            <button className="border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-blue-600 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ✅ About Section */}
      <section className="relative py-20 px-8 bg-white font-poppins">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl z-0"></div>
            <img
              src={about}
              alt="About LynqLogic"
              className="relative z-10 rounded-xl shadow-lg w-full object-cover h-[550px]"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 text-gray-800 font-poppins ml-8">
            <p className="text-sm text-blue-600 uppercase mb-2 tracking-wider">About</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              We help small <br /> Business owners and <br /> Professionals to get <br /> Things done.
            </h2>
            <p className="text-lg mb-6 text-gray-600">
              Our mission is to deliver practical, scalable solutions tailored to your business growth.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-200 py-20 font-poppins">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 1 - Web & Mobile App Development */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <MonitorSmartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web & Mobile App Development</h3>
              <p className="text-gray-600">We develop scalable and secure web and mobile applications tailored to your business needs.</p>
            </div>

            {/* 2 - UI/UX Design */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <PenTool className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">Crafting intuitive user experiences and beautiful interfaces for your digital products.</p>
            </div>

            {/* 3 - Frontend Development */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <LayoutDashboard className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Front-end Development</h3>
              <p className="text-gray-600">Modern and responsive UI built with React, Vue, and the latest frontend technologies.</p>
            </div>

            {/* 4 - Backend Integration */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend Integration</h3>
              <p className="text-gray-600">Robust APIs and server-side logic using Node.js, C#, and secure database systems.</p>
            </div>

            {/* 5 - Mobile App Development */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
              <p className="text-gray-600">Native and cross-platform mobile solutions for iOS and Android.</p>
            </div>

            {/* 6 - DevOps & Cloud Solution */}
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <CloudCog className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">DevOps & Cloud Solution</h3>
              <p className="text-gray-600">CI/CD pipelines, cloud deployment, and infrastructure automation for scalable systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Team Section */}
      <section className="py-20 px-6 bg-slate-100 font-poppins">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-6 hover:shadow-xl transition">
            <img src={p} alt="Parth Patel" className="w-24 h-24 object-cover rounded-full border-4 border-blue-100 shadow" loading="lazy" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Parth Patel</h3>
              <p className="text-blue-600 font-medium mb-2">Co-Founder, Project Manager, Front-End Developer</p>
              <p className="text-gray-600 text-sm">3.5+ years experience leading frontend development & strategy.</p>
              <a href="https://linkedin.com/in/your-parth-link" className="text-sm text-blue-500 mt-2 inline-block">LinkedIn</a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-6 hover:shadow-xl transition">
            <img src={cd} alt="Dhruv Chauhan" className="w-24 h-24 object-cover rounded-full border-4 border-blue-100 shadow" loading="lazy" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Dhruv Chauhan</h3>
              <p className="text-blue-600 font-medium mb-2">Co-Founder & Lead UI/UX Designer</p>
              <p className="text-gray-600 text-sm">8+ years creating seamless, user-first digital experiences.</p>
              <a href="https://linkedin.com/in/your-dhruv-link" className="text-sm text-blue-500 mt-2 inline-block">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-150 font-poppins">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-8 text-lg">
            For inquiries or to discuss how we can help you build your solution, feel free to reach out.
          </p>

          <div className="grid gap-6 md:grid-cols-3 text-left">
            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FaPhoneAlt className="text-blue-600 text-2xl" />
                Phone
              </h3>
              <p className="text-gray-700">+91 94084 25165</p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FaEnvelope className="text-red-500 text-2xl" />
                Email
              </h3>
              <p className="text-gray-700">lynqlogic@gmail.com</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FaWhatsapp className="text-green-500 text-2xl" />
                WhatsApp
              </h3>
              <p className="text-gray-700">Same as phone number</p>
            </div>
          </div>
        </div>
      </section>


      {/* ✅ Footer */}
      <footer className="bg-gray-900 text-white py-10 font-poppins">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-blue-500 mb-4">LynqLogic</h3>
            <p className="text-gray-400">Your trusted partner for software, design, and cloud innovation.</p>
            <div className="flex gap-4 mt-4">
              <a href="#"><FaLinkedin className="text-xl hover:text-blue-400" /></a>
              <a href="#"><FaInstagram className="text-xl hover:text-pink-400" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact</h4>
            <p className="text-gray-400">Phone: <a href="tel:+919408425165" className="hover:text-blue-400">+91 9408425165</a></p>
            <p className="text-gray-400">Email: <a href="mailto:lynqlogic@gmail.com" className="hover:text-blue-400">lynqlogic@gmail.com</a></p>
            <p className="text-gray-400">WhatsApp: Same as phone number</p>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} LynqLogic. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
