import { NavLink } from "react-router-dom";

const SidebarAdminPanleLayout = () => {
  return (
    <div
      className="w-fit h-fit bg-white rounded-md max-md:w-full"
      style={{ margin: "10px 0 0" }}
    >
      <ul
        className="profile w-[300px] h-full flex flex-col justify-between gap-4 max-md:flex-row max-md:*:grow max-md:w-full flex-wrap"
        style={{ padding: "15px", borderRadius: "5px" }}
      >
        <li>
          <NavLink
            end
            to={"/admin"}
            className="text-xl bg-slate-200 inline-block w-full rounded-md"
            style={{ padding: "10px 10px 10px 0" }}
          >
            أضافة فئة
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to={"/admin/subcategory"}
            className="text-xl bg-slate-200 inline-block w-full rounded-md"
            style={{ padding: "10px 10px 10px 0" }}
          >
            أضافة فئة فرعية
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to={"/admin/brand"}
            className="text-xl bg-slate-200 inline-block w-full rounded-md"
            style={{ padding: "10px 10px 10px 0" }}
          >
            أضافة براند
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to={"/admin/product"}
            className="text-xl bg-slate-200 inline-block w-full rounded-md"
            style={{ padding: "10px 10px 10px 0" }}
          >
            أضافة منتج
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdminPanleLayout;
