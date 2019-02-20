import React from 'react';
import Social from '../../collections/Social';
import styles from './styles';

class Header extends React.Component {
  state = {
    height: '100vh',
  };

  render() {
    return (
      <header>
        <img src="static/brand/devcast-logo.png" alt="DevCast logo" />
        <div className="links">
          <a className="primaryLink" href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w">
            Free
          </a>
          <span> | </span>
          <a className="secondaryLink" href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w">
            Premium
          </a>
        </div>
        <style jsx>{styles}</style>
      </header>
    );
  }
}

export default Header;
