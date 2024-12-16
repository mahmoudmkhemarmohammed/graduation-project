import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
const ImgProductDetails = ({ img }) => {
  return <div className="img-box">{img && <InnerImageZoom src={img} />}</div>;
};

export default ImgProductDetails;
