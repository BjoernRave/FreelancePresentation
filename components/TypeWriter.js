import React from "react";
import Typing from "react-typing-animation";
import styled from "styled-components";
import Cursor from "./Cursor";

const MainHeader = styled.h1`
  color: #fff;
  font-size: 6.5rem;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 860px) {
    font-size: 4rem;
  }
`;

const StyledTyping = styled(Typing)`
  justify-self: center;
  display: flex;
  align-items: center;
  text-align: center;
`;

export default function TypeWriter() {
  return (
    <StyledTyping loop={true} cursor={<Cursor />} speed={10}>
      <MainHeader>a web presence</MainHeader>
      <Typing.Backspace delay={2000} speed={-20} count={26} />
      <MainHeader>an image gallery</MainHeader>
      <Typing.Backspace delay={2500} speed={-20} count={26} />
      <MainHeader>a contact form</MainHeader>
      <Typing.Backspace delay={2000} speed={-20} count={26} />
      <MainHeader>fully customizable</MainHeader>
      <Typing.Backspace delay={2000} speed={-20} count={26} />
      <MainHeader>complex solutions</MainHeader>
      <Typing.Backspace delay={1700} speed={-20} count={26} />
      <MainHeader>an e-commerce store</MainHeader>
      <Typing.Backspace delay={2000} speed={-20} count={26} />
    </StyledTyping>
  );
}
