import { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';
import styles from './Loader.module.scss';

class Loader extends Component {
  render() {
    return (
      <div className={styles.Loader}>
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{
            margin: '0 auto',
          }}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
