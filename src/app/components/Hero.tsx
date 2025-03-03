"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const Hero = () => {

  return (
    <div className="relative w-full h-full">
      {/* Main Content */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/landingPage/Hero.svg')",
          backgroundSize: "cover",
        }}
      >
        {/* Main Content Centering */}
        <div className="py-16 sm:py-32 md:py-44 flex flex-col items-center px-6 sm:px-12 relative z-10">
          
          {/* Hero Text */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[95px] text-center mt-4">
            Contribute.
          </h1>
          
          {/* Subheading with Glow */}
          <div className="w-[100%]">
            <h1
              className="text-center mt-4 font-bold font-sequel text-white/80 text-[36px] sm:text-5xl md:text-5xl lg:text-[110px] leading-tight sm:leading-[1.2] transition-all duration-300 hover:text-white/50 ease-in"
              >
              Earn. Elevate.
            </h1>
          </div>

          {/* Description */}
          <p className="mt-6 sm:mt-12 text-center text-xs text-white/60 sm:text-sm md:text-xl lg:text-[22px] leading-relaxed hover:text-white hover:text-shadow-[0px_0px_30px_#fdec6e] transition-all duration-200 ease-in">
          Open-source contributions that reward
          <br /> 
          your skills. Get recognized, earn incentives, 
          <br />
          and build your portfolio.
          </p>

          {/* Email Button with Hover Effect */}
          <SignedIn>
          <Link href="/onBoarding">
          <button
            className="mt-8 sm:mt-12 rounded-full text-white hover:text-white font-medium border hover:border-blue-600 px-6 sm:px-9 py-2 duration-300 hover:bg-blue-600 transition-all shadow-none hover:shadow-[0_0_110px_10px_rgba(255,255,255,0.8)] text-sm sm:text-base relative z-20"
          >
            Start Contributing
          </button>
          </Link>
        </SignedIn>

        <SignedOut>
          <SignInButton
            mode="modal"
            fallbackRedirectUrl={"/onBoarding"}
            forceRedirectUrl={"/onBoarding"}
          >
            <button
            className="mt-8 sm:mt-12 rounded-full text-white hover:text-white font-medium border hover:border-blue-600 px-6 sm:px-9 py-2 duration-300 hover:bg-blue-600 transition-all shadow-none hover:shadow-[0_0_110px_10px_rgba(255,255,255,0.8)] text-sm sm:text-base relative z-20"
          >
            Start Contributing
          </button>
          </SignInButton>
        </SignedOut>

          {/* <div className="mt-14 sm:mt-48 flex flex-col items-center justify-center bg-transparent relative">
            <div className="text-center relative transition-all duration-300">
              <span className="font-sequel font-bold text-5xl sm:text-6xl md:text-[7rem] text-white/40 sm:text-black duration-500 sm:hover:text-white/60 drop-shadow-[30px_30px_100px_rgba(255,255,255,0.8)]">
                THE ENGX LAB.
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
