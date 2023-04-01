import styled from "styled-components";

import { useState } from "react";

import { Link } from "react-router-dom";

import InfiniteScroll from "react-infinite-scroll-component";

import { useGetPropertiesQuery } from "../app/api/properties";


import Card2 from "./Card2";

const Cards2 = ({ properties}) => {
    
  return (
    <>
      <Container>
        {properties &&
          properties?.map((el) => (
            <Link to={`/detail/${el.id}`} key={el.id}>
              <Card2 key={el.id} property={el} />
            </Link>
          ))}
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
`;

export default Cards2;