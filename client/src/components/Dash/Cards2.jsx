import styled from "styled-components";
import Card2 from "./Card2";

const Cards2 = ({ properties }) => {
  return (
    <>
      <Container>
        {properties &&
          properties?.map((el) => (
            <Card2 key={el.id} id={el.id} property={el} />
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
