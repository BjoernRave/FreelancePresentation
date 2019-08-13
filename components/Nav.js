import React from "react";
import styled from "styled-components";
import logo from "../static/Logo.png";

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

const Icon = styled.i`
  font-size: 36px;
`;

const ItemLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`;

export default function Navbar() {
  return (
    <NavBar>
      <Logo>
        <LogoImage src={logo} alt="Rahwn Websites Logo" />
        <LogoText>Rahwn Websites</LogoText>
      </Logo>

      <IconGroup>
        <NavItem rel="noopener" href="mailto:rahwn-websites@gmail.com">
          <Icon className="uil uil-envelope" />
          <ItemLabel>Write me!</ItemLabel>
        </NavItem>
        <NavItem
          rel="noopener"
          href="https://github.com/BjoernRave"
          target="_blank"
        >
          <Icon className="uil uil-github" />
          <ItemLabel>See my code</ItemLabel>
        </NavItem>
        <NavItem
          rel="noopener"
          href="https://www.linkedin.com/in/bjoern-rave/"
          target="_blank"
        >
          <Icon className="uil uil-linkedin" />
          <ItemLabel>See my experience</ItemLabel>
        </NavItem>
      </IconGroup>
    </NavBar>
  );
}
