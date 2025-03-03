import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="relative bg-[#121212] text-white py-12 flex flex-col h-screen w-full items-center">
      <h2 className="text-[40px] font-semibold mb-16">How It Works</h2>

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 h-[67%] max-w-5xl relative z-10">
        {/* Step 1 */}
        <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-full border border-white/10 shadow-lg flex flex-col items-center justify-around text-center w-56">
          <div className="w-[80%]">
            <h3 className="text-[22px]">Discover open-source projects.</h3>
          </div>
          <Image src="/landingPage/Ellipse.svg" height={100} width={100} alt="Ellipse" className="" />
        </div>

        {/* Step 2 */}
        <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-full border border-white/10 shadow-lg flex flex-col items-center justify-around text-center w-56">
          <Image src="/landingPage/Group.svg" height={200} width={200} alt="Ellipse" className="" />
          <div className="w-[80%]">
            <h3 className="text-[22px] ">Contribute meaningful code.</h3>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-full border border-white/10 shadow-lg flex flex-col items-center justify-around text-center w-56">
          <div className="w-[80%]">
            <h3 className="text-[22px]">Earn rewards based on your impact</h3>
          </div>
          <Image src="/landingPage/Polygon.svg" height={100} width={100} alt="Ellipse" className="" />

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
