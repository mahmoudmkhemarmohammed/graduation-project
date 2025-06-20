import { useDispatch, useSelector } from "react-redux";
import SpecialHeading from "../../components/common/SpecialHeading/SpecialHeading";
import Card from "../../components/eCommerce/Card/Card";
import { FaClipboardList } from "react-icons/fa";
import Loading from "../../components/feedback/Loading";
import { useEffect } from "react";
import actGetWishlist from "../../store/wishlist/act/actGetWishlist";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productFullInfo, loading, error } = useSelector(
    (state) => state.wishlist
  );
  useEffect(() => {
    dispatch(actGetWishlist());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      navigate("/login");
    }
  }, [error, navigate]);
  return (
    <section>
      <SpecialHeading title={"قائمة المفضلة"} />
      <div className="container gridList">
        <Loading status={loading} error={error}>
          {productFullInfo && productFullInfo.length > 0 ? (
            productFullInfo.map((el) => (
              <Card
                key={el._id}
                images={el.images}
                name={el.name}
                price={el.price}
                productId={el._id}
              />
            ))
          ) : (
            <div className="flex flex-col h-[500px] justify-center w-full *:text-3xl *:text-red-400 gap-4 items-center">
              <FaClipboardList size={100} />
              <h2>قائمة المفضلة فارغه</h2>
            </div>
          )}
        </Loading>
      </div>
    </section>
  );
};

export default Wishlist;
