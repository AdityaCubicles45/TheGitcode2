"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, );

  useEffect(() => {
    const closeMenuOnScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", closeMenuOnScroll);
    return () => {
      window.removeEventListener("scroll", closeMenuOnScroll);
    };
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 sm:top-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 z-50 w-full max-w-7xl px-0 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-between md:justify-center">
        {/* Mobile Hamburger */}
        <div className="flex items-center md:hidden fixed top-5 left-5 gap-3 z-50">
          <div className="text-white">GITCODE</div>
          <button
            className="text-white bg-[#525252] bg-opacity-70 p-2 fixed right-5 rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Logo - Hidden on mobile */}
        <div className="hidden md:flex items-center ml-4 left-0 text-white fixed gap-3">
          GITCODE
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center space-x-4 bg-[#525252] bg-opacity-55 text-white rounded-full shadow-lg">
          <button className="hover:bg-[#525252] bg-opacity-70 px-4 py-2 rounded-full">
            Platform
          </button>
          <button className="hover:bg-[#525252] bg-opacity-70 px-4 py-2 rounded-full">
            FAQs
          </button>
          <button className="hover:bg-[#525252] bg-opacity-70 px-4 py-2 rounded-full">
            About
          </button>
        </div>

        {/* Start Contributing Button - Hidden on mobile */}
        <div className="hidden md:flex mr-4 items-center fixed right-0">
          <SignedIn>
            <Link href="/onBoarding">
              <button className="rounded-full text-white hover:text-white font-medium border px-4 py-1.5 text-sm sm:text-base">
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
              <button className="rounded-full text-white hover:text-white font-medium border px-4 py-1.5 text-sm sm:text-base">
                Start Contributing
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="z-50">
          {/* Left half with transparent blur */}
          <div className="w-1/2 h-screen bg-black bg-opacity-40 backdrop-blur-md p-6 flex flex-col space-y-4 text-white">
            <button className="hover:bg-[#525252] bg-opacity-70 px-4 py-2 rounded-md">
              Platform
            </button>
            <button className="hover:bg-[#525252] bg-opacity-70 px-4 py-2 rounded-md">
              FAQs
            </button>
            <button className="hover:bg-[#525252] bg-opacity-70 px-4 py-2 rounded-md">
              About
            </button>

            <SignedIn>
              <Link href="/onBoarding">
                <button className="hover:bg-[#525252] bg-opacity-70 px-4 py-2 rounded-md">
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
                <button className="hover:bg-[#525252] bg-opacity-70 px-4 py-2 rounded-md">
                  Start Contributing
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Right half fully transparent */}
          <div className="w-1/2 h-screen" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
