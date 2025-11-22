import React from "react";

function Footer() {
  return (
    <footer className="bg-[#1B2316] text-white px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center gap-2">
            <img src="./plant.png" alt="logo" className="w-12 h-12 lg:w-14 lg:h-14" />
            <h2 className="font-extrabold font-Inter opacity-75 text-2xl sm:text-3xl md:text-4xl">
              FloraVision.
            </h2>
          </div>

          <p className="text-white/100 text-sm sm:text-base md:text-lg mt-4 max-w-sm leading-relaxed">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>

          <div className="md:flex sm:flex justify-between gap-4 pt-20">
            <div className="flex gap-5 mt-6 font-semibold text-sm sm:text-base md:text-lg">
              <span>FB</span>
              <span>TW</span>
              <span>LI</span>
            </div>

           
          </div>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Quick Link's
          </h2>

          <ul className="mt-4 space-y-2 text-white/90 text-sm sm:text-base md:text-lg underline">
            <li><a href="#">Home</a></li>
            <li><a href="#">Type’s Of plant’s</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold ">
            For Every Update.
          </h2>

          <div className="flex mt-4 border border-white rounded-md overflow-hidden w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent px-3 py-2 w-full outline-none text-sm sm:text-base md:text-lg"
            />
            <div className="p-1">
              <button className="bg-white text-black px-4 font-semibold text-sm sm:text-base md:text-lg py-2 rounded-md">
                SUBSCRIBE
              </button>
            </div>
            
          </div>
           <p className="text-start text-white/100 mt-6 text-xs sm:text-sm md:text-base lg:pt-28">
              FloraVision © all right reserve
            </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
