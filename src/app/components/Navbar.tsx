"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

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
  }, ); // Added lastScrollY to dependency array

  // Close menu on scroll
  useEffect(() => {
    const closeMenuOnScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', closeMenuOnScroll);
    return () => {
      window.removeEventListener('scroll', closeMenuOnScroll);
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
        <button
          className="md:hidden text-white bg-[#525252] bg-opacity-70 p-2 rounded-full fixed top-5 right-5 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="flex items-center left-0 text-white fixed gap-3">
         LOGO
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center px-4 space-x-4 bg-[#525252] bg-opacity-55 text-white rounded-full shadow-lg">
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

        <div className="flex items-center fixed right-0">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox:
                  "h-8 w-8 ring-2 ring-gray-200/50 ring-offset-2 rounded-full transition-shadow hover:ring-gray-300/50",
              },
            }}
          />
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
          </div>

          {/* Right half fully transparent */}
          <div
            className="w-1/2 h-screen"
            onClick={() => setMenuOpen(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
