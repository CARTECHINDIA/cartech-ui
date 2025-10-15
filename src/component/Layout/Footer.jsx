import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2c2f33] text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We make buying and selling used cars in India simple, transparent, and hassle-free. 
            Get the best car valuations, insurance options, and expert assistance all in one place.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="p-2 bg-[#1f2225] hover:bg-[#0463F0] rounded">
              <FaXTwitter />
            </a>
            <a href="#" className="p-2 bg-[#1f2225] hover:bg-[#0463F0] rounded">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-[#1f2225] hover:bg-[#0463F0] rounded">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Discover Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Discover</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#0463F0]">Buy Used Car</a></li>
            <li><a href="#" className="hover:text-[#0463F0]">Sell Used Car</a></li>
            <li><a href="#" className="hover:text-[#0463F0]">Used Car Valuation</a></li>
            <li><a href="#" className="hover:text-[#0463F0]">Motor Insurance</a></li>
          </ul>
        </div>

        {/* Help & Support Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Help & Support</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#0463F0]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#0463F0]">Security</a></li>
            <li><a href="#" className="hover:text-[#0463F0]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#0463F0]">Terms & Conditions</a></li>
          </ul>
        </div>
            <div>
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-300 mb-6">
            By subscribing to our company newsletter you will always be up-to-date on our latest promotions, deals and vehicle inventory!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="EMAIL"
              className="p-3 w-full bg-[#1f2225] text-white focus:outline-none"
            />
            <button
              className="bg-[#0463F0] hover:bg-[#0355cc] px-6 text-white font-semibold"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Divider + Bottom Text */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Cars. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
