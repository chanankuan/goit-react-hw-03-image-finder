import { Component } from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';

class Button extends Component {
  render() {
    const { children, onLoadMore, page } = this.props;

    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        className={styles.Button}
        onClick={() => onLoadMore(page + 1)}
      >
        {children}
      </motion.button>
    );
  }
}

export default Button;
