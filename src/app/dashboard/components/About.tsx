import React from 'react'

const About = () => {
  return (
    <div className=' h-screen w-full bg-[#121212] text-white flex items-center justify-center'>
        <div className=' bg-white/5 h-[60%] w-[65%] rounded-full flex flex-col items-center justify-center'>
            <h1 className=' text-4xl font-semibold mb-12'> About</h1>
            <div className='w-[60%] h-1/2 text-center text-[20px]'>
            <p>GitCode is an open-source collaboration platform where developers contribute to projects, earn rewards, and build their professional reputation. By bridging contributors with maintainers and companies, GitCode transforms coding efforts into real-world value, making open-source more rewarding and accessible.</p>
            </div>
        </div>
    </div>
  )
}

export default About