import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdLocationOn,
  MdArrowOutward,
  MdClose,
  MdKeyboardArrowRight,
} from "react-icons/md";
import logo from "../../assets/red-sport-car-logo-vector-icon-negative-space-style.png"

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showCityDialog, setShowCityDialog] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Noida");
  const [activeCategory, setActiveCategory] = useState("Browse by Model");
  const [showDropdown, setShowDropdown] = useState(null);
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
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md flex items-center justify-between px-4 md:px-8 py-3 relative z-20">
        {/* Left Section */}
        <div className="flex items-center gap-4 md:gap-12">
          <img
            src={logo}
            alt="Logo"
            className="h-10 md:h-[70px] object-contain"
          />
          <div
            onClick={() => setShowCityDialog(true)}
            className="flex items-center bg-gray-50 rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-100 transition"
          >
            <MdLocationOn className="text-blue-600 text-xl" />
            <span className="text-gray-700 text-sm font-medium mx-1">
              {selectedCity}
            </span>
            <MdKeyboardArrowDown className="text-gray-600" />
          </div>
        </div>

        {/* Center Section */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800 flex-1 ml-8">
          {/* Buy Used Car Dropdown Trigger */}
          <div
            className="relative flex items-center gap-1 py-3 cursor-pointer hover:text-blue-600 transition"
            onMouseEnter={() => setOpenDropdown("buy")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <span>Buy used car</span>
            <MdKeyboardArrowDown className="text-gray-500 text-lg" />
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 shadow-sm focus-within:border-[#0463F0] transition flex-1 max-w-xl">
            <FaSearch className="text-gray-400 text-sm mr-2" />
            <input
              type="text"
              placeholder="Search your favourite cars..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
            <button className="bg-[#0463F0] text-white p-2 rounded-full transition hover:bg-blue-700">
              <FaSearch className="text-sm" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-5 relative">
          {/* Call Button - Hidden on Mobile */}
          <button className="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            <FaPhoneAlt className="text-sm" />
            <span className="text-sm font-medium">Call us</span>
          </button>

          {/* Account Dropdown Wrapper */}
          <div
            className="relative flex items-center gap-2 md:border-l md:pl-4 cursor-pointer"
            onMouseEnter={() => setShowDropdown("account")}
            onMouseLeave={() => setShowDropdown(null)}
          >
            <FaUserCircle className="text-2xl text-gray-600" />
            <div className="text-sm">
              <p className="text-gray-500">Hello, Sign in</p>
              <div className="flex items-center gap-1 font-medium text-gray-800 hover:text-blue-600">
                <span>Account</span>
                <MdKeyboardArrowDown className="text-gray-500 text-lg" />
              </div>
            </div>

            {/* Dropdown */}
            <div
              className={`fixed md:absolute left-0 right-0 md:left-auto md:right-0 top-16 md:top-full md:mt-5 mt-2 w-full md:w-[350px] max-w-md mx-auto md:mx-0 bg-white shadow-2xl rounded-2xl border border-gray-100 p-6 z-40 transition-all duration-200 ${
                showDropdown === "account"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
              onMouseEnter={() => setShowDropdown("account")}
              onMouseLeave={() => setShowDropdown(null)}
            >
              <h3 className="font-semibold text-gray-800 mb-4 text-[16px]">
                Welcome to CARS
              </h3>

              <div className="space-y-3 text-[15px]">
                <button className="w-full text-center bg-[#0463F0] text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
                  Login
                </button>
                <button className="w-full text-center border border-[#0463F0] text-[#0463F0] py-2.5 rounded-lg font-medium hover:bg-[#0463F0]/10 transition">
                  Sign Up
                </button>
              </div>

              <hr className="my-5 border-gray-200" />

              <ul className="space-y-3 text-gray-700 text-[15px]">
                {[
                  "My Account",
                  "My Bookings",
                  "Sell My Car",
                  "Help & Support",
                  "Logout",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between hover:text-[#0463F0] transition cursor-pointer"
                  >
                    {item} <MdArrowOutward className="text-[#0463F0]" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-gray-200 flex justify-around items-center py-3 md:hidden z-10 rounded-t-2xl">
        {/* City */}
        <div 
          className="flex flex-col items-center text-gray-600 hover:text-[#0463F0] transition cursor-pointer"
          onClick={() => setShowCityDialog(true)}
        >
          <MdLocationOn className="text-2xl" />
          <span className="text-[12px] mt-1">City</span>
        </div>

        {/* Search */}
        <div 
          className="flex flex-col items-center text-gray-600 hover:text-[#0463F0] transition cursor-pointer"
          onClick={() => setShowMobileSearch(true)}
        >
          <FaSearch className="text-lg" />
          <span className="text-[12px] mt-1">Search</span>
        </div>

        {/* Buy Used Car */}
        <div
          className="flex flex-col items-center text-gray-600 hover:text-[#0463F0] transition cursor-pointer"
          onClick={() => setOpenDropdown(openDropdown === "buy" ? null : "buy")}
        >
          <MdKeyboardArrowDown className="text-2xl" />
          <span className="text-[12px] mt-1">Buy</span>
        </div>

        {/* Call */}
        <div className="flex flex-col items-center text-gray-600 hover:text-[#0463F0] transition cursor-pointer">
          <FaPhoneAlt className="text-lg" />
          <span className="text-[12px] mt-1">Call</span>
        </div>

        {/* Account */}
        <div
          className="flex flex-col items-center text-gray-600 hover:text-[#0463F0] transition cursor-pointer"
          onClick={() =>
            setShowDropdown(showDropdown === "account" ? null : "account")
          }
        >
          <FaUserCircle className="text-2xl" />
          <span className="text-[12px] mt-1">Account</span>
        </div>
      </div>

      {/* Buy Used Car Dropdown */}
      {openDropdown === "buy" && (
        <div
          className="fixed md:absolute left-0 right-0 md:top-[72px] top-[72px] bg-white shadow-2xl md:rounded-b-2xl rounded-b-2xl border-t border-gray-200 z-30 py-4 md:py-8 px-4 md:px-12 animate-fadeIn flex flex-col md:flex md:items-start gap-4 md:gap-10"
          onMouseEnter={() => setOpenDropdown("buy")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="flex flex-col md:flex-row md:items-start    md:gap-10  w-full max-w-full mx-auto">
            {/* Left Category */}
            <div className="w-full md:w-[35%] bg-gray-100 rounded-xl p-6 shadow-sm">
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
                {categories.map((item) => (
                  <li
                    key={item}
                    onMouseEnter={() => setActiveCategory(item)}
                    onClick={() => setActiveCategory(item)}
                    className={`flex justify-between items-center px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeCategory === item
                        ? "bg-[#0463F0]/10 text-[#0463F0] font-semibold"
                        : "hover:bg-[#0463F0]/5 text-gray-700"
                    }`}
                  >
                    {item}
                    <MdKeyboardArrowRight
                      className={`text-lg transition ${
                        activeCategory === item
                          ? "text-[#0463F0]"
                          : "text-gray-400"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Car List */}
            <div className="w-full md:w-[65%]  md:flex-1 grid grid-cols-1 md:grid-cols-2 gap-7">
              {carData[activeCategory]?.map((car, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-gray-800 hover:text-[#0463F0] cursor-pointer transition-all duration-200 bg-gray-50 hover:bg-[#0463F0]/10 rounded-lg px-4 py-2  w-full"
                >
                  <span className="truncate">{car}</span>
                  <MdArrowOutward className="text-[#0463F0] text-sm ml-1" />
                </div>
              )) || (
                <p className="text-gray-500 col-span-1 md:col-span-2">No cars available</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* City Dialog */}
      {showCityDialog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
          <div className="bg-white rounded-2xl w-full max-w-md mx-4 md:max-w-4xl md:w-[900px] max-h-[80vh] overflow-y-auto p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Select your city
              </h2>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularCities.map((city) => (
                <div
                  key={city}
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

      {/* Mobile Search Dialog */}
      {showMobileSearch && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-40">
          <div className="bg-white rounded-2xl w-full max-w-md mx-4 p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Search Cars</h2>
              <MdClose
                className="text-2xl text-gray-600 cursor-pointer hover:text-black"
                onClick={() => setShowMobileSearch(false)}
              />
            </div>

            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-5 focus-within:border-[#0463F0] transition">
              <FaSearch className="text-gray-400 text-sm mr-2" />
              <input
                type="text"
                placeholder="Search your favourite cars..."
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
              />
              <button className="bg-[#0463F0] text-white p-2 rounded-full transition hover:bg-blue-700">
                <FaSearch className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;