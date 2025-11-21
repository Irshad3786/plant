import React from "react";

function Card({ name, image, rating, text }) {
  // Generate stars including half stars
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="relative w-[250px] h-[250px]  lg:w-[360px] lg:h-[360px] ">

      {/* Glass SVG Background */}
      <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-1 lg:w-[360px] lg:h-[360px] w-60 h-60"  viewBox="0 0 549 507" fill="none" > <foreignObject x="-6.6" y="-15.6001" width="562" height="522.555" > <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: "blur(12.5px)", clipPath: "url(#bgblur_0_11_150_clip_path)", height: "100%", width: "100%", }} ></div> </foreignObject> <g filter="url(#filter0_d_11_150)" data-figma-bg-blur-radius="25"> <path d="M18.4 87.7244C18.4 41.0784 59.5363 5.02568 105.934 9.82989C157.814 15.2018 223.208 20.6714 274.4 20.6714C325.592 20.6714 390.986 15.2018 442.866 9.82989C489.264 5.02568 530.4 41.0784 530.4 87.7244V402.555C530.4 445.081 495.926 479.555 453.4 479.555H95.4C52.8741 479.555 18.4 445.081 18.4 402.555V87.7244Z" fill="white" fillOpacity="0.05" shapeRendering="crispEdges" /> <path d="M442.968 10.8242C488.794 6.07923 529.4 41.6895 529.4 87.7246V402.555C529.4 444.528 495.374 478.555 453.4 478.555H95.4C53.4264 478.555 19.4 444.528 19.4 402.555V87.7246C19.4 41.6895 60.0056 6.07923 105.832 10.8242C157.718 16.1967 223.154 21.6719 274.4 21.6719C325.646 21.6719 391.082 16.1967 442.968 10.8242Z" stroke="url(#paint0_linear_11_150)" strokeWidth="2" shapeRendering="crispEdges" /> </g> <defs> <filter id="filter0_d_11_150" x="-6.6" y="-15.6001" width="562" height="522.555" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" > <feFlood floodOpacity="0" result="BackgroundImageFix" /> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /> <feOffset dy="9" /> <feGaussianBlur stdDeviation="9.2" /> <feComposite in2="hardAlpha" operator="out" /> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" /> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_150" /> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_150" result="shape" /> </filter> <clipPath id="bgblur_0_11_150_clip_path" transform="translate(6.6 15.6001)" > <path d="M18.4 87.7244C18.4 41.0784 59.5363 5.02568 105.934 9.82989C157.814 15.2018 223.208 20.6714 274.4 20.6714C325.592 20.6714 390.986 15.2018 442.866 9.82989C489.264 5.02568 530.4 41.0784 530.4 87.7244V402.555C530.4 445.081 495.926 479.555 453.4 479.555H95.4C52.8741 479.555 18.4 445.081 18.4 402.555V87.7244Z" /> </clipPath> <linearGradient id="paint0_linear_11_150" x1="30.4" y1="44.6479" x2="325.683" y2="547.273" gradientUnits="userSpaceOnUse" > <stop stopColor="white" stopOpacity="0.2" /> <stop offset="0.52" stopOpacity="0" /> <stop offset="1" stopColor="white" stopOpacity="0.2" /> </linearGradient> </defs> </svg>

      {/* Content Layer */}
      <div className="relative z-10  px-8 py-4 pt-5">

        <div className="flex items-center gap-4 mb-4 pt-4 lg:pt-14 lg:pl-6">
          <img src={image} alt="profile" className="w-9 h-9 rounded-full object-cover lg:w-12 lg:h-12" />

          <div>
            <h2 className="text-white text-md font-semibold lg:text-2xl lg:px-2">{name}</h2>

            <div className="text-yellow-400 text-sm flex items-center gap-0.5 lg:pl-3">
              {Array(fullStars).fill(0).map((_, i) => (
                <span key={i}>★</span>
              ))}
              {hasHalf && (
                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[2.6px]" width="14" height="14" viewBox="0 0 24 24">
                  <path fill="#FACC15" d="M12 2L9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27z" />
                </svg>
              )}
            </div>
          </div>
        </div>

        <p className="text-white/70 text-xs leading-relaxed lg:text-[15px] lg:pt-5 lg:pl-7">{text}</p>
      </div>

    </div>
  );
}

export default Card;
