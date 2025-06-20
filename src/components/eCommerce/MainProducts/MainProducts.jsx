import { useEffect, useState } from "react";
import SpecialHeading from "../../common/SpecialHeading/SpecialHeading";
import { useDispatch, useSelector } from "react-redux";
import actGetProducts from "../../../store/products/act/actGetProducts";
import Card from "../Card/Card";
import Loading from "../../feedback/Loading";
const MainProducts = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.products);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(actGetProducts(search));
  }, [dispatch, search]);
  return (
    <div className="main">
      <SpecialHeading title={"منتجاتنا"} />
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="ابحث عن المنتج الذي تريدة"
        className="bg-white inline-block border-0 outline-0 text-2xl rounded-md w-1/2 max-sm:w-full"
        style={{marginBottom: "15px" , padding: "15px"}}
      />
      <div className="products gridList">
        <Loading status={loading} error={error}>
          {records && records?.map((record) => (
            <Card
              key={record._id}
              images={record.images}
              name={record.name}
              price={record.price}
              productId={record._id}
            />
          ))}
        </Loading>
      </div>
    </div>
  );
};

export default MainProducts;
