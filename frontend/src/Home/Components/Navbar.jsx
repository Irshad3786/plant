import React from 'react'




function Navbar() {

  const MySvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <rect opacity="0.75" width="26" height="26" fill="url(#pattern0_11_15)" />

      <defs>
        <pattern
          id="pattern0_11_15"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_11_15"
            transform="scale(0.00195312)"
          />
        </pattern>

        <image
          id="image0_11_15"
          width="512"
          height="512"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0K..."
        />
      </defs>
    </svg>
  );
};



  
  return (
    <div>
        <div className='flex justify-between gap-5 items-center px-5 py-6 pr-10'>
            <div className='flex gap-1'>
                
                <svg xmlns="http://www.w3.org/2000/svg" className='block md:hidden' width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#FFFFFF" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"/></g></svg>
                <div className='flex  items-center gap-1'>
                    <img src="./plant.png" alt="" srcset="" className='md:w-10 w-6' />
                    <h1 className='font-extrabold text-white font-Inter opacity-75 sm:text-[20px] md:text-[28px]'>FloraVision.</h1>
                </div>
            </div>
            
            <div>
              <ul className='hidden md:flex justify-between items-center lg:gap-12 md:gap-4 text-white font-Indie md:text-[18px] lg:text-[20px] font-normal'>
                <li>Home</li>
                <li className='flex justify-center items-center gap-2'>Plants Type
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32"><path fill="#FFFFFF" d="M8.037 11.166L14.5 22.36c.825 1.43 2.175 1.43 3 0l6.463-11.195c.826-1.43.15-2.598-1.5-2.598H9.537c-1.65 0-2.326 1.17-1.5 2.6z"/></svg>
                </li>
                <li>More</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className='flex  gap-4 md:gap-12' >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#d0d1cf" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#d0d1cf" d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3m7 17H5V8h14zm-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3"/></svg>
                <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ transform: "scaleX(-1)" }}
            >
              <path
                fill="none"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 9h16 M4 18h10"
              />
            </svg>

            </div>
        </div>

    </div>
  )
}

export default Navbar