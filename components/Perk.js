import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Image = styled.img`
  height: 100px;
  width: 100px;
`;

export const PerkWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  margin-top: -90px;

  @media (max-width: 860px) {
    margin-bottom: 20px;
    margin-top: 0;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
  background-color: black;
  padding: 30px;
`;

const PerkDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;

  @media (max-width: 860px) {
    font-size: 1.4rem;
  }
`;

const PerkHeader = styled.h5`
  font-size: 2.2rem;
  margin: 0;
  margin-top: 20px;

  @media (max-width: 860px) {
    font-size: 2rem;
  }
`;

export default function Feature({ img, header, text, StyledPerk, ...props }) {
  return (
    <StyledPerk {...props}>
      <ImageWrapper>
        <Image alt={header} src={img} alt="" />
      </ImageWrapper>
      <PerkHeader>{header}</PerkHeader>
      <PerkDescription>{text}</PerkDescription>
    </StyledPerk>
  );
}
