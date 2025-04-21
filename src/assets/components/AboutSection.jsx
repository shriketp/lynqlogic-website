import React from "react";

// Define the component that takes props
const AboutSection = ({ image, heading, subheading, description, buttonText }) => {
  return (
    <section id="about" className="relative py-20 px-8 bg-white font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-full md:w-1/2">
          <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm rounded-xl z-0"></div>
          <img
            src={image}
            alt="About LynqLogic"
            className="relative z-10 rounded-xl shadow-lg w-full object-cover h-[550px]"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800 font-poppins ml-8">
          <p className="text-sm text-black uppercase mb-2 tracking-wider">About</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {heading}
          </h2>
          <p className="text-lg mb-6 text-gray-600">{description}</p>
          <button className="btn">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
