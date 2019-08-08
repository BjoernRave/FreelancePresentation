import Head from "next/head";
import React from "react";

export default function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Rahwn Websites | I create custom websites for you</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <link rel="canonical" href="https://www.rahwn.com" />
      <link
        rel="stylesheet"
        href="https://unicons.iconscout.com/release/v1.0.0/css/unicons.css"
      />
      <meta
        name="google-site-verification"
        content="Ae-htyf1XdbadkG7FXD6BbOsyw_oYgzsmqjMlX7_Krc"
      />
      <meta
        name="description"
        content="Here I offer my services as a web developer. I am an experiencend full-stack engineer from germany, available to help you with your online project."
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <link rel="icon" href="/static/favicon.ico" />
      <meta name="twitter:url" content="https://www.rahwn.com" />
      <meta
        name="twitter:title"
        content="Rahwn Websites - I create custom websites for you"
      />
      <meta
        name="twitter:description"
        content="Here I offer my services as a web developer. I am an experiencend full-stack engineer, capable of advanced tasks"
      />
      <meta
        name="twitter:image"
        content="https://www.rahwn.com/static/Logo.png"
      />
      <meta name="twitter:site" content="@bjoern_rave" />
      <meta name="twitter:creator" content="@bjoern_rave" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Rahwn Websites - I create custom websites for you"
      />
      <meta
        property="og:description"
        content="Here I offer my services as a web developer. I am an experiencend full-stack engineer, capable of advanced tasks"
      />
      <meta property="og:site_name" content="Rahwn Websites" />
      <meta property="og:url" content="https://www.rahwn.com" />
      <meta
        property="og:image"
        content="https://www.rahwn.com/static/Raven1.png"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ` { "@context": "https://schema.org",
 "@type": "Organization",
 "name": "Rahwn Websites",
 "url": "https://www.rahwn.com",
 "logo": "https://www.rahwn.com/static/Logo.png",
 "foundingDate": "2019",
 "founders": [
 {
 "@type": "Person",
 "name": "Björn Rave"
 }
 ],
 "contactPoint": {
 "@type": "ContactPoint",
 "contactType": "Project Requests",
 "email": "bjoern-rave@gmail.com"
 },
 "sameAs": [ 
 "https://twitter.com/bjoern_rave",
 "https://github.com/BjoernRave",
 "https://www.linkedin.com/in/bjoern-rave/"
 ]}`
        }}
      />
    </Head>
  );
}
