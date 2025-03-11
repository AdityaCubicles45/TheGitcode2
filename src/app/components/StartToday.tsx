"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const StartToday = () => {

  const router = useRouter();

  return (
    <div className=' h-screen sm:h-auto lg:h-screen w-full flex flex-col justify-center text-white text-center items-center bg-[#121212]'>
        <div className=' py-10 font-semibold text-[40px] mb-4'>
            <h1>
            Start Contributing Today!
            </h1>
        </div>
        <p className=' text-center text-xl'>
        Your skills deserve recognition. Join GitCode and start making an
        <br />
         impact.
        </p>

        <button
        className="mt-8 sm:mt-12 rounded-full text-white hover:text-black font-medium px-6 sm:px-9 py-2 duration-300 hover:bg-white bg-blue-600 text-sm sm:text-base relative z-20"
        onClick={() => router.push('/')} // Redirects to the landing page

        >
        Start Contributing
        </button>
    </div>
  )
}

export default StartToday
