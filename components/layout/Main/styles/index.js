import css from 'styled-jsx/css';

export default css`
  a {
    text-decoration: none;
  }

  .one {
    color: #fac944;
  }

  .two {
    color: #a644fa;
  }

  .three {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-lg);
    padding: 10px 0;
    font-weight: 500;
    font-size: 0.7rem;
    display: block;
    width: 100%;
    box-shadow: 0 1px 4px rgba(0,0,0,1);
    max-width: 300px;
    border: 1px solid #fa4470;
    background-color: #fa4470;
    margin: 0 auto 4vh;
    height: 6vh;
    max-height: 3.2rem;
    min-height: 2.5rem;
  }

  .links {
    display: inline-block;
    margin: 0 auto 0.5vh;
    font-size: 3.4vw;
    word-spacing: 0.2rem;
    margin: 0 0 0 auto;
    font-weight: 300;
  }

  @media screen and (min-width: 470px) {
    .links {
      font-size: 1rem;
    }

    .three {
      font-size: 0.8rem;
    }
  }

  .one:hover ,
  .two:hover {
    text-decoration: underline;
    hover-duration: var(--hover-duration-fast);
  }

  .three:hover {
    color: #fa4470;
    background-color: rgba(0, 0, 0, 0);
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
    margin: 0 auto 4vh;
    font-size: 1rem;
    height: 6.4vh;
    max-height: 3.2rem;
    max-width: 600px;
    min-height: 2.5rem;
    width: 100%;
    color: rgba(81, 83, 105, 1);
    border-radius: 2rem;
    padding: 0px 1.05rem;
    border: solid 2px #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,1);
  }

  ::placeholder {
    color: var(--color-primary-light);
    font-size: 0.9rem;
  }

  input:focus {
    outline: none;
    border: 2px solid #4484fa;
  }

  img {
    width: 40%;
    max-width: 164px;
    align-self: center;
  }

  header {
    margin-bottom: 14vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    text-align: center;
  }
`;
