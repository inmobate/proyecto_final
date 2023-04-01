import styled from "styled-components";

import { useParams } from "react-router-dom";

import { useGetPropertiesByCityQuery } from "../app/api/properties";

import Navbar from "../components/Navbar";

import Cards from "../components/Cards";

import Footerbar from "../components/Footerbar";

const Search = () => {
  const { filter } = useParams();
  const { data, isLoading } = useGetPropertiesByCityQuery(filter);

  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <Main>
        {isLoading && <div>cargando...</div>}
        <Cards properties={data} />
      </Main>
      <Footer>
        <Footerbar />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  min-width: 100%;
  height: 100vh;
`;

const Header = styled.header``;

const Main = styled.main`
  height: 100%;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Footer = styled.footer`
  display: none;
`;

export default Search;
