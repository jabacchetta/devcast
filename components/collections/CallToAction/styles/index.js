import css from 'styled-jsx/css';

export default css`
  main {
    text-align: center;
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
`;
