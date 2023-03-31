import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";

import Searchbar from "../Searchbar";


import house from "../../assets/house.svg";

const Navbar2 = () => {
  const location = useLocation();
  const isHome = location.pathname !== "/profile";
  return (
    <>
      <Nav2>
        {/* <Searchbar/> */}
        <Elements>
          <Link to="/home">
            {/* <Brand>
              <Img src={house} alt="imagen" />
              <Title>INMOBATE</Title>
            </Brand> */}
          </Link>
        </Elements>
      </Nav2>
      <hr />
    </>
  );
};

const Nav2 = styled.nav`
width:-150px;
  padding: 10px;
  background: #ffff;
`;

const Elements = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const Img = styled.img`
  width: 20px;
`;

const Title = styled.div`
  font-family: "Righteous", cursive;
  font-size: 20px;
`;


export default Navbar2;
