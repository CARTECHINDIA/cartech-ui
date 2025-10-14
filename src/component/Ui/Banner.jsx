import React from "react";
import banner from "../../assets/15135.jpg";

const customStyles = `
  @media (min-width: 768px) {
    .clip-diagonal {
      clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
    }
  }
  @media (max-width: 767px) {
    .clip-diagonal {
      clip-path: none;
    }
  }
`;

const Banner = () => {
  const primaryColor = "#0463F0";

  return (
    <div className="relative w-full h-[500px] md:h-[400px] overflow-hidden">
      {/* Custom responsive clip shape */}
      <style>{customStyles}</style>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      {/* Overlay with diagonal on desktop */}
      <div className="absolute inset-0 flex items-center justify-start bg-black/60 md:bg-transparent">
        <div className="relative w-full md:w-3/5 h-full clip-diagonal bg-black/60 md:bg-black/60">
          {/* Content */}
          <div className="relative z-10 h-full px-6 sm:px-10 md:px-16 flex flex-col justify-center text-white text-center md:text-left">
            <p className="text-lg sm:text-2xl md:text-3xl font-light mb-2 tracking-wide">
              Quality Cars At Very
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              REASONABLE
            </h1>
            <h2
              className="text-lg sm:text-xl md:text-2xl font-semibold mt-1"
              style={{ color: primaryColor }}
            >
              PRICES
            </h2>
            <p className="max-w-md mx-auto md:mx-0 text-xs sm:text-sm md:text-base mb-8 mt-4 font-extralight italic opacity-90">
              Discover a Car Dealership that cares about our customers and
              provides excellent service.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="w-fit px-6 sm:px-8 py-2 sm:py-3 bg-[#0463F0] text-white font-bold uppercase rounded-lg hover:bg-yellow-500 transition-all duration-300 text-sm sm:text-base">
                TEST DRIVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
