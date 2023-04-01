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
  .boton{
  --c:  #ffb9e4; 
  box-shadow: 25px inset var(--c); 
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: 
    var(--_g) calc(var(--_p,0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p,0%)) 0%,
    var(--_g) calc(var(--_p,0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p,0%)) 100%;
  background-size: 50.5% calc(var(--_p,0%)/2 + .5%);
  outline-offset: .1em;
  transition: background-size .4s, background-position 0s .4s;
}
button:hover {
  --_p: 100%;
  transition: background-position .4s, background-size 0s;
}
button:active {
  box-shadow: 25px inset #0009; 
  background-color: var(--c);
  color: #ffb9dc;
  font-size:10px;
}



body {
  height: 100vh;
  margin: 0;
  display: grid;
  place-content: center;
  grid-auto-flow: column;
  gap: 40px;
  background: #f2a2dd;
}
button {
  font-family: system-ui, sans-serif;
  font-size: 14px;
  cursor: pointer;
  padding: .1px.6px;
  font-weight: bold;  
  border: none;
}


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
