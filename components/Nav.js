import React from "react";
import styled from "styled-components";
import logo from "../static/Raven1.jpg";

const NavBar = styled.nav`
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  color: #000;
  align-items: center;
  margin: 10px 0;
  height: 60px;
`;

const NavItem = styled.a`
  margin-left: 30px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  :active {
    transform: scale(0.92);
  }

  @media (max-width: 860px) {
    margin-left: 10px;
  }
`;

export const Email = styled(NavItem)`
  font-size: 35px;
`;

const LogoImage = styled.img`
  height: 60px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.p`
  margin-left: 5px;
  font-size: 18px;
`;

const IconGroup = styled.div`
  display: flex;
`;

const ItemLabel = styled.label`
  font-size: 10px;
  cursor: pointer;
  text-align: center;
`;

export default function Navbar() {
  return (
    <NavBar>
      <Logo>
        <LogoImage src={logo} alt="" />
        <LogoText>Rahwn Websites</LogoText>
      </Logo>

      <IconGroup>
        <NavItem href="mailto:bjoern.rave@gmail.com">
          <i className="fa fa-envelope" />
          <ItemLabel>Write me!</ItemLabel>
        </NavItem>
        <NavItem href="https://github.com/BjoernRave" target="_blank">
          <i className="fab fa-github" />
          <ItemLabel>See my code</ItemLabel>
        </NavItem>
        <NavItem
          href="https://www.linkedin.com/in/bjoern-rave/"
          target="_blank"
        >
          <i className="fab fa-linkedin" />
          <ItemLabel>See my experience</ItemLabel>
        </NavItem>
      </IconGroup>
    </NavBar>
  );
}
