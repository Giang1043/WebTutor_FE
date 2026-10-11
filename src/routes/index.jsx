/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";

const RegisterPage = lazy(() => import("@/features/auth/pages/RegisterPage"));
const VerifyOtpPage = lazy(() => import("@/features/auth/pages/VerifyOtpPage"));

const lazyPage = (Page) => (
  <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
    <Page />
  </Suspense>
);

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: lazyPage(RegisterPage) },
      { path: "/register", element: lazyPage(RegisterPage) },
      { path: "/verify-otp", element: lazyPage(VerifyOtpPage) },
    ],
  },
]);

export default router;
