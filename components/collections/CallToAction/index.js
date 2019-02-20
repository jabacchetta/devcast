import React from 'react';
import Form from '../Form';
import styles from './styles';

class CallToAction extends React.Component {
  render() {
    return (
      <main>
        <h1>Learn to Code</h1>
        <p>
          Subscribe to get exclusive offers on developer-focused, expert-taught video tutorials,
          featuring languages, tools, algorithms, and frameworks.
        </p>
        <Form />
        <style jsx>{styles}</style>
      </main>
    );
  }
}

export default CallToAction;
