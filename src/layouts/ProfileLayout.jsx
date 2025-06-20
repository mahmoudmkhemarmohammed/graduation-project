import { Outlet } from "react-router-dom";
import ProfileSidebar from "../components/eCommerce/ProfileSidebar/ProfileSidebar";

const ProfileLayout = () => {
  return (
    <div className="container flex justify-between gap-5 max-lg:flex-col">
      <ProfileSidebar />
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
