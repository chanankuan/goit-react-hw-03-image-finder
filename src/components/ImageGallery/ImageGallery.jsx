import { Component } from 'react';
import styles from './ImageGallery.module.scss';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images, onOpenModal } = this.props;

    return (
      <ul className={styles.Gallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            thumbnail={image.webformatURL}
            imageUrl={image.fullHDURL}
            tags={image.tags}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
