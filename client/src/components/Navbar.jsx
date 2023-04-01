import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";

import Searchbar from "./Searchbar";

import UserButton from "./UserButton";

import house from "../assets/house.svg";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname !== "/profile";
  return (
    <>
      <Nav>
        <Elements>
          <Link to="/home">
            <Brand>
              <Img src={house} alt="imagen" />
              <Title>INMOBATE</Title>
            </Brand>
          </Link>
          {isHome && <Searchbar />}
          <Items>
            <UserButton />
          </Items>
        </Elements>
      </Nav>
      <hr />
    </>
  );
};

const Nav = styled.nav`
  padding: 1em;
  background: #ffff;
`;

const Elements = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const Img = styled.img`
  width: 2em;
`;

const Title = styled.div`
  font-family: "Righteous", cursive;
  font-size: 2em;
`;

const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;


export default Navbar;
