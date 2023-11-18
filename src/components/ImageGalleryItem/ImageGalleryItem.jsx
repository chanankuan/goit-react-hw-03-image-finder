import { Component } from 'react';
import styles from './ImageGalleryItem.module.scss';

class ImageGalleryItem extends Component {
  render() {
    const { id, thumbnail, tags, onOpenModal } = this.props;
    return (
      <>
        <li className={styles.GalleryItem} onClick={() => onOpenModal(id)}>
          <img src={thumbnail} alt={tags} />
        </li>
      </>
    );
  }
}

export default ImageGalleryItem;
