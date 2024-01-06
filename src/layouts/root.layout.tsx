import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

function RootLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Toaster />
    </>
  );
}

export default RootLayout;
