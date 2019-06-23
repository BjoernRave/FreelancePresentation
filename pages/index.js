import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/Nav";
import PerksOverview from "../components/PerksOverview";
import Person from "../components/Person";
import Projects from "../components/Projects";
import TypeWriter from "../components/TypeWriter";
import InvertedTriangle from "../static/InvertedTriangle";
import Triangle from "../static/Triangle";

const breakPoints = { s: 860, m: 768, l: 992, xl: 1200 };

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

const BottomSection = styled.section``;

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

const BottomBox = styled.div`
  height: 250px;
  background-color: black;

  @media (max-width: 860px) {
    display: none;
  }
`;

export default function Index() {
  return (
    <>
      <main>
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
          <BottomBox />
        </MiddleSection>
        <BottomSection>
          <Person />
          <Projects />
        </BottomSection>
        <Footer />
      </main>
    </>
  );
}
