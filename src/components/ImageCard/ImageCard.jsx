import css from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <img
      src={image.urls.small}
      alt={image.alt_description}
      className={css.galleryImage}
    />
  );
};
export default ImageCard;
