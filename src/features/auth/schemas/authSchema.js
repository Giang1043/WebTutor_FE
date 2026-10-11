import { z } from "zod";

const phoneRegex = /^(0[35789])[0-9]{8}$/;
const passwordField = z
  .string()
  .min(10, "Mật khẩu phải có ít nhất 10 ký tự")
  .regex(/[A-Z]/, "Mật khẩu phải có ít nhất 1 chữ in hoa")
  .regex(/[^A-Za-z0-9]/, "Mật khẩu phải có ít nhất 1 ký tự đặc biệt");

export const registerSchema = z
  .object({
    fullName: z.string().min(2).max(100),
    email: z.string().email("Thư điện tử không hợp lệ"),
    phone: z.string().regex(phoneRegex, "Số điện thoại không hợp lệ (phải là số VN 10 số)"),
    dateOfBirth: z
      .string()
      .refine((value) => !Number.isNaN(Date.parse(value)), "Ngày sinh không hợp lệ")
      .refine((value) => new Date(value) <= new Date(), "Ngày sinh không được lớn hơn hiện tại"),
    password: passwordField,
    confirmPassword: z.string().min(1, "Mật khẩu xác nhận không được để trống"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

export const verifyOtpSchema = z.object({
  otp: z.string().length(6, "Mã OTP phải có đúng 6 chữ số").regex(/^\d+$/, "Mã OTP chỉ gồm các chữ số"),
});
