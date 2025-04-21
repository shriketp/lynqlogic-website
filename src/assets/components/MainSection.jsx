import React from "react";
const MainSection = ({ background, heading, subheading, buttonText1, buttonText2 }) => {
  return (
    <section
      id="home"
      className="pt-20 h-screen bg-cover relative flex items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
      <div className="relative z-10 text-white font-poppins px-12 py-12 ml-10 max-w-3xl">
        <p className="text-lg text-white mb-3">Welcome!</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          {heading}
        </h1>
        <p className="text-xl mb-6">{subheading}</p>
        <div className="flex gap-4">
          <button className="btn">
            {buttonText1}
          </button>
          <button className="border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-black transition">
            {buttonText2}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
