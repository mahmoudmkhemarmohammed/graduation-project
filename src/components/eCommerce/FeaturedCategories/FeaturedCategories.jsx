import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./FeaturedCategories.css";
import { useDispatch, useSelector } from "react-redux";
import actGetCategories from "../../../store/categories/act/actGetCategories";
import { Link } from "react-router-dom";
const FeaturedCategories = () => {
  const { records } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <section className="featured-categories">
      <div className="container">
        <Swiper
          slidesPerView={4}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
        >
          {records &&
            records.map((el) => (
              <SwiperSlide key={el._id}>
                <Link to={`/categories/products/${el._id}`}>
                  <img src={el.image} alt={el.name} />
                  <h2>{el.name}</h2>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCategories;
