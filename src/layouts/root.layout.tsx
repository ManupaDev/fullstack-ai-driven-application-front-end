import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

function RootLayout() {
  return (
    <>
      <main className="font-sans container">
        <Outlet />
      </main>
      <Toaster />
    </>
  );
}

export default RootLayout;
