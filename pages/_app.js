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
}
*, *:before, *:after {
  box-sizing: inherit;
  transition: all linear 0.1s
}
`;

class MyApp extends App {
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
