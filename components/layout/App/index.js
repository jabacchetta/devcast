import React from 'react'

const App = ({ children }) => (
  <div>
    {children}
    <style jsx global>{`
    :root {
    /* Main Content */
    --background-desktop-width: 61.80339887vw;
    --background-mobile-height: 38.19660113vh;

    /* Brand Colors */
    --color-primary: rgba(255, 255, 255);
    --color-primary-light: rgba(81, 83, 105, 0.5);
    --color-primary-light-more: rgba(81, 83, 105, 0.25);

    --color-secondary: rgba(70, 199, 176, 1);
    --color-secondary-light: rgba(70, 199, 176, 0.5);
    --color-secondary-light-less: rgba(70, 199, 176, 0.8);

    /* Letter spacing */
    --letter-spacing-sm: 0.05rem;
    --letter-spacing-lg: 0.2rem;

    /* Durations */
    --hover-duration-fast: 0.25s;

    /* Adaptive screen sizes */
    --desktop: 980px;
  }

    html {
    box-sizing: border-box;
    font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    font-size: 1em;
    letter-spacing: var(--letter-spacing-sm);
    color: var(--color-primary);
    font-weight: 300;
  }

  body {
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
  }

  @media
  only screen and (min-width: 720px),
  only screen and (min-resolution: 1.2dppx) and (min-width: 360px),
  only screen and (min-resolution: 2.2dppx) and (min-width: 240px),
  only screen and (min-resolution: 3.2dppx) and (min-width: 180px) {
    body:before {
      background: linear-gradient(45deg, rgba(132, 67, 138, 0.31) 21%, rgba(65, 129, 224, 0.188) 100%), url(/static/backgrounds/teach-code.jpg) center / cover, var(--color-primary);
    }
  }

  @media
  only screen and (min-width: 1440px),
  only screen and (min-resolution: 1.2dppx) and (min-width: 720px),
  only screen and (min-resolution: 2.2dppx) and (min-width: 480px),
  only screen and (min-resolution: 3.2dppx) and (min-width: 360px) {
    body:before {
      background: linear-gradient(45deg, rgba(132, 67, 138, 0.31) 21%, rgba(65, 129, 224, 0.188) 100%), url(/static/backgrounds/teach-code.jpg) center / cover, var(--color-primary);
    }
  }

  @media
  only screen and (min-width: 2160px),
  only screen and (min-resolution: 1.2dppx) and (min-width: 1080px),
  only screen and (min-resolution: 2.2dppx) and (min-width: 720px),
  only screen and (min-resolution: 3.2dppx) and (min-width: 540px) {
    body:before {
      background: linear-gradient(45deg, rgba(132, 67, 138, 0.31) 21%, rgba(65, 129, 224, 0.188) 100%), url(/static/backgrounds/1.jpg) center / cover, var(--color-primary);
    }
  }

  @media (min-width: 1280px) {
    body:before {
      height: 100vh;
      width: var(--background-desktop-width);
    }
  }

  main,
  input,
  textarea {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    background: none;
    outline: 0;
    border: 0;
    padding: 0;
  }

  h1,
  h2,
  p {
    font-size: inherit;
    margin: 0;
  }

  a,
  area,
  button,
  [role="button"],
  input:not([type=range]),
  label,
  select,
  summary,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
    `}</style>
  </div>
)

export default App
