import { createApiThunk } from "@/app/createApiThunk";
import authService from "@/features/auth/services/authService";

export const registerThunk = createApiThunk(
  "auth/register",
  async (data) => {
    const response = await authService.register(data);
    return response.data.data;
  },
  "Đăng ký thất bại",
);

export const verifyOtpThunk = createApiThunk(
  "auth/verifyOtp",
  async (data) => {
    const response = await authService.verifyOtp(data);
    return response.data.data;
  },
  "Xác thực OTP thất bại",
);

export const resendOtpThunk = createApiThunk(
  "auth/resendOtp",
  async (data) => {
    const response = await authService.resendOtp(data);
    return response.data.data;
  },
  "Gửi lại OTP thất bại",
);
