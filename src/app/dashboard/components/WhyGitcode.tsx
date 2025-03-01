export default function GradientBoxes() {
    return (
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#121212] text-white">
        <h2 className="text-3xl font-bold mb-10">Why GitCode?</h2>
        
        {/* Background Circles */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="absolute w-[60%] h-[60%] border-x-4  border-dotted border-[#765BE1] rounded-full opacity-30"></div>
          <div className="absolute w-[75%] h-[75%] border-x-4 border-dotted border-[#765BE1] rounded-full opacity-20"></div>
        </div>
        
        {/* Boxes Grid */}
        <div className="relative grid grid-cols-3 gap-4 mb-14 max-w-4xl">
          {[
            { text: "Monetized Open-Source", gradient: "from-purple-600 to-indigo-500" },
            { text: "Build Your Developer Identity", gradient: "from-purple-700 to-indigo-600" },
            { text: "Connect with Tech Leaders", gradient: "from-pink-500 to-purple-500" },
            { text: "Global Developer Network", gradient: "from-pink-600 to-purple-600" },
            { text: "Find the Right Projects", gradient: "from-indigo-700 to-blue-600" },
            { text: "Transparent & Fair Reward", gradient: "from-purple-600 to-indigo-400" },
          ].map((box, index) => (
            <div
              key={index}
              className={`p-6 w-52 h-52 flex items-center justify-center text-center font-semibold text-white text-xl rounded-lg bg-gradient-to-br ${box.gradient}`}
            >
              {box.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
  