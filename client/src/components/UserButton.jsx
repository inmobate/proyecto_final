import styled from "styled-components";

import { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { HiOutlineUserCircle, HiMenu } from "react-icons/hi";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const UserButton = () => {
  const refMenu = useRef(null);
  const { logUser } = useSelector((state) => state.logUser);
  const [active, setActive] = useState(false);

  const { user,loginWithRedirect, logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleClickOutside = (event) => {
    if (refMenu.current && !refMenu.current.contains(event.target)) {
      setActive(false);
    }
  };
  return (
    <Button ref={refMenu}>
      <div onClick={() => setActive(!active)}>
        <HiMenu size={25} />
        <HiOutlineUserCircle size={25} />
      </div>
      <MenuHidden style={active ? null : { display: "none" }}>
        {isAuthenticated ? (
          <Ul>
            <Link to="/dashboard">
              <Li>Dashboard</Li>
            </Link>
            <hr />
            <div>
              <img src={user.picture} alt={user.given_name} />
              <h2>{user.given_name}</h2>
              <h2>{user.family_name}</h2>
            </div>
            <hr />
            <Li>Ayuda</Li>
            <Li
              onClick={() => {
                logout();
              }}
            >
              Cerrar Sesion
            </Li>
          </Ul>
        ) : (
          <Ul>
            <Li
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Iniciar Sesion
            </Li>
            <Li>Registrarse</Li>
            <hr />
            <Li>
              <p>Ayuda</p>
            </Li>
          </Ul>
        )}
      </MenuHidden>
    </Button>
  );
};

const Button = styled.div`
  padding: 0.5em;
  position: relative;
  border: 1px solid grey;
  border-radius: 15px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const MenuHidden = styled.div`
  position: absolute;
  top: 3em;
  right: 0em;
  z-index: 100;
`;

const Ul = styled.ul`
  min-width: 10em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border: 1px solid grey;
  border-radius: 1em;
  list-style: none;
  background: #ffff;
`;

const Li = styled.li`
  color: #000;
  &:hover {
    text-decoration: underline;
  }
`;

export default UserButton;
