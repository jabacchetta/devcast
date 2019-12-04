import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>DevCast</title>
          <meta
            name="description"
            content="Developer-focused, expert-taught video tutorials that teach you how to code."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:700|Roboto:300,400,500"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
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

            --body-border-size: 8px;
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
            height: 100%;
          }

          main,
          input,
          textarea,
          div {
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

          a {
            text-decoration: none;
          }

          a,
          area,
          button,
          [role='button'],
          input:not([type='range']),
          label,
          select,
          summary,
          textarea {
            -ms-touch-action: manipulation;
            touch-action: manipulation;
          }
        `}</style>
      </Container>
    );
  }
}

export default MyApp;
