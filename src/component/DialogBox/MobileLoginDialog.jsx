import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import car from "../../assets/2149117150.jpg"
export default function MobileLoginDialog({ onClose }) {
  const [mobile, setMobile] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(value);
    if (value.length === 10) {
      setTimeout(() => setShowOTP(true), 400);
    } else {
      setShowOTP(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden shadow-2xl"
      >
        {/* Left Side Image */}
        <div className="hidden md:flex md:w-1/2 relative">
          <img
            src= {car}
            alt="Cars"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 b bg-black/30 flex flex-col justify-center p-10 text-white">
             
            <h2 className="text-3xl font-semibold mb-3">
              A whole new world of Cars
            </h2>
            <p className="text-gray-200 text-sm">
              Buy, sell and finance your next car with ease.
            </p>
          </div> */}
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
          <MdClose
            className="absolute top-4 right-4 text-2xl text-gray-500 cursor-pointer hover:text-black"
            onClick={onClose}
          />

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Login to continue
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Enter your mobile number to get started
          </p>

          <label className="text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-600 transition mb-5">
            <span className="px-3 text-gray-700 text-sm">+91</span>
            <input
              type="text"
              value={mobile}
              onChange={handleMobileChange}
              placeholder="Enter 10 digit number"
              className="flex-1 px-3 py-2 outline-none text-gray-800 text-sm"
            />
          </div>

          {showOTP ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  placeholder="6-digit OTP"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-600 text-sm"
                />
              </motion.div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Verify OTP
              </button>
            </>
          ) : (
            <button
              disabled={mobile.length < 10}
              className={`w-full py-2 rounded-lg font-semibold transition ${
                mobile.length === 10
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Get OTP
            </button>
          )}

          <p className="text-xs text-gray-500 mt-4 text-center">
            By logging in, you agree to our{" "}
            <span className="text-blue-600 cursor-pointer">Privacy Policy</span>{" "}
            and{" "}
            <span className="text-blue-600 cursor-pointer">
              Terms & Conditions
            </span>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
