import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextProductDetails from "../../components/eCommerce/TextProductDetails/TextProductDetails";
import { useEffect } from "react";
import actGetSingleProduct from "../../store/products/act/actGetSingleProduct";
import "./ProductDetails.css"
import ImgProductDetails from "../../components/eCommerce/ImgProductDetails/ImgProductDetails";
const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { records, loading } = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(actGetSingleProduct(productId));
  } , [])
  return (
    <div className="product-details">
      <div className="container">
        <TextProductDetails title={records.title} price={records.price} categ={records.cat_prefix} desc={records.title} size={"lg , xl , xxl"}/>
        <ImgProductDetails img={records.img} />
      </div>
    </div>
  );
};

export default ProductDetails;
