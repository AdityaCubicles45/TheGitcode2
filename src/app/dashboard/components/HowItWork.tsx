import React from "react";

const HowItWorks = () => {
  return (
    <section className="relative bg-[#121212] text-white py-16 flex flex-col h-screen w-full items-center">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>

      {/* Dotted Wave Line */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full">
          <path
            d="M0,50 Q250,-20 500,50 T1000,50"
            fill="transparent"
            stroke="blue"
            strokeWidth="2"
            strokeDasharray="5,10"
          />
        </svg>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[70%] max-w-5xl relative z-10">
        {/* Step 1 */}
        <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-full shadow-lg flex flex-col items-center text-center w-56">
          <div className="w-16 h-16 bg-gradient-to-b from-purple-500 to-red-500 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Discover</h3>
          <p className="text-gray-300 text-sm">Open-source projects.</p>
        </div>

        {/* Step 2 */}
        <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-full shadow-lg flex flex-col items-center text-center w-56">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Contribute</h3>
          <p className="text-gray-300 text-sm">Meaningful code.</p>
        </div>

        {/* Step 3 */}
        <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-full shadow-lg flex flex-col items-center text-center w-56">
          <div className="w-16 h-16 bg-gradient-to-b from-blue-500 to-red-500 rounded-full mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Earn</h3>
          <p className="text-gray-300 text-sm">Rewards based on impact.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
