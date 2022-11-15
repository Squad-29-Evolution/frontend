import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const NavCss = css`
  max-width: 276px;
  width: 100%;
  background: #2e2e2e;
  transition: width 300ms ease-in-out;
`;

const Container = styled.div`
  ${NavCss}

  @media (max-width: 800px) {
    max-width: 0;
    &.active {
      max-width: 276px;
      width: 100%;
      position: absolute;
      inset: 0;
      z-index: 2;
    }
  }
`;

const Navbar = styled.div`
  ${NavCss}
  position: fixed;
  top: 0;
  height: 100vh;

  @media (max-width: 800px) {
    max-width: 0;
    height: 0;

    &.active {
      max-width: 276px;
      width: 100%;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  left: 220px;
  top: 19px;
  background-color: transparent;
  cursor: pointer;
  z-index: 4;
  display: none;

  & img {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 800px) {
    &.active {
      display: block;
    }
  }
`;

const Generic = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 40px;
  justify-content: space-between;
  height: 70%;
`;

const menuCss = css`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const MenuList = styled.ul`
  ${menuCss}
  margin-top: 110px;
`;

const MenuConfig = styled.div`
  ${menuCss};
`;

const Item = styled.li`
  margin: 10px 0;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    height: 3px;
    width: 0;
    bottom: -5px;
    background: linear-gradient(180deg, #ff8507 0%, #ff5a23 100%);
  }

  &:hover {
    &:before {
      width: 100%;
      left: 2px;
      transition: width 100ms ease-in-out;
    }
  }
`;

const MenuLink = styled(Link)`
  color: #f1f1f1;
  font-family: "Metropolis", sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  text-decoration: none;
  display: flex;
  align-items: center;

  & img {
    max-height: 30px;
    max-width: 30px;
    margin-right: 10px;
  }
`;

export default {
  Container,
  Navbar,
  MenuList,
  MenuConfig,
  Item,
  MenuLink,
  Generic,
  CloseButton,
};
