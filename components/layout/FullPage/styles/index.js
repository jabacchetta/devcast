import css from 'styled-jsx/css';

export default css`
  div {
    position: relative;
    min-width: 100vw;
    padding: 24px;
    overflow: auto;
    border: 8px solid #4484fa;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
      url(/static/backgrounds/teach-code.jpg) center / cover, var(--color-primary);
  }

  @media only screen and (min-width: 720px),
    only screen and (min-resolution: 1.2dppx) and (min-width: 360px),
    only screen and (min-resolution: 2.2dppx) and (min-width: 240px),
    only screen and (min-resolution: 3.2dppx) and (min-width: 180px) {
    div {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
        url(/static/backgrounds/teach-code@2x.jpg) center / cover, var(--color-primary);
    }
  }

  @media only screen and (min-width: 1440px),
    only screen and (min-resolution: 1.2dppx) and (min-width: 720px),
    only screen and (min-resolution: 2.2dppx) and (min-width: 480px),
    only screen and (min-resolution: 3.2dppx) and (min-width: 360px) {
    div {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
        url(/static/backgrounds/teach-code@3x.jpg) center / cover, var(--color-primary);
    }
  }

  @media only screen and (min-width: 2160px),
    only screen and (min-resolution: 1.2dppx) and (min-width: 1080px),
    only screen and (min-resolution: 2.2dppx) and (min-width: 720px),
    only screen and (min-resolution: 3.2dppx) and (min-width: 540px) {
    div {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
        url(/static/backgrounds/teach-code@4x.jpg) center / cover, var(--color-primary);
    }
  }
`;
