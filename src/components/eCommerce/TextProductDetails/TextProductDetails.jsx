import "./TextProductDetails.css"
import { FaHeart } from "react-icons/fa";
const TextProductDetails = ({ title, price, desc, categ, size }) => {
  return (
    <div className="text-details">
      <h2>
        اسم المنتج : <span>{title}</span>
      </h2>
      <h2>
        السعر : <span>{price}</span> جنيه
      </h2>
      <h2>
        الوصف : <p>{desc}</p>
      </h2>
      <h2>
        النوعيه : <span>{categ}</span>
      </h2>
      <h2>
        الحجم : <span>{size}</span>
      </h2>
      <div className="box">
        <button>شراء المنتج</button>
        <FaHeart />
      </div>
    </div>
  );
};

export default TextProductDetails;
