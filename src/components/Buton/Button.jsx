import { Component } from 'react';
import styles from './Button.module.scss';

class Button extends Component {
  render() {
    const { children, onLoadMore, page } = this.props;

    return (
      <button
        type="button"
        className={styles.Button}
        onClick={() => onLoadMore(page + 1)}
      >
        {children}
      </button>
    );
  }
}

export default Button;
