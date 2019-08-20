import React from "react";
import styled from "styled-components";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import InvertedTriangle from "../components/InvertedTriangle";
import NavBar from "../components/Nav";
import PerksOverview from "../components/PerksOverview";
import Person from "../components/Person";
import Projects from "../components/Projects";
import Triangle from "../components/Triangle";
import TypeWriter from "../components/TypeWriter";

const FirstView = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  background-color: #000;
  padding: 0 5%;
  height: calc(100% - 70px);
`;

const HiddenHeader = styled.h1`
  visibility: hidden;
  display: none;
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
  margin: 0;
  margin-top: -20px;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 860px) {
    font-size: 3rem;
  }
`;

export default function Index() {
  return (
    <>
      <TopSection>
        <NavBar />
        <FirstView>
          <HiddenHeader>
            I can create a custom web experience for you
          </HiddenHeader>
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
        <Contact />
      </BottomSection>
      <Footer />
    </>
  );
}
