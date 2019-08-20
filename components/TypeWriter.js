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
    <StyledTyping loop={true} cursor={<Cursor />} speed={20}>
      <MainHeader>a web presence</MainHeader>
      <Typing.Backspace delay={2000} count={15} />
      <MainHeader>fully customized experiences</MainHeader>
      <Typing.Backspace delay={2000} count={29} />
      <MainHeader>complex solutions</MainHeader>
      <Typing.Backspace delay={1700} count={18} />
      <MainHeader>an e-commerce store</MainHeader>
      <Typing.Backspace delay={2000} count={20} />
      <MainHeader>a custom CMS</MainHeader>
      <Typing.Backspace delay={2000} count={15} />
    </StyledTyping>
  );
}
