import PropTypes from "prop-types";

export default function ImageCard({ image, onImgClick }) {
  return (
    <img
      width={"400px"}
      height={"350px"}
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
