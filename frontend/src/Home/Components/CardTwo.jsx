import React from 'react'

function CardTwo({ children }) {
  return (
     <div className="relative w-[250px] h-[200px] lg:w-[350px] lg:h-[250px]">
      {/* Glass SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 409 237"
        fill="none"
      >
        <foreignObject x="-17" y="-17" width="443" height="271">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              backdropFilter: "blur(8.5px)",
              WebkitBackdropFilter: "blur(8.5px)",
              clipPath: "url(#bgblur_0_11_38_clip_path)",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </foreignObject>

        <rect
          x="0.5"
          y="0.5"
          width="408"
          height="236"
          rx="44.5"
          fill="white"
          fillOpacity="0.05"
          stroke="url(#paint0_linear_11_38)"
        />

        <defs>
          <clipPath id="bgblur_0_11_38_clip_path" transform="translate(17 17)">
            <rect x="0.5" y="0.5" width="408" height="236" rx="44.5" />
          </clipPath>

          <linearGradient
            id="paint0_linear_11_38"
            x1="0"
            y1="0"
            x2="390"
            y2="237"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.428969" stopColor="#666666" />
          </linearGradient>
        </defs>
      </svg>    

      <div className="pt-4 relative z-20 left-4 top-10 lg:left-6">
        <img src="girl.png" className="w-8 h-8 lg:w-14 lg:h-14 rounded-full object-cover"/>
    </div>
      {/* Children inserted here */}
      <div className="absolute inset-1 pt-6">
        {children}
      </div>

      <div>

      </div>
    </div>
  )
}

export default CardTwo