import styled from "styled-components";

import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";

import Cards from "../components/Cards";

import Footerbar from "../components/Footerbar";

const FilterCombine = () => {
  const { filter } = useSelector((state) => state.filterCombine);

  return (
    <div>
      <header>
        <Navbar />
        {/* <Filterbar /> */}
      </header>
      <Main>
        <Cards properties={filter} />
      </Main>
      <Footer>
        <Footerbar />
      </Footer>
    </div>
  );
};

const Container = styled.div``;

const Main = styled.main`
  height: 100%;
`;

const Footer = styled.footer`
  display: none;
`;

export default FilterCombine;
