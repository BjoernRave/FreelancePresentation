import App, { Container } from "next/app";
import { normalize } from "polished";
import React from "react";
import { createGlobalStyle } from "styled-components";
import Meta from "../components/Meta";

const GlobalStyles = createGlobalStyle`
${normalize()}


html {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  font-size: 10px;
  transition: all linear 0.1s;
}
*, *:before, *:after {
  box-sizing: inherit;
}
`;

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
        <Meta />
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
