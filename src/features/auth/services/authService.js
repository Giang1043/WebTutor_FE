import axiosInstance from "@/services/axiosInstance";
import API_ENDPOINTS from "@/constants/apiEndpoints";

const authService = {
  register: (data) => axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, data),
  verifyOtp: (data) => axiosInstance.post(API_ENDPOINTS.AUTH.VERIFY_OTP, data),
  resendOtp: (data) => axiosInstance.post(API_ENDPOINTS.AUTH.RESEND_OTP, data),
};

export default authService;
