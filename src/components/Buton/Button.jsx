import { Component } from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';

class Button extends Component {
  render() {
    const { children, onLoadMore } = this.props;

    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        className={styles.Button}
        onClick={onLoadMore}
      >
        {children}
      </motion.button>
    );
  }
}

export default Button;
