import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="d-flex">
      <div className="w-25 d-flex">
        <Sidebar />
      </div>

      <div className="w-75 flex-grow-1" style={{marginLeft:"-30px"}}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;