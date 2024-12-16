import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Header = () => {
  const navigate = useNavigate();
  const [nav , setNav] = useState(false)
  const navList = () => {
    setNav(!nav)
  }
  return (
    <header>
      <div className="container">
        <h1>
          <NavLink to={"/"}>سوق توب</NavLink>
        </h1>
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
              <NavLink to={"/about"}>معلومات عنا</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>تواصل معنا</NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>إنشاء حساب</NavLink>
            </li>
          </ul>
        <div className="icons">
          <CiShoppingCart onClick={() => navigate("/cart")}/>
          <CiHeart onClick={() => navigate("/wishlist")}/>
          {
            nav ? <IoIosCloseCircleOutline onClick={navList}/> : <HiBars3CenterLeft className="bars" onClick={navList}/>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
