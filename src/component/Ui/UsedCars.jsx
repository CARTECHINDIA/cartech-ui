import React from "react";
import { Heart } from "lucide-react";
import { MdVerified, MdLocationOn } from "react-icons/md";
import car from "../../assets/black-isolated-car.png";
import car1 from "../../assets/view-3d-car.png";

const cars = [
  {
    id: 1,
    title: "2017 Hyundai Eon ERA +",
    seller: "Private Seller",
    image: car,
    km: "37.13k km",
    fuel: "Petrol",
    transmission: "Manual",
    reg: "DL-5C",
    emi: "₹3,460/m*",
    priceOld: "₹2.16L",
    priceNew: "₹1.77 lakh",
    location: "Rajouri Garden",
    tag: "GST SALE",
    verified: false,
  },
  {
    id: 2,
    title: "2016 Hyundai New Elantra 2.0 S",
    seller: "CARS Assured",
    image: car1,
    km: "59.88k km",
    fuel: "Petrol",
    transmission: "Manual",
    reg: "DL-4C",
    emi: "₹11,926/m*",
    priceOld: "₹7.43L",
    priceNew: "₹6.10 lakh",
    location: "Metro Walk, Rohini, New Delhi",
    tag: "GST SALE",
    verified: true,
  },
  {
    id: 3,
    title: "2022 Hyundai ALCAZAR PRESTIGE 2.0",
    seller: "CARS Assured",
    image: car,
    km: "38.15k km",
    fuel: "Petrol",
    transmission: "Manual",
    reg: "DL-3C",
    emi: "₹19,510/m*",
    priceOld: "₹11.13L",
    priceNew: "₹10.25 lakh",
    location: "Metro Walk, Rohini, New Delhi",
    tag: "GST SALE",
    verified: true,
  },
];

const UsedCars = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
          Top Deals on Used Cars
        </h1>
        <p className="text-gray-500 mt-2">
          Explore the best deals on certified pre-owned cars near you.
        </p>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-2xl overflow-hidden  shadow relative group border border-gray-100"
          >
            {/* Tag */}
            <div className="absolute top-0 left-0 bg-[#0463F0] text-white text-xs font-semibold px-3 py-1 rounded-br-lg z-10">
              {car.tag}
            </div>

            {/* Heart Button */}
            <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-sm z-10 hover:bg-gray-100 transition">
              <Heart
                size={20}
                className="text-gray-600 group-hover:text-red-500 transition"
              />
            </button>

            {/* Verified Seller */}
            <div className="absolute top-[170px] left-0 bg-white px-4 py-1.5 rounded-tr-3xl  text-sm font-medium">
              {car.verified ? (
                <div className="flex items-center text-gray-700">
                  <MdVerified className="text-sky-600 text-base mr-2" />
                  {car.seller}
                </div>
              ) : (
                <div className="flex items-center text-gray-700">
                  <span className="text-orange-500 mr-2 text-base">👤</span>
                  {car.seller}
                </div>
              )}
            </div>

            {/* Car Image */}
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <img
                src={car.image}
                alt={car.title}
                className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 space-y-3">
              {/* Title */}
              <h2 className="text-gray-900 font-semibold text-lg leading-tight group-hover:text-purple-700 transition">
                {car.title}
              </h2>

              {/* Specs */}
              <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="bg-gray-100 px-3 py-1 rounded-md font-medium">
                  {car.km}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-md font-medium">
                  {car.fuel}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-md font-medium">
                  {car.transmission}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-md font-medium">
                  {car.reg}
                </span>
              </div>

              {/* Pricing */}
              <div className="mt-3 flex justify-between items-end border-t border-gray-100 pt-3">
                <div>
                  <p className="text-gray-700 text-base">
                    <span className="font-semibold text-lg">{car.emi}</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-1">EMI</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm line-through">
                    {car.priceOld}
                  </p>
                  <p className="text-xl font-semibold text-gray-900 leading-none mt-0.5">
                    {car.priceNew}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">+ other charges</p>
                </div>
              </div>
            </div>

            {/* Location Footer */}
            <div className="flex items-center text-gray-600 text-sm px-5 py-3 border-t border-gray-100 bg-gray-50">
              <MdLocationOn className="text-gray-500 mr-1 text-lg" />
              <span>{car.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsedCars;
