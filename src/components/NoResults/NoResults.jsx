import { Component } from 'react';

class NoResult extends Component {
  render() {
    return (
      <>
        <div style={{ width: '100%' }}>
          <div
            style={{
              height: '100%',
              paddingBottom: '66.66666666666666%',
              position: 'relative',
              width: '100%',
            }}
          >
            <iframe
              title="gif"
              allowFullScreen=""
              allow="autoplay"
              height="50%"
              src="https://giphy.com/embed/u2wg2uXJbHzkXkPphr/video"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              width="50%"
            ></iframe>
          </div>
        </div>
      </>
    );
  }
}

export default NoResult;
