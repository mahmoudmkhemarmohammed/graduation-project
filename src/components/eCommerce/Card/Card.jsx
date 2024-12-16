import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Card.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ img, price, title, desc , productId}) => {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt={title} />
      </div>
      <div className="text">
        <h2>T-shirt</h2>
        <p>{desc.length > 35 ? `${desc.substring(0,33)}...`: desc}</p>
        <h3>السعر: <strong>{price}</strong> جنية</h3>
        <div className="icons">
            <AiOutlineShoppingCart />
            <FaHeart />
        </div>
      </div>
      <Link to={`/products/${productId}`}>تفاصيل المنتج</Link>
    </div>
  );
};

export default Card;
