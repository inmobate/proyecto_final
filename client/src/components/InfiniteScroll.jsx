import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import styled from "styled-components";
import local from "../app/api/config";
import Card from "./Card";

const Infinite = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [properties, setProperties] = useState([]);
  const [totalProperties, setTotalProperties] = useState(0);

  async function fechProp(page) {
    await fetch(`${local}/property?page=${page}&size=18`)
      .then((response) => response.json())
      .then((data) => {
        setProperties([...properties, ...data.properties]);
        setTotalProperties(data.total);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fechProp(currentPage);
  }, [currentPage]);

  return (
    <InfiniteScroll
      dataLength={properties.length}
      next={() => setCurrentPage(currentPage + 1)}
      hasMore={true}
      loader={properties.length >= totalProperties ? "" : <h4>Loading...</h4>}
    >
      <Container>
        {properties &&
          properties.map((el) =>
            !el.soft_delete ? (
              <Link to={`/detail/${el.id}`} key={el.id}>
                <Card key={el.id} property={el} />
              </Link>
            ) : null
          )}
      </Container>
    </InfiniteScroll>
  );
};

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
`;

export default Infinite;
