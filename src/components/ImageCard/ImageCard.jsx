import PropTypes from "prop-types";
import Style from "./ImageCard.module.css";

export default function ImageCard({ image, onImgClick }) {
  return (
    <img
      className={Style.imgCard}
      src={image.urls.small}
      alt={image.description}
      onClick={() => onImgClick(image)}
    />
  );
}

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
