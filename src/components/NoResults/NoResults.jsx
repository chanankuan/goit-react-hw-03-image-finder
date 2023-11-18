import { Component } from 'react';
// import ricky from '../../assets/audio.wav';

class NoResult extends Component {
  // state = {
  //   play: false,
  // };

  // audio = new Audio(ricky);

  // componentDidMount() {
  //   this.audio.addEventListener('ended', () => this.setState({ play: false }));
  // }

  // componentWillUnmount() {
  //   this.audio.removeEventListener('ended', () =>
  //     this.setState({ play: false })
  //   );
  // }

  // togglePlay = () => {
  //   this.setState({ play: !this.state.play }, () => {
  //     this.state.play ? this.audio.play() : this.audio.pause();
  //   });
  // };

  render() {
    // this.audio.play();
    return (
      <h1 style={{ textAlign: 'center' }}>
        No results. Please try another search
      </h1>
      // <>
      //   <div
      //     style={{
      //       width: '100%',
      //       height: '0',
      //       paddingBottom: '75%',
      //       position: 'relative',
      //     }}
      //   >
      //     <iframe
      //       title="abc"
      //       src="https://giphy.com/embed/Ju7l5y9osyymQ"
      //       width="100%"
      //       height="100%"
      //       style={{ position: 'absolute' }}
      //       className="giphy-embed"
      //       allowFullScreen
      //     ></iframe>
      //   </div>
      //   <p>
      //     <a href="https://giphy.com/gifs/rick-astley-Ju7l5y9osyymQ">
      //       via GIPHY
      //     </a>
      //   </p>
      //   <button onClick={this.togglePlay}>
      //     {this.state.play ? 'Pause' : 'Play'}
      //   </button>
      // </>
    );
  }
}

export default NoResult;
