import React from "react";
import styled from "styled-components";

const StyledInvertedTriangle = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  z-index: -1;

  @media (max-width: 860px) {
    position: static;
    margin-bottom: -4px;
  }
`;

const InvertedTriangle = props => {
  return (
    <StyledInvertedTriangle>
      <svg
        version="1.1"
        viewBox="0 0 211.01 79.399"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-.83792 -111.24)">
          <path
            transform="matrix(.26458 0 0 .26458 -.097427 72.082)"
            d="m3.5352 147.99v300.09h797.52v-300.09h-0.22851l-199.32 150.04-199.32 150.04-199.32-150.04z"
            strokeWidth=".99835"
          />
        </g>
      </svg>
    </StyledInvertedTriangle>
  );
};

export default InvertedTriangle;
