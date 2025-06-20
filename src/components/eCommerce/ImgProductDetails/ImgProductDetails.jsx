import { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
const ImgProductDetails = ({ images }) => {
  const [selectedImg,setSelectedImg] = useState(0)
  return (
    <div className="img-box">
      <div className="images">
        {images &&
          images.length > 0 &&
          images.map((el , idx) => <img className="max-lg:h-[100px]" key={idx} onClick={() => setSelectedImg(idx)} src={el} alt="img" />)}
      </div>
      <div className="zoom">
        {images && images.length > 0 && <InnerImageZoom className="max-lg:h-[300px]" src={images[selectedImg]} />}
      </div>
    </div>
  );
};

export default ImgProductDetails;
