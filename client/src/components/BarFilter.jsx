import React, { useState } from "react";
import { useGetTypeQuery } from "../app/api/properties";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BarFilter = () => {
  const [translate, setTranslate] = useState(0);
  const { data } = useGetTypeQuery();
  const navigate = useNavigate()

  return (
    <Container>
      <Flex style={{ right: `${translate}px` }}>
        {data && data.map((el) => <Item onClick={() => navigate(`/type/${el.name}`)}>{el.name}</Item>)}
      </Flex>
      <HandlerLeft
        onClick={() => setTranslate(translate - 200)}
        style={{ display: `${translate === 0 ? "none" : "block"}` }}
      >
        {"<"}
      </HandlerLeft>
      <HandlerRight
        onClick={() => setTranslate(translate + 200)}
        style={{ display: `${translate === 2600 ? "none" : "block"}` }}
      >
        {">"}
      </HandlerRight>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: white;
  overflow: hidden;
  user-select: none;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

const Item = styled.div`
  min-width: 100px;
  margin: 1rem;
  text-align: center;
  cursor: pointer;
`;

const HandlerLeft = styled.span`
  width: 15px;
  padding: 5px;
  text-align: center;
  position: absolute;
  top: 30px;
  left: 15px;
  z-index: 9;
  border-radius: 50%;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const HandlerRight = styled.span`
  width: 15px;
  padding: 5px;
  text-align: center;
  position: absolute;
  top: 30px;
  right: 15px;
  z-index: 9;
  border-radius: 50%;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export default BarFilter;
