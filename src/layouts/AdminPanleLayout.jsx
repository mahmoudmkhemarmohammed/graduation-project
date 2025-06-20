import { Outlet } from "react-router-dom";
import SidebarAdminPanleLayout from "../components/eCommerce/SidebarAdminPanleLayout/SidebarAdminPanleLayout";
import useIsAdmin from "../hooks/useIsAdmin";

const AdminPanleLayout = () => {
  const {isAdmin} = useIsAdmin()
  
  if(!isAdmin) {
    return <div className="container text-4xl text-red-400 font-bold h-[500px] flex justify-center items-center">غير مصرح لك الدخول</div>
  }
  return (
    <div className="container flex justify-between gap-5 max-md:flex-col">
      <SidebarAdminPanleLayout />
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanleLayout;
