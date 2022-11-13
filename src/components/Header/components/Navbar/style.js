import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  margin: 0 20px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled(Link)`
  color: #f1f1f1;
  text-decoration: none;
  font-family: "Metropolis", sans-serif;
  font-weight: 400;
`;

const UserInfos = styled.div`
  display: flex;
  align-items: center;
`;

const UserPicture = styled.div`
  max-width: 50px;
  max-height: 50px;
  background-color: #b8dff2;
  border-radius: 50%;
  padding: 5px;
  & img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    max-width: 40px;
    max-height: 40px;
  }
`;

const UserName = styled.p`
  font-family: "Metropolis", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #b3b3b3;
  margin-left: 10px;

  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;

export default {
  Container,
  Nav,
  UserInfos,
  UserPicture,
  UserName,
  NavList,
  NavItem,
  NavLink,
};
