import { Component } from 'react';
import { motion } from 'framer-motion';
import styles from './ImageGalleryItem.module.scss';

class ImageGalleryItem extends Component {
  render() {
    const { image, onOpenModal } = this.props;

    return (
      <>
        <motion.li
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={styles.GalleryItem}
          onClick={() => onOpenModal(image.largeImageURL)}
        >
          <img src={image.webformatURL} alt={image.tags} />
        </motion.li>
      </>
    );
  }
}

export default ImageGalleryItem;
