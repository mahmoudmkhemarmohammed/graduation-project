import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Card.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/cart/cartSlice";
import { useEffect, useState } from "react";
import { BiLoader } from "react-icons/bi";
import { addToggleLike } from "../../../store/wishlist/wishlistSlice";
import actLikeToggle from "../../../store/wishlist/act/actLikeToggle";
const Card = ({ images, price, name, productId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingWishlist, setIsLoadingWishlist] = useState(false);

  const { itemsIds } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const wishlistHandler = () => {
    setIsLoadingWishlist(true);
    dispatch(addToggleLike(productId));
    dispatch(
      actLikeToggle({
        product: productId,
        type: itemsIds.includes(productId) ? "delete" : "post"
      })
    );
  };

  const handleClickToCart = () => {
    dispatch(addToCart(productId));
    setIsLoading(true);
  };

  // Debounce Animation
  useEffect(() => {
    if (!isLoading) return;
    setIsLoading(true);
    const debounce = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(debounce);
    };
  }, [isLoading]);

  // Debounce Animation wishlist
  useEffect(() => {
    if (!isLoadingWishlist) return;
    setIsLoadingWishlist(true);
    const debounce = setTimeout(() => {
      setIsLoadingWishlist(false);
    }, 2000);
    return () => {
      clearTimeout(debounce);
    };
  }, [isLoadingWishlist]);
  return (
    <div className="card">
      <div className="img">
        <img src={images[0]} alt={name} />
      </div>
      <div className="text">
        <h2>{name}</h2>
        <h3>
          السعر: <strong>{price}</strong> جنية
        </h3>
        <div className="icons">
          {isLoading ? (
            <BiLoader className="animate-spin" size={25} />
          ) : (
            <AiOutlineShoppingCart onClick={handleClickToCart} />
          )}
          {isLoadingWishlist ? (
            <BiLoader className="animate-spin" size={25} />
          ) : (
            <FaHeart
              onClick={wishlistHandler}
              style={{
                color:
                  itemsIds &&
                  itemsIds.length > 0 &&
                  itemsIds?.includes(productId)
                    ? "red"
                    : "",
              }}
            />
          )}
        </div>
      </div>
      <Link to={`/products/${productId}`}>تفاصيل المنتج</Link>
    </div>
  );
};

export default Card;
