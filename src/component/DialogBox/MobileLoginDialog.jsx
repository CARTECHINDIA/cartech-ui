import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdClose, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import car from "../../assets/2149117150.jpg";
import { loginUser, registerUser, verifyOtp, resendOtp } from "../../api/Loginapi";

export default function MobileLoginDialog({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
    const [isResending, setIsResending] = useState(false);
  // State for password visibility
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  // Login fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Register fields
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    retypePassword: "",
    city: "",
    area: "",
    address: "",
    username: "",
    dob: "",
    role: "",
    document: null,
  });

const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // Start loading
    try {
      const payload = {
        email: formData.email,
        password: formData.password,
        longitude: 0,
        latitude: 0,
      };
      const res = await loginUser(payload);
      console.log("✅ Login success:", res);
      toast.success("Login successful!");  // Show success toast
      onClose();
    } catch (err) {
      console.error("❌ Login failed:", err);
      toast.error(`Login failed: ${err.response?.data?.message || err.message || 'Unknown error'}`);  // Show error toast
    } finally {
      setIsLoading(false);  // Stop loading
    }
  };
const handleRegisterSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);  // Start loading
  const form = new FormData();

  // Loop through registerData and append only valid fields
  Object.entries(registerData).forEach(([key, value]) => {
    if (key !== 'document') {
      // Append all fields except 'document'
      form.append(key, value);
    } else if (key === 'document' && value instanceof File) {
      // Only append 'document' if it's a File object (e.g., user selected a file)
      form.append(key, value);
    }
    // If 'document' is null or not a File, it gets skipped
  });

  try {
    const res = await registerUser(form);
    console.log("✅ Registration success:", res);
    toast.success("Registration successful! Please verify OTP.");  // Show success toast
    setUserEmail(registerData.email);  // Store email for OTP verify
    setShowOTP(true);  // Show OTP screen
  } catch (err) {
    console.error("❌ Registration failed:", err);
    toast.error(`Registration failed: ${err.response?.data?.message || err.message || 'Unknown error'}`);  // Show error toast
  } finally {
    setIsLoading(false);  // Stop loading
  }
};
  const handleOtpVerify = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // Start loading
    try {
      const res = await verifyOtp({ email: userEmail, otpCode: otp });
      console.log("✅ OTP verified:", res);
      toast.success("OTP verified successfully!");  // Show success toast
      setShowOTP(false);
      setIsLogin(true);
    } catch (err) {
      console.error("❌ OTP verification failed:", err);
      toast.error(`OTP verification failed: ${err.response?.data?.message || err.message || 'Invalid OTP'}`);  // Show error toast
    } finally {
      setIsLoading(false);  // Stop loading
    }
  };
  const handleResendOtp = async () => {
    setIsResending(true);  // Start resending loading
    try {
      if (!userEmail) {
        toast.error("Email not found! Please register again.");  // Show error toast
        return;
      }
      const res = await resendOtp({ email: userEmail });
      console.log("✅ OTP resent:", res);
      toast.success("OTP has been resent to your email!");  // Show success toast
    } catch (err) {
      console.error("❌ Resend OTP failed:", err);
      toast.error(`Failed to resend OTP: ${err.response?.data?.message || err.message || 'Try again later'}`);  // Show error toast
    } finally {
      setIsResending(false);  // Stop resending loading
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
          <img src={car} alt="Cars" className="w-full h-full object-cover" />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
          <MdClose
            className="absolute top-4 right-4 text-2xl text-gray-500 cursor-pointer hover:text-black"
            onClick={onClose}
          />

          {showOTP ? (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Verify OTP</h2>
              <p className="text-gray-500 mb-6 text-sm">
                Enter the 6-digit OTP sent to your email:{" "}
                <span className="font-medium text-blue-600">{userEmail}</span>
              </p>

              <form onSubmit={handleOtpVerify}>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="Enter OTP"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-600 text-sm mb-4"
                  required
                />
               <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm mr-2"></span>  {/* Simple spinner class - add your CSS for this */}
                      Loading...
                    </>
                  ) : (
                    "Verify OTP"
                  )}
                </button>
               <p className="text-center text-sm text-gray-500 mt-3">
                  Didn’t receive the code?{" "}
                  <span
                    className={`text-blue-600 font-medium hover:underline ${isResending ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={handleResendOtp}
                  >
                    {isResending ? "Resending..." : "Resend OTP"}
                  </span>
                </p>
              </form>
            </>
          ) : isLogin ? (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Login to continue</h2>
              <p className="text-gray-500 mb-6 text-sm">Enter your email and password</p>

              <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                  <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none text-sm focus:border-blue-600"
                    required
                  />
                </div>

                <div className="relative mb-6">
                  <label className="text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none text-sm focus:border-blue-600"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                                       className="absolute inset-y-2 mt-5 right-3 flex items-center text-gray-400 hover:text-gray-600"

                  >
                    {showLoginPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </button>
                </div>

                 <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm mr-2"></span>
                      Loading...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Don’t have an account?{" "}
                <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => setIsLogin(false)}>
                  Register
                </span>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create Account</h2>
              <p className="text-gray-500 mb-6 text-sm">Fill in your details to register</p>

              <form onSubmit={handleRegisterSubmit}>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={registerData.firstName}
                    onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={registerData.lastName}
                    onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Phone"
                  value={registerData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
                    if (value.length <= 10) {
                      setRegisterData({ ...registerData, phone: value });
                    }
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600 mb-3"
                  pattern="\d{10}"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600 mb-3"
                  required
                />

                <div className="relative mb-3">
                  <input
                    type={showRegisterPassword ? "text" : "password"}
                    placeholder="Password"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                    className="absolute inset-y-3 right-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showRegisterPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </button>
                </div>

                <div className="relative mb-3">
                  <input
                    type={showRetypePassword ? "text" : "password"}
                    placeholder="Retype Password"
                    value={registerData.retypePassword}
                    onChange={(e) => setRegisterData({ ...registerData, retypePassword: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowRetypePassword(!showRetypePassword)}
                    className="absolute inset-y-3 right-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showRetypePassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="City"
                    value={registerData.city}
                    onChange={(e) => setRegisterData({ ...registerData, city: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Area"
                    value={registerData.area}
                    onChange={(e) => setRegisterData({ ...registerData, area: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Address"
                  value={registerData.address}
                  onChange={(e) => setRegisterData({ ...registerData, address: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600 mb-3"
                  required
                />

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Username"
                    value={registerData.username}
                    onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
                    required
                  />
                  <input
                    type="date"
                    value={registerData.dob}
                    onChange={(e) => setRegisterData({ ...registerData, dob: e.target.value })}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600"
                    required
                  />
                </div>

                <select
                  value={registerData.role}
                  onChange={(e) => setRegisterData({ ...registerData, role: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-600 mb-3"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                  <option value="dealer">Dealer</option>
                </select>

                {registerData.role === "dealer" && (
                  <input
                    type="file"
                    onChange={(e) => setRegisterData({ ...registerData, document: e.target.files[0] })}
                    className="w-full text-sm mb-4"
                    required
                  />
                )}
   <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm mr-2"></span>
                      Loading...
                    </>
                  ) : (
                    "Register"
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Already have an account?{" "}
                <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => setIsLogin(true)}>
                  Login
                </span>
              </p>
            </>
          )}
        </div>
      </motion.div>
       <ToastContainer position="top-right" autoClose={5000} /> 
    </div>
  );
}
