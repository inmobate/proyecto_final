import React from "react";
import styled from "styled-components";
import { variables } from "../Dash/ItemSidebar";
import {
  AiOutlineArrowsAlt,
  AiFillHome,
  AiOutlineForm,
  AiFillCalendar
} from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import {NavLink } from "react-router-dom";
export default function Sidebar({ sidebarOpen, setsidebarOpen }) {
  // const open = () => {
  //   setsidebarOpen(!sidebarOpen);
  // };
  return (
    <Container isOpen={!sidebarOpen}>
      {/* <button className="Sidebarbutton" onClick={open}>
        <AiOutlineArrowsAlt />
      </button> */}
      <div className="LogoInmobate">
        <div className="imgcontent">

        </div>
      </div>
      {linksArray.map(({icon, label, to}) => (
        <div className="me-2" key ={label}>
          <NavLink to={to} activeClassName="active" className ="Links">
            <div className="Linkicon">
              {icon}
            </div>
            {sidebarOpen &&(
              <span>{label}</span>
            )
            }
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
    label: "General",
    icon: <AiOutlineForm />,
    to: "/dashboard",
  },
  {
    label: "Mis Publicaciones",
    icon: <AiOutlineForm />,
    to: "/mypublic",
  },
   {
    label: "Comentarios",
    icon: <AiFillHome />,
    to: "/comments",
  },
];

//////////////////styledcomponents//////////////
const Container = styled.div`
.LogoInmobate {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.Links {
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.Links:hover {
  background-color: #333;
  color: #ff94e8;
}

.Linkicon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 1.5rem;
}

.active {
  background-color: #333;
  color: #ff94e8;
}

@media screen and (max-width: 768px) {
  .LogoInmobate {
    margin-top: 10px;
  }
  
  .Links {
    padding: 5px;
    margin: 3px 0;
    font-size: 0.8rem;
  }
  
  .Linkicon {
    margin-right: 5px;
    font-size: 1.2rem;
  }
}
`;