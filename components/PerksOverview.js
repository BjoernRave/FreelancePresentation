import React from "react";
import styled from "styled-components";
import local from "../static/bcn.png";
import hands from "../static/hands.png";
import tools from "../static/ModernTools.png";
import speed from "../static/PageSpeed.png";
import responsive from "../static/responsive-web-design.png";
import seo from "../static/SeoGoogle.png";
import Perk, { Image, ImageWrapper, PerkWrapper } from "./Perk";

const LocalPerk = styled(PerkWrapper)`
  grid-area: local;
  color: white;
  margin-top: 20px;

  ${ImageWrapper} {
    background-color: transparent;
  }

  ${Image} {
    transform: scale(2);
  }

  @media (max-width: 860px) {
    color: black;
  }
`;

const SeoPerk = styled(PerkWrapper)`
  grid-area: seo;
`;
const FlexiblePerk = styled(PerkWrapper)`
  grid-area: flexible;
  color: white;

  ${ImageWrapper} {
    background-color: white;

    @media (max-width: 860px) {
      background-color: black;
    }
  }

  @media (max-width: 860px) {
    color: black;
  }
`;
const ModernPerk = styled(PerkWrapper)`
  grid-area: modern;
`;
const SpeedPerk = styled(PerkWrapper)`
  grid-area: speed;
  color: white;

  ${ImageWrapper} {
    background-color: white;

    @media (max-width: 860px) {
      background-color: black;
    }
  }

  @media (max-width: 860px) {
    color: black;
  }
`;
const ResponsivePerk = styled(PerkWrapper)`
  grid-area: responsive;
`;

const PerksSection = styled.section`
  display: grid;
  grid-gap: 5%;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    ". local ."
    "seo . modern"
    ". responsive ."
    "speed . flexible";
  margin: 0 5%;

  @media screen and (max-width: 860px) {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 0;
  }
`;

export default function PerksOverview() {
  return (
    <PerksSection>
      {content.map(({ header, text, img, StyledPerk }, index) => (
        <Perk
          key={index}
          header={header}
          img={img}
          text={text}
          StyledPerk={StyledPerk}
        />
      ))}
    </PerksSection>
  );
}

const content = [
  {
    img: seo,
    StyledPerk: SeoPerk,
    header: "Search Engine Optimized",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum beatae quibusdam inventore. Vitae perspiciatis cupiditate consequuntur tenetur, sequi ipsa dolorum at exercitationem illum est sed veniam a, sit omnis."
  },
  {
    img: responsive,
    StyledPerk: ResponsivePerk,
    header: "Responsive Web Design",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum beatae quibusdam inventore. Vitae perspiciatis cupiditate consequuntur tenetur, sequi ipsa dolorum at exercitationem illum est sed veniam a, sit omnis."
  },
  {
    img: hands,
    StyledPerk: FlexiblePerk,
    header: "Flexible Cooperation ",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum beatae quibusdam inventore. Vitae perspiciatis cupiditate consequuntur tenetur, sequi ipsa dolorum at exercitationem illum est sed veniam a, sit omnis."
  },
  {
    img: local,
    StyledPerk: LocalPerk,
    header: "Local",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum beatae quibusdam inventore. Vitae perspiciatis cupiditate consequuntur tenetur, sequi ipsa dolorum at exercitationem illum est sed veniam a, sit omnis."
  },
  {
    img: tools,
    StyledPerk: ModernPerk,
    header: "Modern Technologies",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum beatae quibusdam inventore. Vitae perspiciatis cupiditate consequuntur tenetur, sequi ipsa dolorum at exercitationem illum est sed veniam a, sit omnis."
  },
  {
    img: speed,
    StyledPerk: SpeedPerk,
    header: "Loading Speed",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum beatae quibusdam inventore. Vitae perspiciatis cupiditate consequuntur tenetur, sequi ipsa dolorum at exercitationem illum est sed veniam a, sit omnis."
  }
];
