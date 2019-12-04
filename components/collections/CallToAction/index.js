import React from 'react';
import Form from '../Form';
import styles from './styles';

class CallToAction extends React.Component {
  render() {
    return (
      <main>
        <h1>Learn to Code</h1>
        <p>
          Developer-focused, expert-taught video tutorials.
        </p>
        <Form />
        <div></div>
        <style jsx>{styles}</style>
        <style jsx>{`
          div {
            min-height: 60px;
          }
        `}</style>
      </main>
    );
  }
}

export default CallToAction;
