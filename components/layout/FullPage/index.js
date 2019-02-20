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
      <div>
        <Header />
        <CallToAction />
        <Social />
        <style jsx>{styles}</style>
        <style jsx>{`
          div {
            height: ${this.state.height};
          }
        `}</style>
      </div>
    );
  }
}

export default FullPage;
