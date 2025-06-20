import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/feedback/Loading";
import { useLocation, useParams } from "react-router-dom";
import actGetProductsByCategories from "../../store/products/act/actGetProductsByPrefix";
import Card from "../../components/eCommerce/Card/Card";
import SpecialHeading from "../../components/common/SpecialHeading/SpecialHeading";

const ProductsByPrefix = () => {
  const { records, loading, error } = useSelector(
    (state) => state.productsByPrefix
  );
  const dispatch = useDispatch();
  const { categoryId, brandId } = useParams();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(
      actGetProductsByCategories({
        name: pathname.startsWith("/brands") ? "brand" : "category",
        prefixId: pathname.startsWith("/brands") ? brandId : categoryId,
      })
    );
  }, [dispatch, categoryId, pathname, brandId]);

  return (
    <section>
      <SpecialHeading title={"المنتجات"} />
      <div className="container gridList">
        <Loading status={loading} error={error}>
          {records.map((el) => (
            <Card
              key={el._id}
              images={el.images}
              name={el.name}
              price={el.price}
              productId={el._id}
            />
          ))}
        </Loading>
      </div>
    </section>
  );
};

export default ProductsByPrefix;
