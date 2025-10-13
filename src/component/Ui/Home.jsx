import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSlidersH } from "react-icons/fa";
import car1 from "../../assets/2149117150.jpg";
import car2 from "../../assets/15135.jpg";
import car3 from "../../assets/2149434338.jpg";

// Define each slide with image + text
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

  // Auto change slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
 <div className="relative z-10">
    <div className="relative w-full h-[75vh] overflow-hidden">
      {/* Background Image Slider */}
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

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Diagonal Gradient Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/70 via-transparent to-transparent clip-diagonal"></div>

      {/* Text Content */}
      <div className="absolute inset-0 z-30 flex flex-col justify-center px-6 md:px-20 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl md:text-3xl mb-2 italic">{currentSlide.title}</p>
            <h1 className="text-5xl md:text-7xl font-extrabold">
              <span className="text-white">{currentSlide.highlight.split(" ")[0]} </span>
              <span className="text-[#0463F0]">{currentSlide.highlight.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="mt-6 text-sm md:text-lg text-gray-200 max-w-lg">
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

      {/* Bottom Search Filter */}
     
    </div>
     <div className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 w-[95%] md:w-[75%] bg-white shadow-xl rounded py-8 px-6 md:px-10 z-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Status */}
         

          {/* Type */}
          <div>
            <label className="text-gray-500 text-sm font-medium">Select Type</label>
            <select className="w-full mt-2 border border-gray-200 rounded-md px-4 py-2 font-semibold text-gray-700 focus:ring-2 focus:ring-[#0463F0] focus:outline-none">
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
            <select className="w-full mt-2 border border-gray-200 rounded-md px-4 py-2 font-semibold text-gray-700 focus:ring-2 focus:ring-[#0463F0] focus:outline-none">
              <option>- Maker -</option>
              <option>Toyota</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Mercedes</option>
            </select>
          </div>

          {/* Button */}
          <button className="flex justify-center items-center gap-2 bg-[#0463F0] hover:bg-[#034dc1] text-white font-semibold py-3 rounded-md transition-all mt-6 md:mt-8">
            <FaSlidersH />
            FIND MY CAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
