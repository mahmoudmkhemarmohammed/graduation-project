import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actGetBrands from "../../store/brands/act/actGetBrands";
import SpecialHeading from "../../components/common/SpecialHeading/SpecialHeading";
import Loading from "../../components/feedback/Loading";
import { Link } from "react-router-dom";

const Brands = () => {
  const { records, loading, error } = useSelector((state) => state.brands);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetBrands());
  }, [dispatch]);

  return (
    <div>
      <SpecialHeading title={"العلامات التجارية"} />
      <Loading status={loading} error={error}>
        <div className="container gridList">
          {records &&
            records.length > 0 &&
            records.map((el) => (
              <Link
                className="h-[300px] flex flex-col justify-around bg-white text-center"
                key={el._id}
                to={`/brands/products/${el._id}`}
              >
                {
                  <img
                    className="w-full h-[80%]"
                    src={el.image}
                    alt={el.name}
                  />
                }
                <h2 className="text-2xl">{el.name}</h2>
              </Link>
            ))}
        </div>
      </Loading>
    </div>
  );
};

export default Brands;
