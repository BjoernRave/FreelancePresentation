import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding-top: 50px;
  background-color: black;
  padding-bottom: 20px;
`;

const Note = styled.p`
  color: white;
  margin: 0 auto;
  display: table;
  font-size: 1.4rem;
`;

const Footer = ({}) => {
  return (
    <FooterWrapper>
      <Note>Created with 🔆 in Barcelona</Note>
    </FooterWrapper>
  );
};

export default Footer;
