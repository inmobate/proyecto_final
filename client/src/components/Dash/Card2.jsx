import { useState } from "react";
import styled from "styled-components";
import houseError from "../../assets/houseError.svg";

const Card2 = ({ id, property }) => {
  const { pictures, city, country, price } = property;

  const [isDeleted, setIsdeleted] = useState(false);

  const deleteProp = (id) => {
    return function () {
      //fetch(`http://localhost:3001/admin/remove?=${property}/${id}`) deploy rute
      fetch(`http://localhost:3001/admin/?remove=property/${id}`)
        .then((value) => value.json())
        .then((response) => console.log(response));
    };
  };

  const onClose = () => {
    if (isDeleted) {
      setIsdeleted(false);
      console.log("es true y paso a false");
      deleteProp(id);
    } else {
      setIsdeleted(true);
      console.log("es false y paso a true");
    }
  };

  return (
    <Container>
      {isDeleted ? (
        <button onClick={() => onClose(id)}> ✅ </button>
      ) : (
        <button onClick={() => onClose(id)}> ❌ </button>
      )}
      <ImageWrapper>
        <Image
          src={pictures[0]}
          alt="imagen"
          onError={(e) => (e.target.src = `${houseError}`)}
        />
      </ImageWrapper>
      <Details>
        <Location>
          {city}, {country}
        </Location>
        <Price>${price} / noche</Price>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .boton {
    color: red;
  }
`;

const ImageWrapper = styled.div`
  height: 250px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5em;
`;

const Details = styled.div`
  margin-top: 1em;
  color: #000;
`;

const Location = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5em; ;
`;

const Price = styled.span`
  font-size: 1rem;
`;

export default Card2;
