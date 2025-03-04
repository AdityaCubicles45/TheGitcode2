export default function GradientBoxes() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#121212] text-white">
      <h2 className="text-[42px] font-semibold mb-10">Why GitCode?</h2>
      
      {/* Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute w-[60%] h-[60%] border-x-4 border-dotted border-[#765BE1] rounded-full opacity-30"></div>
        <div className="absolute w-[75%] h-[75%] border-x-4 border-dotted border-[#765BE1] rounded-full opacity-30"></div>
      </div>
      
      {/* Boxes Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-14 max-w-4xl">
        {[
          { text: "Monetized Open-Source", gradient: "bg-[#56429D]" },
          { text: "Build Your Developer Identity", gradient: "bg-[#612F7D]" },
          { text: "Connect with Tech Leaders", gradient: "from-[#7C429D] to-[#F96555]" },
          { text: "Global Developer Network", gradient: "from-[#F96555] to-[#7C429D]" },
          { text: "Find the Right Projects", gradient: "bg-[#1F1F80]" },
          { text: "Transparent & Fair Reward", gradient: "bg-[#7C429D]" },
        ].map((box, index) => (
          <div
            key={index}
            className={`p-6 w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center text-center text-white text-2xl rounded-lg bg-gradient-to-tr ${box.gradient}`}
          >
            {box.text}
          </div>
        ))}
      </div>
    </div>
  );
}
