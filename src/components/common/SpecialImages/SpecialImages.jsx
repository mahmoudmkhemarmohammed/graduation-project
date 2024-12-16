import img1 from "../../../assets/images/banner-1.jpg"
import img2 from "../../../assets/images/banner-2.jpg"
import img3 from "../../../assets/images/banner-3.jpg"
import "./SpecialImages.css"
const SpecialImages = () => {
  return (
    <section className="special-images">
        <div className="container">
            <img src={img3} alt="img-3" />
            <img src={img2} alt="img-2" />
            <img src={img1} alt="img-1" />
        </div>
    </section>
  )
}

export default SpecialImages