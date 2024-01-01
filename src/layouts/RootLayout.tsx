import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div className="p-4">
            <Outlet />
        </div>);
}

export default RootLayout;