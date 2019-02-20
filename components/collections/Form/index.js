import React from 'react';
import styles from './styles';

class FullPage extends React.Component {
  render() {
    return (
      <form
        action="https://app.us20.list-manage.com/subscribe/post?u=d39d57938cfea770d5591be32&amp;id=d04ffee1c8"
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <input type="email" placeholder="Enter your email address" name="EMAIL" required />
        <button
          href="https://www.youtube.com/channel/UCmZ3Ev9DjxGUbQ3SwibhT-w"
          type="submit"
        >
          Subscribe
        </button>
        <style jsx>{styles}</style>
      </form>
    );
  }
}

export default FullPage;
