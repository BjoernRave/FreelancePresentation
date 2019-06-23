import React from "react";
import styled from "styled-components";
import image from "../static/me.jpg";

const PersonWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 80px 10%;
  background-color: black;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 30%;
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
      <Image src={image} />
      <TextBox>
        <PersonHeader>Hi, I am Björn Rave</PersonHeader>
        <PersonText>
          I am a 23 years old and originally from germany. I am a software
          developer and website creator
        </PersonText>
      </TextBox>
    </PersonWrapper>
  );
}
