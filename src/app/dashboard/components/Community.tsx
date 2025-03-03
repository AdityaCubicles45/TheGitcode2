import React from "react";

const CommunitySection = () => {
  return (
    <section className="bg-[#121212] h-screen w-full text-white py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">Join the Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[75%] max-w-5xl">
        {/* Developers */}
        <div className="bg-gradient-to-b from-purple-900 to-black p-8 rounded-lg shadow-lg flex flex-col justify-around items-center text-center">
          <h3 className="text-[26px] font-semibold  w-[50%]">For Developers</h3>
          <p className="text-gray-300 text-[21px] w-[60%]">
            Get rewarded for what you love doing.
          </p>
          <button className="bg-blue-900 text-white text-xl w-[80%] py-3 rounded-full hover:opacity-80">
            Learn more
          </button>
        </div>

        {/* Maintainers */}
        <div className="bg-gradient-to-b from-purple-800 to-black p-8 rounded-lg shadow-lg flex flex-col justify-around items-center text-center">
          <h3 className="text-[26px] font-semibold  w-[50%]">For Maintainers</h3>
          <p className="text-gray-300 text-[21px] w-[70%] ">
            Get high-quality contributions for your project.
          </p>
          <button className="bg-orange-500 w-[80%] text-xl text-white py-3 rounded-full hover:opacity-80">
            Learn more
          </button>
        </div>

        {/* Companies */}
        <div className="bg-gradient-to-b from-red-900 to-black p-8 rounded-lg shadow-lg flex flex-col justify-around items-center text-center">
          <h3 className="text-[26px] font-semibold w-[50%] ">For Companies</h3>
          <p className="text-gray-300 text-[21px] w-[60%] ">
            Discover top developers and support open-source.
          </p>
          <button className="bg-blue-900 text-white text-xl w-[80%] py-3 rounded-full hover:opacity-80">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
