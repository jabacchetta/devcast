import React from 'react';
import Social from '../../collections/Social';
import styles from './styles';

class Main extends React.Component {
  render() {
    return (
      <main>
        <header>
          <img src="static/brand/devcast-logo.png" alt="DevCast logo" />
          <Social key="social" type="header" />
        </header>
        <div className="content">
          <h1>Learn to Code</h1>
          <p>
            Subscribe to get exclusive offers on developer-focused, expert-taught tutorials,
            featuring languages, tools, algorithms, and frameworks.
          </p>
          <input type="text" placeholder="Enter your email address" />
          <a className="three" href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w">Subscribe</a>
          <a className="one" href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w">
            Premium Courses
          </a>
          <a className="two" href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w">
            Free Videos
          </a>
        </div>
        <Social key="social" type="footer" />
        <style jsx>{styles}</style>
      </main>
    );
  }
}

export default Main;
