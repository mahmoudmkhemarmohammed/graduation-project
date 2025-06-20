import { CgProfile } from "react-icons/cg";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import logo from "../../../assets/images/logo.png";
const Header = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const { itemsId } = useSelector((state) => state.cart);
  const totalQuantity = Object.keys(itemsId).length;
  const { accessToken } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  const navList = () => {
    setNav(!nav);
  };

  useEffect(() => {
    setNav(false);
  }, [pathname]);
  return (
    <header>
      <div className="container">
        <Link
          to={"/"}
          className="w-[80px] h-[80px] max-sm:w-[60px] max-sm:h-[60px]"
        >
          <img className="w-full h-full" src={logo} alt="logo" />
        </Link>
        <ul className={`${nav ? "open" : ""}`}>
          <li>
            <NavLink to={"/"}>الرئيسيه</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>المنتجات</NavLink>
          </li>
          <li>
            <NavLink to={"/brands"}>العلامات التجاريه</NavLink>
          </li>
          <li>
            <NavLink to={"/categories"}>الفئات</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>تواصل معنا</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>تسجيل الدخول</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>إنشاء حساب</NavLink>
          </li>
        </ul>
        <div className="icons">
          {accessToken && <CgProfile onClick={() => navigate("/profile")} />}
          <div className="relative">
            <CiShoppingCart onClick={() => navigate("/cart")} />
            {totalQuantity > 0 && (
              <div
                className="flex bg-red-300 h-[25px] justify-center rounded-full w-[25px] -top-3 absolute items-center left-[50%]"
                style={{ padding: "4px" }}
              >
                {totalQuantity}
              </div>
            )}
          </div>
          <CiHeart onClick={() => navigate("/wishlist")} />
          {nav ? (
            <IoIosCloseCircleOutline onClick={navList} />
          ) : (
            <HiBars3CenterLeft className="bars" onClick={navList} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
