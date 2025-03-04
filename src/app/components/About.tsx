import React from "react";

const About = () => {
  return (
    <div className=" h-screen sm:h-auto lg:h-screen w-full bg-[#121212] text-white flex items-center justify-center px-4">
      <div className="bg-white/5 h-[80%] sm:h-[40%] lg:h-[60%] w-[90%] md:w-[80%] sm:w-[65%] rounded-full flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-semibold mb-12 sm:text-3xl">About</h1>
        <div className="w-[90%] md:w-[80%] sm:w-[60%] text-center text-[20px] sm:text-[16px] leading-relaxed">
          <p>
            GitCode is an open-source collaboration platform where developers
            contribute to projects, earn rewards, and build their professional
            reputation. By bridging contributors with maintainers and companies,
            GitCode transforms coding efforts into real-world value, making
            open-source more rewarding and accessible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
