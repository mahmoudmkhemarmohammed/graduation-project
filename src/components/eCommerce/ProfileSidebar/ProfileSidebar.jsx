import { NavLink } from "react-router-dom";
import useIsAdmin from "../../../hooks/useIsAdmin";

const ProfileSidebar = () => {
  const { errorMessage, isAdmin } = useIsAdmin();
  return (
    <div
      className="w-fit h-fit bg-white rounded-md max-lg:w-full"
      style={{ margin: "10px 0 0" }}
    >
      <ul
        className="profile w-[300px] h-full flex flex-col justify-between gap-4 max-lg:w-full max-lg:flex-row max-lg:*:grow"
        style={{ padding: "15px", borderRadius: "5px" }}
      >
        <li>
          <NavLink
            end
            to={"/profile"}
            className="text-xl bg-slate-200 inline-block w-full rounded-md"
            style={{ padding: "10px 10px 10px 0" }}
          >
            معلومات
          </NavLink>
        </li>
        {isAdmin && (
          <li>
            <NavLink
              end
              to={"/admin"}
              className="text-xl bg-slate-200 inline-block w-full rounded-md"
              style={{ padding: "10px 10px 10px 0" }}
            >
              إضافة
            </NavLink>
          </li>
        )}
        {errorMessage && (
          <li>
            <NavLink
              end
              to={"/"}
              className="text-xl bg-red-300 inline-block w-full rounded-md"
              style={{ padding: "10px 10px 10px 0" }}
            >
              إلي الرئيسة
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProfileSidebar;
