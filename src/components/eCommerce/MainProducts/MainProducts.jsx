import { useEffect } from "react";
import "./MainProducts.css";
import SpecialHeading from "../../common/SpecialHeading/SpecialHeading";
import { useDispatch, useSelector } from "react-redux";
import actGetProducts from "../../../store/products/act/actGetProducts";
import Card from "../Card/Card";
const MainProducts = () => {
  const dispatch = useDispatch();
  const { records, loading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(actGetProducts());
  }, []);
  return (
    <div className="main">
      <SpecialHeading title={"منتجاتنا"} />
      <div className="products">
        {records.map((record) => (
          <Card
            key={record.id}
            title={record.title}
            img={record.img}
            price={record.price}
            productId={record.id}
            desc={record.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MainProducts;
