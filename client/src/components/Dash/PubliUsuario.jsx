import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import local from "../../app/api/config.js";
import Navbar2 from "../../components/Dash/NavBar2";
import Filterbar from "../../components/Filterbar";
import Footerbar from "../../components/Footerbar";
import "../Dash/PubliUsuario.css";
import Sidebar from "./Sidebar.jsx";

function PubliUsuario() {
  const [users, setUsers] = useState([]);
  const [isDeleted, setIsdeleted] = useState();

  async function getUsers() {
    await axios(`${local}/users`)
      .then((response) => {
        setUsers([...users, ...response.data]);
        // setProperties([...properties, ...data.properties]);
        // setTotalProperties(data.total);
      })
      .catch((error) => console.error(error));
  }

  // const local = "https://inmovate.onrender.com";
  // const local = "http://localhost:3001";
  const deleteProp = async (id, boolean) => {
    axios
      .put(`${local}/admin/User/${id}?soft_delete=${boolean}`)
      .then((response) => {
        console.log(response.data);
      });
  };

  const onClose = async (e) => {
    const userId = e.target.dataset.userId;
    if (e.target.id === "restaurar") {
      setIsdeleted(false);
      await deleteProp(userId, false);
    } else {
      setIsdeleted(true);
      await deleteProp(userId, true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [sidebarOpen, setsidebarOpen] = useState(true);
  return (
    <Container className={sidebarOpen ? "sidebarState active" : "sidebarState"}>
      <Header>
        <Navbar2 />
        <Sidebar sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen} />
      </Header>
      <Main>
        <div classname="container mt-5">
          <div classname="row  d-flex justify-content-center">
            <div classname="col-md-8">
              <div classname="headings d-flex justify-content-between align-items-center mb-3">
                <h5>Usuarios( {users.length} )</h5>
              </div>

              {users &&
                users.map((user) => {
                  return (
                    <div class="card p-3">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="user d-flex flex-row align-items-center">
                          <span>
                            <small class="font-weight-bold text-primary">
                              {user.name} - {user.lastName}
                            </small>
                          </span>
                        </div>
                        {user.soft_delete === true ? (
                          <>
                            <button
                              id="restaurar"
                              onClick={onClose}
                              data-user-id={user.id}
                            >
                              Res
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              id="Borrar"
                              onClick={onClose}
                              data-user-id={user.id}
                            >
                              Del
                            </button>
                          </>
                        )}
                      </div>

                      <div class="action d-flex justify-content-between mt-2 align-items-center">
                        <div class="reply px-4">
                          <small>Propiedades</small>
                          <span class="dots">.</span>
                          <small>Comentarios</small>
                        </div>

                        <div class="icons align-items-center">
                          <i class="fa fa-star text-warning"></i>
                          <i class="fa fa-check-circle-o check-icon"></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* <Infinite2 /> */}
      </Main>
      <Footer>
        <Filterbar />
        <Footerbar />
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 90px auto;
  transition: all 0.6s;
  &.active {
    grid-template-columns: 300px auto;
  }
  .NavBar2 {
    position: ri;
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

const Main = styled.main`
  height: 100%;
  position: relative;
  top: 45px;
  padding: 1em;
`;

const Footer = styled.footer`
  display: none;
`;

export default PubliUsuario;
