import ImageCard from "../ImageCard/ImageCard";
import PropTypes from "prop-types";
import Styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImgClick }) {
  return (
    <ul className={Styles.imageGallery}>
      {images.map((image) => (
        <li className={Styles.galleryItem} key={image.id}>
          <ImageCard image={image} onImgClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
