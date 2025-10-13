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
import MobileLoginDialog from "../DialogBox/MobileLoginDialog";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showCityDialog, setShowCityDialog] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Noida");
  const [activeCategory, setActiveCategory] = useState("Browse by Model");
  const [showDropdown, setShowDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
const [showLoginDialog, setShowLoginDialog] = useState(false);


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

 
const filteredCities = popularCities.filter((city) =>
  city.toLowerCase().includes(searchQuery.toLowerCase())
);
  return (
    <>
 
      <nav className="w-full bg-white shadow-md flex items-center justify-between px-3 md:px-8 py-3 relative z-20">
  
        <div className="flex items-center gap-3 md:gap-8">
          <img src={logo} alt="Logo" className="h-8 md:h-14 object-contain" />
          <div
            onClick={() => setShowCityDialog(true)}
            className="flex items-center bg-gray-50 rounded-lg px-2 md:px-3 py-1.5 md:py-2 cursor-pointer hover:bg-gray-100 transition"
          >
            <MdLocationOn className="text-blue-600 text-lg md:text-xl" />
            <span className="text-gray-700 text-sm font-medium mx-1 truncate max-w-[80px] md:max-w-none">
              {selectedCity}
            </span>
            <MdKeyboardArrowDown className="text-gray-600" />
          </div>
        </div>

     
        <div className="hidden lg:flex items-center gap-6 flex-1 ml-4 text-sm font-medium text-gray-800">
 
    <div
      className="relative flex items-center gap-1 py-3 cursor-pointer hover:text-blue-600 transition"
      onMouseEnter={() => setOpenDropdown("buy")}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <span>Buy Used Car</span>
      <MdKeyboardArrowDown className="text-gray-500 text-lg" />
    </div>
         <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 shadow-sm focus-within:border-[#0463F0] transition flex-1 max-w-lg">
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

      <div className="flex items-center gap-2 lg:gap-5 ml-0 lg:ml-5 relative">
 
    <button className="hidden lg:flex items-center gap-2 bg-black text-white px-3 lg:px-4 py-2 rounded-md hover:bg-gray-800 transition">
      <FaPhoneAlt className="text-sm" />
      <span className="text-sm font-medium">Call us</span>
    </button>

         
         <div
      className="relative flex items-center gap-2 lg:border-l lg:pl-4 cursor-pointer"
      onMouseEnter={() => setShowDropdown("account")}
      onMouseLeave={() => setShowDropdown(null)}
    >
      <FaUserCircle className="text-2xl text-gray-600" />
      <div className="text-sm hidden sm:block lg:block">
        <p className="text-gray-500">Hello, Sign in</p>
        <div className="flex items-center gap-1 font-medium text-gray-800 hover:text-blue-600">
          <span>Account</span>
          <MdKeyboardArrowDown className="text-gray-500 text-lg" />
        </div>
      </div>

            
            <div
              className={`fixed md:absolute left-0 right-0 md:left-auto md:right-0 top-16 md:top-full md:mt-1 mt-2 w-full md:w-[330px] max-w-sm bg-white shadow-2xl rounded-2xl border border-gray-100 p-5 z-40 transition-all duration-200 ${
                showDropdown === "account"
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <h3 className="font-semibold text-gray-800 mb-4">Welcome to CARS</h3>
              <div className="space-y-3">
              <button
  className="w-full bg-[#0463F0] text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
  onClick={() => {
    setShowLoginDialog(true);  
  }}
>
  Login / Sign Up
</button>

              
              </div>
              <hr className="my-5 border-gray-200" />
              <ul className="space-y-3 text-gray-700 text-sm">
                {["My Bookings", "Sell My Car", "Help & Support",].map(
                  (item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between hover:text-[#0463F0] transition cursor-pointer"
                    >
                      {item}
                      <MdArrowOutward className="text-[#0463F0]" />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
{showLoginDialog && (
  <MobileLoginDialog onClose={() => setShowLoginDialog(false)} />
)}

   
     <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around items-center py-2.5 lg:hidden z-30">
        {[
          { icon: <MdLocationOn className="text-2xl" />, label: "City", onClick: () => setShowCityDialog(true) },
          { icon: <FaSearch className="text-lg" />, label: "Search", onClick: () => setShowMobileSearch(true) },
          { icon: <MdKeyboardArrowDown className="text-2xl" />, label: "Buy", onClick: () => setOpenDropdown(openDropdown === "buy" ? null : "buy") },
          { icon: <FaPhoneAlt className="text-lg" />, label: "Call" },
          { icon: <FaUserCircle className="text-2xl" />, label: "Account", onClick: () => setShowDropdown(showDropdown === "account" ? null : "account") },
        ].map((item, i) => (
          <div
            key={i}
            onClick={item.onClick}
            className="flex flex-col items-center text-gray-600 hover:text-[#0463F0] transition cursor-pointer"
          >
            {item.icon}
            <span className="text-[11px] mt-1">{item.label}</span>
          </div>
        ))}
      </div>

{openDropdown === "buy" && (
<div className="fixed lg:absolute left-0 right-0 lg:top-[65px] top-[65px] bg-white shadow-2xl lg:rounded-b-2xl border-t lg:items-start border-gray-200 z-40 py-4 lg:py-8 px-4 lg:px-10 animate-fadeIn flex flex-col lg:flex-row gap-6 lg:gap-10 overflow-y-auto max-h-[80vh]"
    onMouseEnter={() => setOpenDropdown("buy")}
    onMouseLeave={() => setOpenDropdown(null)}
  >
    {/* Left Section */}
    <div className="w-full lg:w-[35%] bg-gray-50 rounded-xl p-5 shadow-sm flex-shrink-0">
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

      <ul className="space-y-2 text-sm">
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
              className={`text-lg ${
                activeCategory === item ? "text-[#0463F0]" : "text-gray-400"
              }`}
            />
          </li>
        ))}
      </ul>
    </div>
 
    <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-4">
      {activeCategory === "Browse by City"
        ? popularCities.map((city, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedCity(city);
                setOpenDropdown(null);
              }}
              className={`flex justify-between items-center bg-gray-50 hover:bg-[#0463F0]/10 text-gray-800 hover:text-[#0463F0] rounded-lg px-4 py-2 cursor-pointer transition ${
                selectedCity === city ? "border border-[#0463F0] bg-blue-50" : ""
              }`}
            >
              <span>Used Cars in {city}</span>
              <MdArrowOutward className="text-[#0463F0] text-sm" />
            </div>
          ))
        : carData[activeCategory]?.map((car, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-gray-50 hover:bg-[#0463F0]/10 text-gray-800 hover:text-[#0463F0] rounded-lg px-4 py-2 cursor-pointer transition"
            >
              <span>{car}</span>
              <MdArrowOutward className="text-[#0463F0] text-sm" />
            </div>
          ))}
    </div>
  </div>
)}

  
{showCityDialog && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl w-full max-w-sm sm:max-w-2xl md:max-w-4xl p-6 md:p-8 shadow-2xl mx-3 max-h-[85vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          Select your city
        </h2>
        <MdClose
          className="text-2xl text-gray-600 cursor-pointer hover:text-black"
          onClick={() => setShowCityDialog(false)}
        />
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for your city"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-5 outline-none focus:border-blue-500 text-sm"
      />

      <h3 className="font-medium text-gray-700 mb-3">Popular cities</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <div
              key={city}
              onClick={() => {
                setSelectedCity(city);
                setShowCityDialog(false);
              }}
              className={`border rounded-lg p-3 text-center cursor-pointer hover:shadow-md transition text-sm ${
                selectedCity === city
                  ? "border-blue-600 bg-blue-50 text-blue-600 font-semibold"
                  : "border-gray-200 text-gray-700"
              }`}
            >
              {city}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm col-span-full text-center py-4">
            No cities found
          </p>
        )}
      </div>
    </div>
  </div>
)}


      
      {showMobileSearch && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-sm mx-4 p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Search Cars</h2>
              <MdClose
                className="text-2xl text-gray-600 cursor-pointer hover:text-black"
                onClick={() => setShowMobileSearch(false)}
              />
            </div>

            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus-within:border-[#0463F0] transition">
              <FaSearch className="text-gray-400 text-sm mr-2" />
              <input
                type="text"
                placeholder="Search your favourite cars..."
        onChange={(e) => setSearchQuery(e.target.value)}

                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
              />
              <button className="bg-[#0463F0] text-white p-2 rounded-full transition hover:bg-blue-700">
                <FaSearch className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      )}

  
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

 