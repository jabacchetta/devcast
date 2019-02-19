import css from 'styled-jsx/css';

export default css`
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: var(--letter-spacing-lg);
    padding: 10px 0;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0);
    hover-duration: var(--hover-duration-fast);
  }

  .one {
    display: inline-block;
    width: 160px;
    margin: 0 6px 6px;
    color: #fac944;
  }

  .one:hover {
    color: #fac944;
    border-bottom: 1px solid #fac944;
    hover-duration: var(--hover-duration-fast);
  }

  .two {
    width: 160px;
    display: inline-block;
    margin: 0 6px 6px;
    max-width: 600px;
    color: #a644fa;
  }

  .three {
    display: block;
    width: 100%;
    box-shadow: 0 1px 4px rgba(0,0,0,1);
    max-width: 600px;
    border: 1px solid #fa4470;
    background-color: #fa4470;
    margin: 0 auto 24px;
  }

  .three:hover {
    color: #fa4470;
    hover-duration: var(--hover-duration-fast);
  }

  .two:hover {
    color: #a644fa;
    border-bottom: 1px solid #a644fa;
    hover-duration: var(--hover-duration-fast);
  }

  h1 {
    font-family: 'Playfair Display';
    font-size: 7vw;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 1000px) {
    h1 {
      font-size: 4rem;
    }
  }

  p {
    width: 100%;
    max-width: 600px;
    margin: auto;
    font-weight: 300;
    font-family: 'Roboto';
    font-size: 4.4vw;
    margin-bottom: 1.2rem;
  }

  @media screen and (min-width: 364px) {
    p {
      font-size: 1rem;
    }
  }

  input {
    display: block;
    margin: 0 auto 2.5rem;;
    font-size: 1rem;
    height: 6.4vh;
    max-height: 3.2rem;
    max-width: 600px;
    width: 100%;
    color: rgba(81, 83, 105, 1);
    border-radius: 2rem;
    padding: 0px 1.05rem;
    border: solid 2px #fff;
  }

  ::placeholder {
    color: var(--color-primary-light);
    font-size: 0.9rem;
  }

  input:focus {
    outline: none;
    border: 2px solid #4484fa;
  }

  main {
    position: relative;
    border: 6px solid #4484fa;
    min-width: 100vw;
    height: 100vh;
    padding: 48px;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)),
      url(/static/backgrounds/teach-code.jpg) center / cover, var(--color-primary);
  }

  img {
    width: 60%;
    max-width: 280px;
    align-self: center;
  }

  header {
    margin-bottom: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    text-align: center;
    margin-bottom: 48px;
  }
`;
