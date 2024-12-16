import CommenSwiperSlide from "../../components/common/CommenSwiperSlide/CommenSwiperSlide"
import SpecialHeading from "../../components/common/SpecialHeading/SpecialHeading"
import SpecialImages from "../../components/common/SpecialImages/SpecialImages"
import SpecialImagesTwo from "../../components/common/SpecialImagesTwo/SpecialImagesTwo"
import SwiperGridList from "../../components/common/SwiperGridList/SwiperGridList"
import FeaturedCategories from "../../components/eCommerce/FeaturedCategories/FeaturedCategories"
import actGetBestSalingProducts from "../../store/products/act/actGetBestSalingProducts"
import actGetOnSaleProducts from "../../store/products/act/actGetOnSaleProducts"
import actGetProducts from "../../store/products/act/actGetProducts"
const Home = () => {
  return (
    <>
    <CommenSwiperSlide />
    <SpecialHeading title={"الفئات المميزة"}/>
    <FeaturedCategories />
    <SpecialHeading title={"منتجاتنا"} />
    <SwiperGridList stateSelector={(state) => state.products} actionAsync={actGetProducts} btnStyle={"all"}/>
    <SpecialImages />
    <SpecialHeading title={"المنتجات الأكثر مبيعا"} />
    <SwiperGridList stateSelector={(state) => state.bestSalingProducts} actionAsync={actGetBestSalingProducts} btnStyle={"best"}/>
    <SpecialImagesTwo />
    <SpecialHeading title={"التي تحتوي علي خصم"} />
    <SwiperGridList stateSelector={(state) => state.onSaleProducts} actionAsync={actGetOnSaleProducts} btnStyle={"sale"}/>
    </>
  )
}

export default Home