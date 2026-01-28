import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 x:px-32 text-white bg-[url("/src/assets/heroImage2.jpeg")] bg-blend-overlay bg-black/70 bg-no-repeat bg-center bg-cover h-screen '>
        <p className="bg-[#49B9FF]/50 px-3 py-1 rounded-full">The Ultimate Accomadation Experience</p>
        <h1 className="font-playfair text-2xl md:text-5xl lg:text-7xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4 w-full ">
            Welcome to Palms & Pebbles lodge
        </h1>
        <p className="italic font-playfair max-w-130 mt-2 text-4xl md:text-2xl">
            A Stay That Exceeds Expectations</p>
    </div>
  )
}

export default Hero