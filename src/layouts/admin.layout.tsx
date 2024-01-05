import { Outlet } from "react-router-dom";

function AdminMainLayout() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default AdminMainLayout;
