import css from 'styled-jsx/css';

export default css`
  header {
    margin-bottom: 14vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 40%;
    max-width: 164px;
    align-self: center;
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
  }

  .primaryLink {
    color: #fac944;
  }

  .secondaryLink {
    color: #fa4470;
  }

  .primaryLink:hover,
  .secondaryLink:hover {
    text-decoration: underline;
    hover-duration: var(--hover-duration-fast);
  }
`;
