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
        <style jsx>{styles}</style>
      </main>
    );
  }
}

export default CallToAction;
