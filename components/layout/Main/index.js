import React from 'react';
import Social from '../../collections/Social';
import styles from './styles';

class Main extends React.Component {
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
      <main>
        <header>
          <img src="static/brand/devcast-logo.png" alt="DevCast logo" />
          <div className="links">
            <a className="one" href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w">
              Premium
            </a>
            <span> • </span>
            <a className="two" href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w">
              Free
            </a>
          </div>
        </header>
        <div className="content">
          <h1>Learn to Code</h1>
          <p>
            Subscribe to get exclusive offers on developer-focused, expert-taught tutorials,
            featuring languages, tools, algorithms, and frameworks.
          </p>
          <form
            action="https://app.us20.list-manage.com/subscribe/post?u=d39d57938cfea770d5591be32&amp;id=d04ffee1c8"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <input type="email" placeholder="Enter your email address" name="EMAIL" required />
            <button
              className="three"
              href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <Social />
        <style jsx>{styles}</style>
        <style jsx>{`
          main {
            padding: 24px;
            position: relative;
            overflow: auto;
            border: 6px solid #4484fa;
            min-width: 100vw;
            height: ${this.state.height};
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
              url(/static/backgrounds/teach-code.jpg) center / cover, var(--color-primary);
          }
        `}</style>
      </main>
    );
  }
}

export default Main;
