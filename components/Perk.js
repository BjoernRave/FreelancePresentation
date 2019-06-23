import React, { useRef } from "react";
import styled from "styled-components";

export const Image = styled.img`
  height: 100px;
  width: 100px;
`;

export const PerkWrapper = styled.div`
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

  @media (max-width: 860px) {
    font-size: 1.4rem;
  }
`;

const PerkHeader = styled.h5`
  font-size: 2.2rem;

  @media (max-width: 860px) {
    font-size: 2rem;
  }
`;

export default function Feature({ img, header, text, StyledPerk }) {
  const ref = useRef(null);
  // const isOnScreen = useOnScreen(ref, "-50px");

  // useEffect(() => {
  //   if (isOnScreen) {
  //     set({ opacity: 1, transform: "scale(1)" });
  //   }
  // }, [isOnScreen]);

  // const Perk = animated(StyledPerk);

  // const [props, set] = useSpring(() => ({
  //   from: { opacity: 0, transform: "scale(0)" },
  //   config: { delay: 1500, mass: 5, tension: 80 }
  // }));

  return (
    <StyledPerk ref={ref}>
      <ImageWrapper>
        <Image src={img} alt="" />
      </ImageWrapper>
      <PerkHeader>{header}</PerkHeader>
      <PerkDescription>{text}</PerkDescription>
    </StyledPerk>
  );
}
