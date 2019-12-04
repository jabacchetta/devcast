import React from 'react';
import Social from '../../collections/Social';
import Header from '../Header';
import CallToAction from '../../collections/CallToAction';
import styles from './styles';

class FullPage extends React.Component {
  state = {
    height: '100vh',
  };

  setTrueViewportHeight() {
    const height = Math.min(
      document.documentElement.clientHeight,
      window.screen.height,
      window.innerHeight,
    );

    this.setState({ height: `${height}px` });
  }

  componentDidMount() {
    this.setTrueViewportHeight();
    window.addEventListener('resize', () => this.setTrueViewportHeight());
  }

  render() {
    return (
      <div className="border">
        <div className="image">
          <Header />
          <CallToAction />
          <Social />
        </div>
        <style jsx>{styles}</style>
        <style jsx>{`
          .border {
            height: ${this.state.height};
          }

          {/* .image {
            height: calc(${this.state.height} - 16px);
          } */}
        `}</style>
      </div>
    );
  }
}

export default FullPage;
