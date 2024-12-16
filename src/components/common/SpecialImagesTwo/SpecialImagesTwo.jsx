import img4 from "../../../assets/images/banner-4.jpg";
import img5 from "../../../assets/images/banner-5.jpg";
import img6 from "../../../assets/images/banner-6.jpg";
import img7 from "../../../assets/images/banner-7.jpg";
import "./SpecialImagesTwo.css"
const SpecialImagesTwo = () => {
  return (
    <section className="special-images-two">
      <div className="container">
        <img src={img4} alt="img-4" />
        <img src={img5} alt="img-5" />
        <img src={img7} alt="img-7" />
        <img src={img6} alt="img-6" />
      </div>
    </section>
  );
};

export default SpecialImagesTwo;
