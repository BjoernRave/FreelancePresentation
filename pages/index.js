import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/Nav";
import PerksOverview from "../components/PerksOverview";
import Person from "../components/Person";
import Projects from "../components/Projects";
import TypeWriter from "../components/TypeWriter";
import InvertedTriangle from "../components/InvertedTriangle";
import Triangle from "../components/Triangle";

const FirstView = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  background-color: #000;
  padding: 0 5%;
  height: calc(100% - 70px);
`;

const TopSection = styled.section`
  height: 100vh;
  margin: 0 5%;
`;

const MiddleSection = styled.section`
  position: relative;
`;

const BottomSection = styled.section`
  background-color: black;
  padding-bottom: 50px;
  padding-top: 100px;
`;

const TopHeader = styled.h3`
  color: #fff;
  font-size: 5rem;
  justify-self: start;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 860px) {
    font-size: 3rem;
  }
`;

const BottomHeader = styled.h3`
  color: #fff;
  font-size: 50px;
  justify-self: end;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 860px) {
    font-size: 3rem;
  }
`;

const Contact = styled.a`
  background-color: white;

  background: rgba(210, 255, 82, 1);
  background: linear-gradient(
    135deg,
    rgba(210, 255, 82, 1) 0%,
    rgba(75, 156, 0, 1) 74%,
    rgba(75, 156, 0, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d2ff52', endColorstr='#4b9c00', GradientType=1 );

  border-radius: 20px;
  padding: 15px;
  margin: 0 auto;
  font-size: 2.8rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  display: table;

  :hover {
    box-shadow: 0 0 20px rgba(210, 255, 82, 1);
  }

  i {
    margin-left: 5px;
  }
`;

export default function Index() {
  return (
    <>
      <TopSection>
        <NavBar />
        <FirstView>
          <TopHeader>I can create</TopHeader>
          <TypeWriter />
          <BottomHeader>for you.</BottomHeader>
        </FirstView>
      </TopSection>
      <MiddleSection>
        <Triangle />
        <PerksOverview />
        <InvertedTriangle />
      </MiddleSection>
      <BottomSection>
        <Person />
        <Projects />
        <Contact rel="noopener" href="mailto:bjoern.rave@gmail.com">
          Get in Contact <i className="uil uil-envelope" />
        </Contact>
      </BottomSection>
      <Footer />
    </>
  );
}
