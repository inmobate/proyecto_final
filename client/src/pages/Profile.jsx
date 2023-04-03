import styled from "styled-components";

import Filterbar from "../components/Filterbar";

import { useState } from "react";
import Infinite2 from "../components/Dash/InfiniteScrolll2";
import Navbar2 from "../components/Dash/NavBar2";
import Sidebar from "../components/Dash/Sidebar";
import Footerbar from "../components/Footerbar";

const Profile = () => {
  const [sidebarOpen, setsidebarOpen] = useState(true);
  return (
    <Container className={sidebarOpen ? "sidebarState active" : "sidebarState"}>
      <Navbar2 />
      <Header>
        <Sidebar sidebarOpen={sidebarOpen} setsidebarOpen={setsidebarOpen} />
      </Header>
      <Main>
        {/* <Cards /> */}
        <Infinite2/>
      </Main>
      <Footer>
        <Filterbar />
        <Footerbar />
      </Footer>
    </Container>
  );
};

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
  padding: 1em;
`;

const Footer = styled.footer`
  display: none;
`;

export default Profile;
