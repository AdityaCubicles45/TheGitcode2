import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center bg-black p-10 md:px-16 lg:px-28">
      {/* ENGX LAB Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-[40px] md:text-[50px] lg:text-[70px] bg-gradient-to-r from-white to-gray-400 to-70% bg-clip-text inline-block text-transparent font-extrabold">
          GITCODE
        </h1>
        <p className="text-[18px] md:text-[20px] lg:text-[24px] font-base bg-gradient-to-r from-white to-gray-400 to-80% bg-clip-text inline-block text-transparent">
          made with <span>❤️</span> by Engineerians
        </p>
      </div>

      {/* Links and Social Icons Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mt-6 text-center md:text-left">
        {/* Footer Links */}
        <div className="flex flex-col text-white items-center md:items-start">
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 mt-6">
            <a href="#" className="hover:text-gray-400">Our company</a>
            <a href="#" className="hover:text-gray-400">Teams</a>
            <a href="#" className="hover:text-gray-400">Support</a>
          </div>
          <p className="mt-5 text-sm md:text-base">© 2024 GITCODE. All rights reserved.</p>
        </div>

        {/* Social Icons and Contact Info */}
        <footer className="flex flex-col items-center md:items-end text-gray-400 mt-6 md:mt-0">
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="#">
              <Image src="/Social_Icons/twitter.svg" height={24} width={24} alt="Twitter" className="hover:opacity-80 transition" />
            </a>
            <a href="#">
              <Image src="/Social_Icons/telegram.svg" height={24} width={24} alt="Telegram" className="hover:opacity-80 transition" />
            </a>
            <a href="#">
              <Image src="/Social_Icons/instagram.svg" height={24} width={24} alt="Instagram" className="hover:opacity-80 transition" />
            </a>
            <a href="#">
              <Image src="/Social_Icons/youtube.svg" height={24} width={24} alt="YouTube" className="hover:opacity-80 transition" />
            </a>
            <a href="#">
              <Image src="/Social_Icons/pintrest.svg" height={24} width={24} alt="Pinterest" className="hover:opacity-80 transition" />
            </a>
            <a href="#">
              <Image src="/Social_Icons/linkedin.svg" height={24} width={24} alt="LinkedIn" className="hover:opacity-80 transition" />
            </a>
          </div>
          <p className="mt-4 text-sm md:text-base">GITCODE, Bangalore, India.</p>
          <p className="mt-2 text-sm md:text-base">mail: info@gitcode.com</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
