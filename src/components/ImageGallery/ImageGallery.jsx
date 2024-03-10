import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {images.map(image => (
        <li
          key={image.id}
          onClick={() => {
            openModal(image);
          }}
          className={css.listItem}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
