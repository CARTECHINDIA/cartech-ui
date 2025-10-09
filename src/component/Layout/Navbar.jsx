import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaUserCircle,
  FaSearch
} from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdLocationOn,
  MdArrowOutward,
  MdClose
} from "react-icons/md";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCityDialog, setShowCityDialog] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Noida");
  const [activeCategory, setActiveCategory] = useState("Browse by Model");

  const categories = [
    "Browse by Model",
    "Browse by Make",
    "Browse by Price",
    "Browse by Body Type",
    "Browse by Fuel Type",
    "Browse by Transmission",
    "Browse by City",
  ];

  const carData = {
    "Browse by Model": [
      "Used Hyundai i10 Cars in Noida",
      "Used Renault Kwid Cars in Noida",
      "Used Maruti Baleno Cars in Noida",
      "Used Honda Amaze Cars in Noida",
      "Used Maruti Wagon R Cars in Noida",
      "Used Tata NEXON Cars in Noida",
    ],
    "Browse by Make": [
      "Used Maruti Cars in Noida",
      "Used Hyundai Cars in Noida",
      "Used Tata Cars in Noida",
      "Used Honda Cars in Noida",
      "Used Toyota Cars in Noida",
      "Used Mahindra Cars in Noida",
    ],
    "Browse by Price": [
      "Cars under ₹3 Lakh",
      "Cars under ₹5 Lakh",
      "Cars under ₹7 Lakh",
      "Cars under ₹10 Lakh",
      "Cars under ₹15 Lakh",
      "Cars above ₹15 Lakh",
    ],
    "Browse by Body Type": [
      "Used Hatchback Cars in Noida",
      "Used Sedan Cars in Noida",
      "Used SUV Cars in Noida",
      "Used MUV Cars in Noida",
      "Used Coupe Cars in Noida",
      "Used Convertible Cars in Noida",
    ],
    "Browse by Fuel Type": [
      "Used Petrol Cars in Noida",
      "Used Diesel Cars in Noida",
      "Used CNG Cars in Noida",
      "Used Electric Cars in Noida",
      "Used LPG Cars in Noida",
    ],
    "Browse by Transmission": [
      "Used Manual Cars in Noida",
      "Used Automatic Cars in Noida",
    ],
    "Browse by City": [
      "Used Cars in Delhi",
      "Used Cars in Mumbai",
      "Used Cars in Chennai",
      "Used Cars in Pune",
      "Used Cars in Bangalore",
    ],
  };

  const popularCities = [
    "Delhi NCR", "Bangalore", "Mumbai", "Hyderabad", "Ahmedabad",
    "Chennai", "Pune", "New Delhi", "Gurgaon", "Noida", "Ghaziabad",
    "Lucknow", "Jaipur", "Kolkata", "Kochi", "Nashik", "Nagpur",
    "Coimbatore", "Indore", "Patna", "Chandigarh", "Surat", "Ludhiana"
  ];

  return (
    <>
      <nav className="w-full bg-white shadow-md flex items-center justify-between px-8 py-3 relative z-50">
  
        <div className="flex items-center gap-12">
          <img
            src="https://www.cars24.com/js/ccv2.0.0/images/CARS24_logo.svg"
            alt="Logo"
            className="h-12"
          />
 
          <div
            onClick={() => setShowCityDialog(true)}
            className="flex items-center bg-gray-50 rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-100 transition"
          >
            <MdLocationOn className="text-blue-600 text-xl" />
            <span className="text-gray-700 text-sm font-medium mx-1">{selectedCity}</span>
            <MdKeyboardArrowDown className="text-gray-600" />
          </div>
        </div>

   
        <div className="hidden md:flex ml-2 items-center gap-6 text-sm font-medium text-gray-800 relative flex-1">
          <div
            className="relative group flex items-center gap-1 cursor-pointer hover:text-blue-600 transition"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span>Buy used car</span>
            <MdKeyboardArrowDown className="text-gray-500 text-lg" />

            {showDropdown && (
              <div className="absolute top-8 right-0 -left-12 w-[1200px] bg-white shadow-2xl rounded-b-2xl border-t border-gray-200 z-50 py-8 px-12">
                <div className="flex items-start gap-10 max-w-[900px] mx-auto">
          
                  <div className="w-1/3 bg-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-gray-900 text-[16px]">
                        Buy Used Cars in {selectedCity}
                      </h3>
                      <button
                        className="text-[#0463F0] text-sm font-semibold hover:underline"
                        onClick={() => setShowCityDialog(true)}
                      >
                        Change
                      </button>
                    </div>

                    <ul className="space-y-2 text-[15px]">
                      {categories.map((item, idx) => (
                        <li
                          key={idx}
                          onMouseEnter={() => setActiveCategory(item)}
                          className={`flex justify-between items-center px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            activeCategory === item
                              ? "bg-[#0463F0]/10 text-[#0463F0] font-semibold"
                              : "hover:bg-[#0463F0]/5 text-gray-700"
                          }`}
                        >
                          {item}
                          <MdKeyboardArrowDown
                            className={`text-lg transition ${
                              activeCategory === item ? "text-[#0463F0]" : "text-gray-400"
                            }`}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

             
                  <div className="flex-1 grid grid-cols-2 gap-3">
                    {carData[activeCategory]?.map((car, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-gray-800 hover:text-[#0463F0] cursor-pointer transition-all duration-200 bg-gray-50 hover:bg-[#0463F0]/10 rounded-lg px-4 py-2"
                      >
                        <span className="truncate">{car}</span>
                        <MdArrowOutward className="text-[#0463F0] text-sm ml-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

      
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 shadow-sm focus-within:border-[#0463F0]  transition flex-1 max-w-xl">
            <FaSearch className="text-gray-400 text-sm mr-2" />
            <input
              type="text"
              placeholder="Search your favourite cars..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
            <button className="bg-[#0463F0]  text-white p-2 rounded-full transition">
              <FaSearch className="text-sm" />
            </button>
          </div>
        </div>
 
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            <FaPhoneAlt className="text-sm" />
            <span className="text-sm font-medium">Call us</span>
          </button>

          <div className="flex items-center gap-2 border-l pl-4">
            <FaUserCircle className="text-2xl text-gray-600" />
            <div className="text-sm">
              <p className="text-gray-500">Hello, Sign in</p>
              <div className="flex items-center gap-1 font-medium text-gray-800 cursor-pointer hover:text-blue-600">
                <span>Account</span>
                <MdKeyboardArrowDown className="text-gray-500 text-lg" />
              </div>
            </div>
          </div>
        </div>
      </nav>

    
      {showCityDialog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-[900px] max-h-[80vh] overflow-y-auto p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Select your city</h2>
              <MdClose
                className="text-2xl text-gray-600 cursor-pointer hover:text-black"
                onClick={() => setShowCityDialog(false)}
              />
            </div>

            <input
              type="text"
              placeholder="Search for your city"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-5 outline-none focus:border-blue-500"
            />

            <h3 className="font-medium text-gray-700 mb-3">Popular cities</h3>
            <div className="grid grid-cols-4 gap-4">
              {popularCities.map((city, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedCity(city);
                    setShowCityDialog(false);
                  }}
                  className={`border rounded-lg cursor-pointer hover:shadow-md transition p-3 text-center text-sm ${
                    selectedCity === city
                      ? "border-blue-600 bg-blue-50 text-blue-600 font-semibold"
                      : "border-gray-200 text-gray-700"
                  }`}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
