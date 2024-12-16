import { FaStar, FaSearch } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import "./SidebarProducts.css";

const SidebarProducts = () => {
  return (
    <div className="sidebar">
        <div className="search">
          <input type="text" placeholder="اسم المنتج" />
          <FaSearch />
        </div>
        <div className="category">
          <h2>الفئات </h2>
          <ul>
            <li>
              <input type="checkbox" value="man" id="man" />
              <label htmlFor="man">رجال</label>
            </li>
            <li>
              <input type="checkbox" value="women" id="women" />
              <label htmlFor="women">نساء</label>
            </li>
            <li>
              <input type="checkbox" value="electronic" id="electronic" />
              <label htmlFor="electronic">الكترونيات</label>
            </li>
            <li>
              <input type="checkbox" value="mobile" id="mobile" />
              <label htmlFor="mobile">موبايل</label>
            </li>
            <li>
              <input type="checkbox" value="laptop" id="laptop" />
              <label htmlFor="laptop">لاب توب</label>
            </li>
            <li>
              <input type="checkbox" value="fashion" id="fashion" />
              <label htmlFor="fashion">اكسسوارات</label>
            </li>
          </ul>
        </div>
        <div className="price">
          {" "}
          <h2>السعر </h2>
          <input type="range" id="volume" min="0" max="300" />
          <label htmlFor="volume"></label>
          <ul>
            <li>
              <input type="checkbox" value="0 EG-50 EG" />
              <label>1 جنيه : 50 جنيه</label>
            </li>
            <li>
              <input type="checkbox" value="50$-75$" />
              <label>50 جنيه : 75 جنيه</label>
            </li>
            <li>
              <input type="checkbox" value="75$-100$" />
              <label>75 جنيه : 100 جنيه</label>
            </li>
            <li>
              <input type="checkbox" value="100$-150$" />
              <label>100 جنيه : 150 جنيه</label>
            </li>
          </ul>
        </div>
        <div className="rate">
          <h2>التقييم </h2>
          <ul>
            <li>
              <input type="checkbox" value="huey" />
              <label htmlFor="huey">
                <FaStar className="rat" />
                <FaStar className="rat" />
                <FaStar className="rat" />
                <FaStar className="rat" />
                <FaStar className="rat" />
              </label>
            </li>
            <li>
              <input type="checkbox" value="huey" />
              <label htmlFor="huey">
                <FaStar className="rat" />
                <FaStar className="rat" />
                <FaStar className="rat" />
                <FaStar className="rat" />
                <FaRegStar className="gray" />
              </label>
            </li>
            <li>
              <input type="checkbox" value="huey" />
              <label htmlFor="huey">
                <FaStar className="rat" />
                <FaStar className="rat" />
                <FaStar className="rat" />
                <FaRegStar className="gray" />
                <FaRegStar className="gray" />
              </label>
            </li>
            <li>
              <input type="checkbox" value="huey" />
              <label htmlFor="huey">
                <FaStar className="rat" />
                <FaStar className="rat" />
                <FaRegStar className="gray" />
                <FaRegStar className="gray" />
                <FaRegStar className="gray" />
              </label>
            </li>
            <li>
              <input type="checkbox" value="huey" />
              <label htmlFor="huey">
                <FaStar className="rat" />
                <FaRegStar className="gray" />
                <FaRegStar className="gray" />
                <FaRegStar className="gray" />
                <FaRegStar className="gray" />
              </label>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default SidebarProducts;
