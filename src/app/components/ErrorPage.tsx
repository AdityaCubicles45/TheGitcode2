import React from 'react';

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black text-white text-center font-sans'>
      <div className='relative flex flex-col items-center justify-center'>
        <p className='absolute text-[200px] font-bold z-10 opacity-20'>404</p>
        <div className='absolute w-full z-30 flex justify-between items-center mt-16'>
          <div className='w-1/4 h-[2px] bg-white opacity-50'></div>
          <span className='w-1/4 h-[2px] bg-white opacity-50'></span>
        </div>
      </div>
      <div className='text-lg opacity-50 mt-24'>Sorry, Page not found!</div>
    </div>
  );
};

export default ErrorPage;
