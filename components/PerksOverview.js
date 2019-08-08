import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import local from "../static/bcn.png";
import hands from "../static/Cooperation.png";
import tools from "../static/ModernTools.png";
import speed from "../static/PageSpeed.png";
import responsive from "../static/responsive-web-design.png";
import seo from "../static/SeoGoogle.png";
import Perk, { Image, ImageWrapper, PerkWrapper } from "./Perk";
import { useAnimation } from "framer-motion";
import { useScrollPosition } from "../lib/useScrollPosition";

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
  grid-gap: 10%;
  grid-template-columns: auto auto auto;
  grid-template-areas:
    ". local ."
    "seo . modern"
    ". responsive ."
    "speed . flexible";
  margin: 0 5%;
  margin-bottom: 300px;
  padding-top: 150px;

  @media screen and (max-width: 860px) {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 0;
  }
`;

export default function PerksOverview() {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const scrollPosition = useScrollPosition();
  const ref = useRef(null);
  const animation = useAnimation();

  useEffect(() => {
    if (ref.current.getBoundingClientRect().y <= 600 && !animationPlayed) {
      console.log("start");

      animation.start(i => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.1 }
      }));
      setAnimationPlayed(true);
    }
  }, [scrollPosition]);

  return (
    <PerksSection ref={ref}>
      {content.map(({ header, text, img, StyledPerk }, index) => (
        <Perk
          initial={{ opacity: 0, scale: 0 }}
          animate={animation}
          custom={index}
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
    img: local,
    StyledPerk: LocalPerk,
    header: "Location Independent",
    text:
      "No matter where you or your company is based, because of the technologies we have available nowadays, collaboration was never easier. "
  },
  {
    img: seo,
    StyledPerk: SeoPerk,
    header: "Search Engine Optimized",
    text:
      "It’s not all about the look of your website, but the internal values matter as well! When developing a website there are various factors to pay attention to so that search engines can show your website to the right people."
  },
  {
    img: tools,
    StyledPerk: ModernPerk,
    header: "Modern Technologies",
    text:
      "My website creation tools are following the newest standards on the market. Do you need a Progressive Web App? I can create it. Do you want source code, with a clear structure, so other people could eventually pick it up again and extend it right away? No problem"
  },
  {
    img: responsive,
    StyledPerk: ResponsivePerk,
    header: "Responsive Web Design",
    text:
      "This means my websites look good on multiple screen sizes, so no matter if your customer is using their phone, laptop or tablet, your website will always look great"
  },
  {
    img: speed,
    StyledPerk: SpeedPerk,
    header: "Loading Speed",
    text:
      "No matter if you only need a static webpage or require more advanced features, like dynamic content, my websites will always be blazing fast."
  },
  {
    img: hands,
    StyledPerk: FlexiblePerk,
    header: "Flexible Cooperation ",
    text:
      "I value partnerships where both parties can benefit. I am fully transparent with my work and the amount of time I require for your project"
  }
];
