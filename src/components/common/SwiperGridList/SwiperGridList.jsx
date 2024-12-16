import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../eCommerce/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../../feedback/Loading";
import "./SwiperGridList.css";
const SwiperGridList = ({ stateSelector, actionAsync, btnStyle }) => {
  const { records, loading, error } = useSelector(stateSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionAsync());
  }, [dispatch]);
  return (
    <section className="products-slide">
      <div className="container">
        <Swiper
          navigation={{
            nextEl: `.swiper-button-next-product-${btnStyle}-grid`,
            prevEl: `.swiper-button-prev-product-${btnStyle}-grid`,
            clickable: true,
          }}
          grabCursor={true}
          pagination={{ clickable: true }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
        >
          <Loading status={loading} error={error}>
            {records.map((record) => (
              <SwiperSlide key={record.id}>
                <Card
                  img={record.img}
                  title={record.title}
                  desc={record.title}
                  price={record.price}
                  productId={record.id}
                />
              </SwiperSlide>
            ))}
          </Loading>
        </Swiper>
        <FaAnglesRight
          className={`swiper-button-next-product-${btnStyle}-grid`}
        />
        <FaAnglesLeft
          className={`swiper-button-prev-product-${btnStyle}-grid`}
        />
      </div>
    </section>
  );
};
export default SwiperGridList;