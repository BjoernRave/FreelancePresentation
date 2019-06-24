import { NextSeo } from "next-seo";
import App, { Container } from "next/app";
import { normalize } from "polished";
import React from "react";
import { createGlobalStyle } from "styled-components";
import Meta from "../components/Meta";

const title = "Rahwn Websites";

const description =
  "Website to promote my freelance skills as a software developer for websites";

const url = "https://www.bjoern-rave.tech";

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
        <NextSeo
          title={title}
          description={description}
          canonical={url}
          openGraph={{
            url,
            description,
            title
          }}
          twitter={{
            handle: "@RaveBjorn"
          }}
        />
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
