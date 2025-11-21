import React from "react";

function CardO2({
  image,
  title,
  description,
  buttonText = "Explore",
  onPrev,
  onNext,
  page = "01/04",
}) {
  return (
    <div className="relative 
        
        origin-center 
        w-full flex justify-center">

      {/* SVG Border */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[320px] h-[290px] sm:w-[450px] sm:h-[300px] lg:w-[2980px] lg:h-[655px] md:w-[1880px] md:h-[355px]"
        viewBox="0 0 1600 755"
        fill="none"
      >
        <rect
          x="1.5"
          y="1.5"
          width="1597"
          height="752"
          rx="90.5"
          fill="white"
          fillOpacity="0.05"
          stroke="url(#paint0_linear_11_187)"
          strokeWidth="3"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11_187"
            x1="29.5"
            y1="43"
            x2="1571"
            y2="726.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.44" />
            <stop offset="0.385" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.33" />
          </linearGradient>
        </defs>
      </svg>

      {/* CONTENT */}
      <div
        className="
        absolute inset-0 
        flex flex-col items-center 
        justify-center 
        p-4
        origin-center
        md:flex-row
      "
      >
        {/* Image */}
        <div className="relative top-0">
        <img
          src={image}
          alt="plant"
          className="w-[130px] sm:w-[180px] md:w-[400px] lg:w-[780px] drop-shadow-xl -mt-28 md:-mt-14 sm:-mt-36 lg:-ml-24"
        />
        </div>
        <div className="md:flex md:flex-col md:gap-8">
        <h2 className="text-[10px] sm:text-lg lg:text-3xl md:text-base font-semibold mt-1 text-white ">
          {title}
        </h2>

        <p className="text-white/80 lg:text-xl font-semibold  md:whitespace-pre-line lg:whitespace-pre-line text-[8px] md:text-[13px] md:pr-16 lg:pr-3 sm:text-[12px] text-center px-2 mt-0 w-[250px] sm:w-[420px] md:w-[390px] lg:w-[600px]">
          {description}
        </p>

        <div className="flex gap-6 sm:gap-40 md:gap-44 lg:gap-64">
        <button className="px-2 py-1 mt-1 border rounded-md text-zinc-300 hover:bg-white/10 transition text-[8px] sm:text-xs lg:text-[25px] lg:py-4
         lg:px-14">
          {buttonText}
        </button>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 pt-0">
          <button
            onClick={onPrev}
            className="text-white text-xl hover:text-white/70 lg:text-3xl"
          >
            &#8249;
          </button>

          <span className="text-white/80 text-[8px] sm:text-xs lg:text-xl">{page}</span>

          <button
            onClick={onNext}
            className="text-white text-xl hover:text-white/70 lg:text-3xl"
          >
            &#8250;
          </button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CardO2;
