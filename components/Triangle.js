import React from "react";
import styled from "styled-components";

const StyledTriangle = styled.div`
  width: 90%;
  position: absolute;
  top: 0;
  z-index: -1;
  margin: 0 5%;

  @media (max-width: 860px) {
    position: static;
  }
`;

const TopBox = styled.div`
  height: 100px;
  background-color: black;
  width: 100%;

  @media (max-width: 1330px) {
    height: 150px;
  }

  @media (max-width: 1100px) {
    height: 200px;
  }

  @media (max-width: 980px) {
    height: 250px;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

const TriangleSVG = styled.svg`
  display: block;
  width: 100%;
`;

const Triangle = () => {
  return (
    <StyledTriangle>
      <TopBox />
      <TriangleSVG
        version="1.1"
        viewBox="0 0 210.57 79.395"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(.097427 -72.082)">
          <path
            transform="matrix(1.2573 0 0 .54739 -1.9742 32.698)"
            d="m168.97 71.948-83.741 145.04-83.741-145.04h83.741z"
            strokeWidth=".26458"
          />
        </g>
      </TriangleSVG>
    </StyledTriangle>
  );
};

export default Triangle;
