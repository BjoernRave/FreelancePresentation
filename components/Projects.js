import React from "react";
import styled from "styled-components";
import CWCLogo from "../static/CWCLogo.png";
import HoscoLogo from "../static/hosco.png";
import SplitterzGif from "../static/SplitterzGif.gif";

const Wrapper = styled.section`
  padding: 0 5%;
  background-color: black;
`;

const Project = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr 5fr 1fr;
  grid-gap: 20px;
  grid-template-areas: "Image Header ." "Image Description Link";
  padding: 60px 0;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const Image = styled.img`
  grid-area: Image;
  width: 100%;
  border-radius: 40px;
`;

const ProjectName = styled.h5`
  font-weight: bold;
  grid-area: Header;
  font-size: 2.6rem;
  color: white;
  margin: 0;
  margin-top: 25px;
`;

const Description = styled.p`
  grid-area: Description;
  font-size: 2rem;
  color: white;
  margin: 0;
  line-height: 3rem;
  margin-top: 20px;

  @media (max-width: 576px) {
    text-align: center;
  }
`;

const Link = styled.a`
  font-size: 5rem;
  grid-area: Link;
  text-align: center;
  color: white;
  cursor: pointer;

  :hover {
    font-size: 6rem;
  }
`;

const Header = styled.h3`
  font-size: 7rem;
  font-weight: bold;
  color: white;
  margin: 0;
  padding-bottom: 50px;
  text-align: center;

  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;

const Projects = ({}) => {
  return (
    <Wrapper>
      <Header>Projects</Header>
      {projects.map(({ img, header, text, link }, index) => (
        <Project key={index}>
          <Image alt={header} src={img} />
          <ProjectName>{header}</ProjectName>
          <Description>{text}</Description>
          <Link rel="noopener" target="_blank" href={link}>
            <i className="uil uil-external-link-alt" />
          </Link>
        </Project>
      ))}
    </Wrapper>
  );
};

export default Projects;

const projects = [
  {
    img: SplitterzGif,
    header: "Splitterz",
    text:
      "It was my first project and it taught me alot about programming but also about marketing, monetizing and advertising.  - It is made with Unity3D and C#. I made all the graphics and game mechanics myself.",
    link:
      "https://play.google.com/store/apps/details?id=com.EnterRavement.Splitterz&hl=en"
  },
  {
    img: CWCLogo,
    header: "CrowdVoteCrypto",
    text:
      "a website to inform about crypto currency prices and exchange about the development of the different coins. Sadly the API's I used to get the cryptocurreny data are not working anymore and I haven't found any time to fix it 😅",
    link: "https://www.crowdvotecrypto.com"
  },
  // {
  //   img: GallowayPic,
  //   header: "Dithmarscher Galloways",
  //   text:
  //     "A website I created for a friend of mine. He and his family sell meat from galloway cows"
  // },
  {
    img: HoscoLogo,
    header: "Hosco",
    text:
      "This was the project, where I really became a professional programmer. I was working for 9 months in a startup in Barcelona, which is on its mission to conquer the international job market. It's core is a website, similar to Linkedin, but focussed on the hospitality sector. I was working full-time as a FullStack Developer on the website, added new features, polished old thing. Because of the small size I could get insights in every aspect of software development.",
    link: "https://www.hosco.com"
  }
  // {
  //   img: SplitterzGif,
  //   header: "CoolPlaces",
  //   text:
  //     "CoolPlaces is my newest project, which I completely built on my own. It is a platform, where users can add special places and meet up locally with people. ",
  //   link: "https://www.places.com"
  // }
];
