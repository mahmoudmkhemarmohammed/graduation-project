import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextProductDetails from "../../components/eCommerce/TextProductDetails/TextProductDetails";
import { useEffect } from "react";
import actGetSingleProduct from "../../store/products/act/actGetSingleProduct";
import "./ProductDetails.css";
import ImgProductDetails from "../../components/eCommerce/ImgProductDetails/ImgProductDetails";
import Loading from "../../components/feedback/Loading";
const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { records, loading , error} = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(actGetSingleProduct(productId));
  }, [dispatch, productId]);
  console.log(records);

  return (
    <div className="product-details max-lg:h-fit">
      <div className="container max-lg:flex-wrap max-lg:flex-col-reverse">
        <Loading status={loading} error={error}>
        {records && (
          <>
            <TextProductDetails
              title={records.name}
              price={records.price}
              categ={records?.category?.name}
              desc={records.description}
              brand={records?.brand?.name}
            />
            <ImgProductDetails images={records.images} />
          </>
        )}
        </Loading>
      </div>
    </div>
  );
};

export default ProductDetails;
