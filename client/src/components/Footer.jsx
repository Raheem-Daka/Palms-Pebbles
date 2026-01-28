import React, { useEffect, useState } from 'react'
import palms_logo from "../assets/palms_logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(()=> {
    setCurrentYear(new Date().getFullYear());
  })

  return (
    <div className="">
      <footer class='border-t bg-blur py-12 px-4 sm:px-6 lg:px-8'>
          <div class='w-full max-w-7xl mx-auto'>

              <div class="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">

                  <div class="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex flex-col items-center">
                      <a href="/" >
                        <img
                            src={palms_logo}
                            alt="Palms & Pebbles"
                            className={`
                            h-12 w-16
                            sm:h-10 sm:w-10
                            md:h-14 md:w-14
                            lg:h-18 lg:w-18
                            object-contain
                            `}
                        />

                        <p
                        className={`
                            sm:text-lg
                            md:text-xl
                            lg:text-2xl
                            font-semibold
                            font-playfair
                        `}
                        >
                        Palms & Pebbles
                        </p>
                      </a>
                    </div>
                    <div class='w-full max-w-3/4 h-px mt-3 bg-linear-to-r from-black to-black'></div>
                      <p class=' mt-2 max-w-sm leading-relaxed font-playfair'>
                      Palms & Pebbles Lodge offers a serene retreat for guests seeking comfort and tranquility. Our lodge features beautifully designed rooms and exceptional service, ensuring a memorable stay amidst nature's beauty. Whether you're here for a peaceful getaway or an adventure, Palms & Pebbles Lodge provides the perfect blend of relaxation and hospitality.
                      </p>
                  </div>

                  <div class="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                      <h3 class='font-medium underline font-playfair'>Important Links</h3>
                      <div class="flex flex-col gap-2 mt-6">
                          <Link to="/" class='hover:underline transition-colors font-playfair'>Home</Link>
                          <Link to="/rooms" class='hover:underline transition-colors font-playfair'>Rooms</Link>
                          <Link to="/about" class='hover:underline transition-colors font-playfair'>About</Link>
                          <Link to="/contact" class='hover:underline transition-colors font-playfair'>Contact</Link>
                      </div>
                  </div>

                  <div class="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                      <h3 class='font-medium underline font-playfair'>Social Links</h3>
                      <div class="flex flex-col gap-2 mt-6">
                          <a href="#" class='hover:transition transition-colors font-playfair'>Twitter</a>
                          <a href="#" class='hover:transition transition-colors font-playfair'>Instagram</a>
                          <a href="#" class='hover:transition transition-colors font-playfair'>Youtube</a>
                          <a href="#" class='hover:transition transition-colors font-playfair'>Linkedin</a>
                      </div>
                  </div>

                  <div class="hidden w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
                      <h3 class='font-medium font-playfair'>Subscribe for news</h3>
                      <div class="flex items-center border gap-2 h-13 max-w-80 w-full rounded-xl overflow-hidden mt-4">
                          <input type="email" placeholder="Enter your email.." class="w-full h-full pl-6 outline-none text-sm bg-transparent placeholder:text-xs font-playfair" required />
                          <button type="submit" class="bg-gray-800 active:scale-95 transition w-56 h-10 rounded-xl text-sm text-white cursor-pointer mr-1.5 font-playfair">Subscribe</button>
                      </div>
                  </div>

              </div>

              <div class='w-full h-px mt-16 mb-4 bg-linear-to-r from-black to-black'></div>

              <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                  <p className="font-playfair">© {currentYear} Palms & Pebbles</p>
              </div>
          </div>
      </footer>    
    </div>
  )
}

export default Footer