import css from 'styled-jsx/css';

export default css`
  input {
    display: block;
    margin: 0 auto 36px;
    font-size: 1rem;
    height: 6.4vh;
    max-height: 3.2rem;
    max-width: 600px;
    min-height: 2.5rem;
    width: 100%;
    color: rgba(81, 83, 105, 1);
    border-radius: 2rem;
    padding: 0px 1.05rem;
    border: 1px solid #fff;
    outline: none;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
  }

  input:focus {
    border-color: #4484fa;
    box-shadow: 0 0 0 1px #4484fa;
  }

  ::placeholder {
    color: var(--color-primary-light);
    font-size: 0.9rem;
  }

  button {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-lg);
    padding: 10px 0;
    font-weight: 500;
    font-size: 0.7rem;
    display: block;
    width: 100%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
    max-width: 300px;
    border: 1px solid #4484fa;
    background-color: #4484fa;
    margin: 0 auto 4vh;
    height: 6vh;
    max-height: 3.2rem;
    min-height: 2.5rem;
  }

  @media screen and (min-width: 470px) {
    button {
      font-size: 0.8rem;
    }
  }

  button:hover {
    color: #4484fa;
    background-color: rgba(0, 0, 0, 0);
    hover-duration: var(--hover-duration-fast);
  }
`;
