import { Component } from 'react';
import styles from './ImageGalleryItem.module.scss';

class ImageGalleryItem extends Component {
  render() {
    const { thumbnail, tags } = this.props;

    return (
      <li className={styles.GalleryItem}>
        <img src={thumbnail} alt={tags} />
      </li>
    );
  }
}

export default ImageGalleryItem;
