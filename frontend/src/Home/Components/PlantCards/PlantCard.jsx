import React from 'react'

function PlantCard({ reverse = false,
  image = PlantImg,
  title,
  description,
  price,
  children,
  className = "",
  ...props }) {
  return (
     <div className={`relative w-full ${className}`} {...props}>
      {/* SVG Glass Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1619 526"
        fill="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <foreignObject x={-40} y={-40} width={1699} height={606}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              clipPath: "url(#bgblur_0_11_62_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>

        <rect
          x={1}
          y={1}
          width={1617}
          height={524}
          rx={150}
          fill="white"
          fillOpacity={0.05}
          stroke="url(#paint0_linear_11_62)"
          strokeWidth={2}
        />

        <defs>
          <clipPath id="bgblur_0_11_62_clip_path" transform="translate(40 40)">
            <rect x={1} y={1} width={1617} height={524} rx={150} />
          </clipPath>

          <linearGradient
            id="paint0_linear_11_62"
            x1="83.9"
            y1="62"
            x2="337"
            y2="861"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity={0.27} />
            <stop offset={0.615} stopColor="white" stopOpacity={0} />
            <stop offset={1} stopColor="white" stopOpacity={0.33} />
          </linearGradient>
        </defs>
      </svg>

      {/* CONTENT */}
      <div
        className={`relative z-10 flex  
        ${reverse ? "flex-row-reverse" : "flex-row"}
        `}
      >
        {/* IMAGE */}
        <img src={image} alt="" className="w-[50%] h-[80%] object-contain -mt-10 md:-mt-28 lg:-mt-36" />

        {/* TEXT */}
       <div className="w-[50%] text-white pl-5 flex justify-center flex-col lg:pl-20">
  <h2 className="text-[8px] font-semibold md:text-[16px] lg:text-[30px] ">{title}</h2>

  <p className="text-white/80 text-[6px] pr-2 md:text-[12px] lg:text-[20px] lg:mt-4">{description}</p>

  <h3 className="text-[8px] font-semibold md:text-[16px] lg:text-[32px] lg:mt-4">Rs. {price}/-</h3>

  {/* Button + Icon container */}
  <div className="flex items-center gap-2 lg:gap-3 lg:mt-2">
    <button className="w-fit px-4 py-1 md:px-6 md:py-2 text-[5px] md:text-[10px]  lg:text-[16px] md:mt-2 border border-white text-white rounded-md opacity-90">
      Buy Now
    </button>

    <svg
      xmlns="http://www.w3.org/2000/svg"
        className='w-5 h-5 md:w-10 md:h-10 md:pt-1 lg:w-12 lg:h-12'
      viewBox="0 0 80 80"
      fill="none"
    >
      {/* Rounded Square */}
      <rect
        x="2"
        y="2"
        width="76"
        height="76"
        rx="16"
        stroke="white"
        strokeWidth="3"
      />

      {/* Centered Bag Icon */}
      <g transform="translate(21, 20) scale(1.6)">
        <path
          fill="#d0d1cf"
          d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3m7 17H5V8h14zm-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3"
        />
      </g>
    </svg>
  </div>



          {children}
        </div>
      </div>
    </div>
  )
}

export default PlantCard