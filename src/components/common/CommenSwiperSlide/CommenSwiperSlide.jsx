import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./CommenSwiperSlide.css";
import slide_1 from "../../../assets/images/slider-01.jpg";
import slide_2 from "../../../assets/images/slider-02.jpg";
import slide_3 from "../../../assets/images/slider-03.jpg";
import slide_4 from "../../../assets/images/slider-4.jpg";
import slide_5 from "../../../assets/images/slider-5.jpg";
import slide_6 from "../../../assets/images/slider-6.jpg";
const CommenSwiperSlide = () => {
  return (
    <section className="swiper-section">
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src={slide_1} alt="slide-1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_2} alt="slide-2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_3} alt="slide-3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_4} alt="slide-4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_5} alt="slide-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_6} alt="slide-6" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default CommenSwiperSlide;
