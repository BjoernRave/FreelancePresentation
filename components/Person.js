import React from "react";
import styled from "styled-components";

const PersonWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 80px 0 80px 10%;
  background-color: black;
  padding-bottom: 100px;
  position: relative;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  z-index: 1;

  @media (max-width: 860px) {
    width: 90%;
  }
`;

const TextBox = styled.div`
  color: white;
  margin-left: 30px;
`;

const PersonHeader = styled.h4`
  font-size: 4rem;
  font-weight: bold;
  z-index: 1;
`;

const PersonText = styled.p`
  font-size: 2rem;
  z-index: 1;
`;

const BackgroundText = styled.p`
  position: absolute;
  left: -50px;
  color: white;
  font-size: 30vw;
  font-weight: bold;
  opacity: 0.2;
  top: -50%;
  width: 100%;
  word-wrap: break-word;
  line-height: 450px;
`;

export default function Person() {
  return (
    <PersonWrapper>
      <TextBox>
        <PersonHeader>Hi, I am Björn Rave</PersonHeader>
        <PersonText>
          I am a fullstack engineer and passionate web developer from germany.
          Working in a thriving startup for the last year I could gain a lot of
          insights and knowledge in all areas neccessary to run and maintain a
          high demand enterprise-grade website.
        </PersonText>
      </TextBox>
      <BackgroundText>Rahwn</BackgroundText>
      <Image alt="Picture of me" src={require("../static/meBW.png")} />
    </PersonWrapper>
  );
}
