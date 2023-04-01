import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footerbar from "../components/Footerbar";
import Infinite from "../components/InfiniteScroll";
import BarFilter from "../components/BarFilter";

const Home = () => {
  return (
    <Container>
      <Header>
        <Navbar />
        <BarFilter />
      </Header>
      <Main>
        {/* <Cards /> */}
        <Infinite />
      </Main>
      <Footer>
        <Footerbar />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  min-width: 100%;
  min-height: 100vh;
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

export default Home;
