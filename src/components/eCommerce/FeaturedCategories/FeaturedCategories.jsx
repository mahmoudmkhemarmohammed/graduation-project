import { BsSmartwatch } from "react-icons/bs";
import { FcSmartphoneTablet } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./FeaturedCategories.css";
import { Link } from "react-router-dom";
import clothesImg from "../../../assets/images/clothes.png";
import choesImg from "../../../assets/images/choes.png";
const FeaturedCategories = () => {
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
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <Link to={"/"}>
              <FcSmartphoneTablet />
              <h2>هواتف ذكيه</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <BsSmartwatch />
              <h2>ساعات ذكيه</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <img src={clothesImg} alt="clothes" />
              <h2>ملابس</h2>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <img src={choesImg} alt="choes" />
              <h2>أحذيه</h2>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCategories;
