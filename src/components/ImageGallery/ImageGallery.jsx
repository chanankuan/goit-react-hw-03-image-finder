import { Component } from 'react';
import styles from './ImageGallery.module.scss';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={styles.Gallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            thumbnail={image.webformatURL}
            tags={image.tags}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
