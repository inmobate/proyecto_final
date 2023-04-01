import React, { useEffect, useState } from "react";
import InfiniteScroll2 from "react-infinite-scroll-component";
import styled from "styled-components";
import local from "../../app/api/config";
import Card2 from "./Card2";

const Infinite2 = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [properties, setProperties] = useState([]);
  const [totalProperties, setTotalProperties] = useState(0);

  async function fechProp(page) {
    await fetch(`${local}/property?page=${page}&size=12`)
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
    <InfiniteScroll2
      dataLength={properties.length}
      next={() => setCurrentPage(currentPage + 1)}
      hasMore={true}
      loader={properties.length >= totalProperties ? "" : <h4>Loading...</h4>}
    >
      <Container>
        {properties &&
          properties.map((el) => (
            <Card2 key={el.id} id={el.id} property={el} />
          ))}
      </Container>
    </InfiniteScroll2>
  );
};

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
`;

export default Infinite2;
