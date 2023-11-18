import { Component } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import styles from './Modal.module.scss';
import Loader from 'components/Loader/Loader';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  state = {
    image: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose);
  }

  handleClose = event => {
    if (event.code === 'Escape' || event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  handleImageLoaded = () => {
    this.setState({ image: 'loaded' });
  };

  modal = {
    hidden: {
      // scale: 0,
      y: '-100vh',
    },
    visible: {
      // scale: 1,
      y: '0',
    },
    exit: {
      // scale: 0,
      y: '100vh',
    },
  };

  render() {
    return createPortal(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.Overlay}
        onClick={this.handleClose}
      >
        <motion.div
          variants={this.modal}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={styles.Modal}
        >
          {!this.state.image && <Loader className={styles.Loader} />}
          <img
            src={this.props.imageUrl}
            alt="hello"
            loading="lazy"
            onLoad={this.handleImageLoaded}
          />
        </motion.div>
      </motion.div>,
      modalRoot
    );
  }
}

export default Modal;
