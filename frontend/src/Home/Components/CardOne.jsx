import React from "react";

function CardOne({ children, className = "" }) {
  return (
    <div className={`relative w-[340px] h-[460px] ${className}`}>

      {/* --- Hidden SVG defs for clipPath & gradient --- */}
      <svg width="0" height="0" className="absolute">
        <defs>

          {/* CLIP PATH */}
          <clipPath id="curvedClip" clipPathUnits="objectBoundingBox">
            <path d="
              M0.001,0.099
              C0.001,0.034,0.079,-0.012,0.155,0.004
              C0.260,0.026,0.400,0.049,0.511,0.048
              C0.613,0.047,0.742,0.025,0.840,0.004
              C0.916,-0.012,0.999,0.034,0.999,0.099
              V0.902
              C0.999,0.963,0.945,1,0.883,1
              H0.117
              C0.055,1,0.001,0.963,0.001,0.902
              V0.099Z
            " />
          </clipPath>

          {/* BORDER GRADIENT */}
          <linearGradient id="curvedBorder" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
          </linearGradient>

        </defs>
      </svg>

      {/* --- OUTER BORDER SHAPE --- */}
      <svg
        viewBox="0 0 512 624"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <path
          d="
            M0.5 62.2176
            C0.5 21.6647 40.3416 -7.51038 79.6914 2.46959
            C133.868 16.2101 205.805 30.9338 263.007 30.1571
            C315.825 29.4399 381.619 15.6258 432.31 2.6317
            C471.644 -7.45135 511.5 21.6941 511.5 62.2587
            V563.157
            C511.5 596.018 484.861 622.657 452 622.657
            H60
            C27.1391 622.657 0.5 596.018 0.5 563.157
            V62.2176Z
          "
          fill="rgba(255,255,255,0.05)"
          stroke="url(#curvedBorder)"
        />
      </svg>

      {/* --- INNER BLUR AREA --- */}
      <div
        className="
          w-full h-full
          p-6
          flex flex-col justify-end gap-4
          bg-white/10 backdrop-blur-xl
        "
        style={{
          clipPath: "url(#curvedClip)",
          WebkitClipPath: "url(#curvedClip)",
        }}
      >
        {children}
      </div>

    </div>
  );
}

export default CardOne;
