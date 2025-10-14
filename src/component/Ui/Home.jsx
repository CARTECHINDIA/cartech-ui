import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSlidersH } from "react-icons/fa";
import car1 from "../../assets/2149117150.jpg";
import car2 from "../../assets/15135.jpg";
import car3 from "../../assets/2149434338.jpg";

const slides = [
  {
    image: car1,
    title: "Find A Car At The",
    highlight: "BEST PRICE!",
    description: "The Best Place to Find Great Used Cars",
  },
  {
    image: car2,
    title: "Drive Your Dream",
    highlight: "TODAY!",
    description: "Discover premium cars at unbeatable deals",
  },
  {
    image: car3,
    title: "Get Ready To",
    highlight: "RIDE IN STYLE!",
    description: "Top-quality cars with top-rated performance",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <div className="relative w-full h-[65vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
        {/* Image Transition */}
        <AnimatePresence>
          <motion.img
            key={currentSlide.image}
            src={currentSlide.image}
            alt="Car slide"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/70 via-transparent to-transparent"></div>

        {/* Text Section */}
        <div className="absolute inset-0 z-30 flex flex-col justify-center px-4 sm:px-8 md:px-20 text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg sm:text-2xl md:text-3xl mb-2 italic">
                {currentSlide.title}
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
                <span className="text-white">{currentSlide.highlight.split(" ")[0]} </span>
                <span className="text-[#0463F0]">
                  {currentSlide.highlight.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200 max-w-lg leading-relaxed">
                {currentSlide.description.includes("Used Cars") ? (
                  <>
                    The Best Place to Find Great{" "}
                    <span className="text-[#0463F0] font-semibold">Used Cars</span>
                  </>
                ) : (
                  currentSlide.description
                )}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Search Filter Section */}
      <div className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%] md:w-[75%] bg-white shadow-2xl rounded-lg py-6 sm:py-8 px-4 sm:px-8 md:px-10 z-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 items-center">
          {/* Type */}
          <div>
            <label className="text-gray-500 text-sm font-medium">Select Type</label>
            <select className="w-full mt-2 border border-gray-200 rounded-md px-3 sm:px-4 py-2 font-semibold text-gray-700 focus:ring-2 focus:ring-[#0463F0] focus:outline-none">
              <option>- Type -</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Hatchback</option>
              <option>Luxury</option>
            </select>
          </div>

          {/* Maker */}
          <div>
            <label className="text-gray-500 text-sm font-medium">Select Maker</label>
            <select className="w-full mt-2 border border-gray-200 rounded-md px-3 sm:px-4 py-2 font-semibold text-gray-700 focus:ring-2 focus:ring-[#0463F0] focus:outline-none">
              <option>- Maker -</option> 
              <option>Toyota</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Mercedes</option>
            </select>
          </div>

          {/* Button */}
          <div className="sm:col-span-2 md:col-span-1 flex justify-center md:justify-end mt-2 sm:mt-6">
            <button className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#0463F0] hover:bg-[#034dc1] text-white font-semibold py-3 px-6 rounded-md transition-all">
              <FaSlidersH />
              FIND MY CAR
            </button>
          </div>
        </div>
      </div>

      {/* Add some bottom spacing so next section doesn't overlap */}
      <div className="h-36 md:h-0"></div>
    </div>
  );
};

export default Home;
