import { axiosInstance } from "./Config";

// 🧾 Register API
export const registerUser = async (formData) => {
  try {
    const response = await axiosInstance.post("api/users/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    throw error;
  }
};

// 🔐 Login API
export const loginUser = async (data) => {
  const res = await axiosInstance.post("api/users/login", data);
  if (res.data?.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};
export const verifyOtp = async ({ email, otpCode }) => {
  try {
    const response = await axiosInstance.post(
      `otp/verify-otp?email=${encodeURIComponent(email)}&otpCode=${encodeURIComponent(otpCode)}`,
      {}, // empty body
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("OTP Verify Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};




export const resendOtp = async ({ email }) => {
  try {
    const response = await axiosInstance.post(
      `otp/resend-otp?email=${encodeURIComponent(email)}`,
      {}, // empty body
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Resend OTP Error:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};
