import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import router from "@/routes";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </>
  );
};

export default App;
