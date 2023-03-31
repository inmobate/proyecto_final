import styled from "styled-components";

import houseError from "../assets/houseError.svg";

const Card = ({ property }) => {
  const { pictures, city, country, price } = property;

  return (
    <Container>
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

export default Card;
