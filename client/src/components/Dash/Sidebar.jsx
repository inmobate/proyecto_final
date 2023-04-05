import React from "react";
import { AiFillHome, AiOutlineForm } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { variables } from "../Dash/ItemSidebar";
export default function Sidebar({ sidebarOpen, setsidebarOpen }) {
  // const open = () => {
  //   setsidebarOpen(!sidebarOpen);
  // };
  return (
    <Container isOpen={!sidebarOpen}>
      {/* <button className="Sidebarbutton" onClick={open}>
        <AiOutlineArrowsAlt />
      </button> */}
      <div classname="LogoInmobate">
        <div classname="imgcontent"></div>
      </div>
      {linksArray.map(({ icon, label, to }) => (
        <div classname="me-2" key={label}>
          <NavLink to={to} activeClassName="active" className="Links">
            <div classname="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
    </Container>
  );
}

const linksArray = [
  {
    label: "Home",
    icon: <AiFillHome />,
    to: "/home",
  },
  {
    label: "Estadisticas",
    icon: <ImStatsBars />,
    to: "/stats",
  },
  {
    label: "Propiedades",
    icon: <AiOutlineForm />,
    to: "/dashboard",
  },
  {
    label: "Usuarios",
    icon: <AiOutlineForm />,
    to: "/mypublic",
  },
];

//////////////////styledcomponents//////////////
const Container = styled.div`
  position: sticky;
  padding-top: 20px;
  .Sidebarbutton {
    /* border: none; */
    position: fixed;
    top: ${variables.xxlSpacing};
    right: -15px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
  }
  .LogoInmobate {
    display: flex;
    align-items: center;
    padding-bottom: ${variables.lgSpacing};
    .imgcotent {
      /* h1{display:flex;
  height:auto;
} */
      cursor: pointer;
      transition: all 0.3s;
      transition: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)};
    }
    h2 {
      display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
    }
  }
  .LinkContainer {
    color: #ff9de0;
    margin: 8px 0;
    padding: 0 15%;
  }
  .Links {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: calc(${variables.smSpacing}-2px) 0;
    color: black;
    font-size: 22px;
    .Linkicon {
      padding: ${variables.smSpacing} ${variables.mdSpacing};
      display: flex;
      svg {
        font-size: 30px;
        color: black;
      }
    }
  }
`;
