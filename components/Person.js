import React from "react";
import styled from "styled-components";
import image from "../static/me.png";

const PersonWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 80px 10%;
  background-color: black;
  padding-bottom: 100px;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 60%;
  height: auto;

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
`;

const PersonText = styled.p`
  font-size: 2rem;
`;

export default function Person() {
  return (
    <PersonWrapper>
      <Image alt="Picture of me" src={image} />
      <TextBox>
        <PersonHeader>Hi, I am Björn Rave</PersonHeader>
        <PersonText>
          Hello, I am Björn Rave, a fullstack engineering and passionate web
          developer from germany. Wirkung in a thriving startup for the last
          year I could gain a lot of insights and gain knowledge in all areas
          neccessary to run and maintain a high demand enterprise-grade website.
        </PersonText>
      </TextBox>
    </PersonWrapper>
  );
}
