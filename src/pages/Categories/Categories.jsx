import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actGetCategories from "../../store/categories/act/actGetCategories";
import Loading from "../../components/feedback/Loading";
import { Link } from "react-router-dom";
import SpecialHeading from "../../components/common/SpecialHeading/SpecialHeading";

const Categories = () => {
  const { records, loading, error } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);
  
  return (
    <div>
      <SpecialHeading title={"الفئات"}/>
      <Loading status={loading} error={error}>
        <div className="container gridList">
        {records && records.length > 0 && records.map((el) => (
          <Link className="h-[300px] flex flex-col justify-around bg-white text-center" key={el._id} to={`/categories/products/${el._id}`}>
            {<img className="w-full h-[80%]" src={el.image} alt={el.name} />}
            <h2 className="text-2xl">{el.name}</h2>
          </Link>
        ))}
        </div>
      </Loading>
    </div>
  );
}

export default Categories