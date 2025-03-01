import React from "react";

const CommunitySection = () => {
  return (
    <section className="bg-[#121212] h-screen w-full text-white py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8">Join the Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[70%] max-w-5xl">
        {/* Developers */}
        <div className="bg-gradient-to-b from-purple-900 to-black p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold mb-4">For Developers</h3>
          <p className="text-gray-300 text-xl mb-6">
            Get rewarded for what you love doing.
          </p>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:opacity-80">
            Learn more
          </button>
        </div>

        {/* Maintainers */}
        <div className="bg-gradient-to-b from-purple-800 to-black p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold mb-4">For Maintainers</h3>
          <p className="text-gray-300 text-xl mb-6">
            Get high-quality contributions for your project.
          </p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:opacity-80">
            Learn more
          </button>
        </div>

        {/* Companies */}
        <div className="bg-gradient-to-b from-red-900 to-black p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold mb-4">For Companies</h3>
          <p className="text-gray-300 text-xl mb-6">
            Discover top developers and support open-source.
          </p>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:opacity-80">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
