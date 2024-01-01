import Navigation from "@/components/shared/Navigation";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>);
}

export default RootLayout;