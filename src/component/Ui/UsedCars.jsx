import React from "react";
import { Heart } from "lucide-react";
import { MdVerified, MdLocationOn } from "react-icons/md";
import car from "../../assets/black-isolated-car.png";
import car1 from "../../assets/view-3d-car.png";
import car2 from "../../assets/red-isolated-car.png";

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
    title: "2018 Maruti Swift VDI",
    seller: "CARS Assured",
    image: car1,
    km: "48.2k km",
    fuel: "Diesel",
    transmission: "Manual",
    reg: "DL-8B",
    emi: "₹6,280/m*",
    priceOld: "₹4.52L",
    priceNew: "₹3.95 lakh",
    location: "Dwarka, New Delhi",
    tag: "HOT DEAL",
    verified: true,
  },
  {
    id: 3,
    title: "2022 Tata Nexon XZ+",
    seller: "CARS Assured",
    image: car2,
    km: "22.4k km",
    fuel: "Petrol",
    transmission: "Manual",
    reg: "HR-26",
    emi: "₹15,620/m*",
    priceOld: "₹10.85L",
    priceNew: "₹9.90 lakh",
    location: "Gurgaon",
    tag: "NEW ARRIVAL",
    verified: true,
  },
  {
    id: 4,
    title: "2019 Honda Amaze S i-DTEC",
    seller: "Private Seller",
    image: car1,
    km: "39.7k km",
    fuel: "Diesel",
    transmission: "Manual",
    reg: "DL-9C",
    emi: "₹7,420/m*",
    priceOld: "₹5.43L",
    priceNew: "₹4.90 lakh",
    location: "Lajpat Nagar, Delhi",
    tag: "LIMITED OFFER",
    verified: false,
  },
  {
    id: 5,
    title: "2020 Kia Seltos HTK Plus",
    seller: "CARS Assured",
    image: car2,
    km: "27.6k km",
    fuel: "Petrol",
    transmission: "Automatic",
    reg: "UP-16",
    emi: "₹18,210/m*",
    priceOld: "₹11.85L",
    priceNew: "₹10.60 lakh",
    location: "Noida Sector 18",
    tag: "FEATURED",
    verified: true,
  },
  {
    id: 6,
    title: "2021 Toyota Glanza G CVT",
    seller: "CARS Assured",
    image: car,
    km: "18.9k km",
    fuel: "Petrol",
    transmission: "Automatic",
    reg: "DL-6D",
    emi: "₹13,840/m*",
    priceOld: "₹9.45L",
    priceNew: "₹8.70 lakh",
    location: "Rohini, New Delhi",
    tag: "GST SALE",
    verified: true,
  },
  // {
  //   id: 7,
  //   title: "2017 Mahindra KUV100 NXT K6+",
  //   seller: "Private Seller",
  //   image: car,
  //   km: "52.3k km",
  //   fuel: "Diesel",
  //   transmission: "Manual",
  //   reg: "DL-3B",
  //   emi: "₹5,640/m*",
  //   priceOld: "₹3.65L",
  //   priceNew: "₹3.15 lakh",
  //   location: "Janakpuri, New Delhi",
  //   tag: "HOT DEAL",
  //   verified: false,
  // },
  // {
  //   id: 8,
  //   title: "2023 MG Hector Sharp DCT",
  //   seller: "CARS Assured",
  //   image: car1,
  //   km: "12.4k km",
  //   fuel: "Petrol",
  //   transmission: "Automatic",
  //   reg: "HR-51",
  //   emi: "₹24,510/m*",
  //   priceOld: "₹17.85L",
  //   priceNew: "₹16.25 lakh",
  //   location: "Gurgaon",
  //   tag: "NEW ARRIVAL",
  //   verified: true,
  // },
  // {
  //   id: 9,
  //   title: "2021 Tata Altroz XZ iTurbo",
  //   seller: "CARS Assured",
  //   image: car2,
  //   km: "20.1k km",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   reg: "DL-2A",
  //   emi: "₹10,320/m*",
  //   priceOld: "₹7.25L",
  //   priceNew: "₹6.65 lakh",
  //   location: "Faridabad",
  //   tag: "FEATURED",
  //   verified: true,
  // },
  // {
  //   id: 10,
  //   title: "2018 Ford EcoSport Titanium+",
  //   seller: "Private Seller",
  //   image: car,
  //   km: "41.8k km",
  //   fuel: "Petrol",
  //   transmission: "Manual",
  //   reg: "DL-10C",
  //   emi: "₹9,560/m*",
  //   priceOld: "₹6.82L",
  //   priceNew: "₹6.15 lakh",
  //   location: "Rajouri Garden, Delhi",
  //   tag: "LIMITED OFFER",
  //   verified: false,
  // },
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
