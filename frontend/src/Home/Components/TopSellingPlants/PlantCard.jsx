import React from "react";

function PlantCard({ image, title, description, price }) {
  return (
    <div className="relative w-[280px] lg:w-[380px] lg:h-[300px] h-[250px] flex items-center justify-center mb-40 mt-6">

      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="549"
      height="668"
      viewBox="0 0 549 668"
      fill="none"
      
    >
      <foreignObject
        x="-6.6"
        y="-15.5999"
        width="562"
        height="682.87"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: "blur(12.5px)",
            clipPath: "url(#bgblur_0_11_82_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>

      <g
        filter="url(#filter0_d_11_82)"
        data-figma-bg-blur-radius="25"
      >
        <path
          d="M18.4 88.1764C18.4 40.1213 61.9673 3.62113 109.575 10.1595C160.848 17.2011 224.399 24.2022 274.4 24.2022C324.401 24.2022 387.952 17.2011 439.225 10.1595C486.833 3.62113 530.4 40.1213 530.4 88.1764V562.871C530.4 605.397 495.926 639.871 453.4 639.871H95.4C52.8741 639.871 18.4 605.397 18.4 562.871V88.1764Z"
          fill="white"
          fillOpacity="0.05"
          shapeRendering="crispEdges"
        />

        <path
          d="M439.361 11.1499C486.394 4.69078 529.4 40.7534 529.4 88.1763V562.871C529.4 604.844 495.374 638.871 453.4 638.871H95.4C53.4264 638.871 19.4 604.844 19.4 562.871V88.1763C19.4001 40.7534 62.4061 4.69078 109.439 11.1499C160.72 18.1927 224.327 25.2026 274.4 25.2026C324.473 25.2026 388.08 18.1927 439.361 11.1499Z"
          stroke="url(#paint0_linear_11_82)"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>

      <defs>
        <filter
          id="filter0_d_11_82"
          x="-6.6"
          y="-15.5999"
          width="562"
          height="682.87"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="9" />
          <feGaussianBlur stdDeviation="9.2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_11_82"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_11_82"
            result="shape"
          />
        </filter>

        <clipPath id="bgblur_0_11_82_clip_path" transform="translate(6.6 15.5999)">
          <path d="M18.4 88.1764C18.4 40.1213 61.9673 3.62113 109.575 10.1595C160.848 17.2011 224.399 24.2022 274.4 24.2022C324.401 24.2022 387.952 17.2011 439.225 10.1595C486.833 3.62113 530.4 40.1213 530.4 88.1764V562.871C530.4 605.397 495.926 639.871 453.4 639.871H95.4C52.8741 639.871 18.4 605.397 18.4 562.871V88.1764Z" />
        </clipPath>

        <linearGradient
          id="paint0_linear_11_82"
          x1="30.4"
          y1="56.3706"
          x2="471.4"
          y2="615.871"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="0.52" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>


      <div className="absolute  px-10 text-white w-full ">


        <img
          src={image}
          className="w-25 mx-auto drop-shadow-xl -mt-36"
          alt={title}
        />


        <h2 className="text-lg lg:text-2xl font-normal text-white/70 pt-10">{title}</h2>


        <p className="text-white/70 text-[13.2px] leading-1 mt-1">{description}</p>


        <div className="flex justify-between items-center mt-1 pr-4">

          <h3 className="text-lg font-normal text-white/70 lg:text-2xl">Rs. {price}/-</h3>


          <div className="cursor-pointer active:scale-95 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8 "
              viewBox="0 0 80 80"
              fill="none"
            >
              <rect
                x="2"
                y="2"
                width="76"
                height="76"
                rx="16"
                stroke="#a1a1a1"
                strokeWidth="3"
              />

              <g transform="translate(21, 20) scale(1.6)">
                <path
                  fill="#a1a1a1"
                  d="M19 6h-2c0-2.8-2.2-5-5-5S7 3.2 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.7 0 3 1.3 3 3H9c0-1.7 1.3-3 3-3m7 17H5V8h14zm-7-8c-1.7 0-3-1.3-3-3H7c0 2.8 2.2 5 5 5s5-2.2 5-5h-2c0 1.7-1.3 3-3 3"
                />
              </g>
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PlantCard;
