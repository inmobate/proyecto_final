import styled from "styled-components";

import "swiper/css";

import { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { HiAdjustments } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";

import { setFilter } from "../app/slices/filterCombine";

import { useGetPropertiesQuery } from "../app/api/properties";

import { useGetTypeQuery } from "../app/api/properties";

const Filterbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const refMenu = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const [min, setMin] = useState("");

  const [max, setMax] = useState("");

  const [property, setProperty] = useState("");

  const { data, error, isLoading } = useGetPropertiesQuery();

  const {
    data: dataType,
    error: errorType,
    isLoading: isLoadingType,
  } = useGetTypeQuery();

  const handlerFilter = (location) => {
    if (location) navigate(`/filter/${location}`);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlerConbine = (min, max, property) => {
    const filterByPrice = data.filter((p) => {
      return p.price >= min && p.price <= max;
    });

    const filterEnd = filterByPrice.filter((p) => {
      return p.type === property;
    });

    dispatch(setFilter(filterEnd));

    navigate("/filterCombine");
  };

  return (
    <>
      <Container>
        <Swiper slidesPerView={12} grabCursor={true}>
          {dataType &&
            dataType?.map((el) => (
              <SwiperSlide key={el.id}>{el.name}</SwiperSlide>
            ))}
        </Swiper>

        {/* <Button onClick={() => handlerFilter("house")} location="house">
        Vivienda
      </Button>
      <Button onClick={() => handlerFilter("department")} location="department">
        Departamento
      </Button>
      <Button onClick={() => handlerFilter("hotel")} location="hotel">
        Hotel
      </Button>
      <Button onClick={() => handlerFilter("guesthouse")} location="guesthouse">
        Hostal
      </Button> */}

        <Button onClick={toggleMenu}>
          <HiAdjustments size={25} />
          <div>Filtros</div>
        </Button>

        {menuOpen && (
          <FilterMenu>
            <Ul>
              <Close onClick={toggleMenu}>X</Close>
              <li>
                <div>Rango de precios:</div>
                <div>
                  <Input
                    type="number"
                    min="0"
                    placeholder="mínimo"
                    onChange={(price) => {
                      setMin(price.target.value);
                    }}
                  />
                  <Input
                    type="number"
                    min="0"
                    placeholder="máximo"
                    onChange={(price) => {
                      setMax(price.target.value);
                    }}
                  />
                </div>
              </li>
              <li>
                <div>Tipo de propiedad:</div>
                <div>
                  <button
                    onClick={() => {
                      setProperty("house");
                    }}
                  >
                    Vivienda
                  </button>
                  <button
                    onClick={() => {
                      setProperty("department");
                    }}
                  >
                    Departamento
                  </button>
                  <button
                    onClick={() => {
                      setProperty("hotel");
                    }}
                  >
                    Hotel
                  </button>
                  <button
                    onClick={() => {
                      setProperty("guesthouse");
                    }}
                  >
                    Hostal
                  </button>
                </div>
              </li>
              <ButtonFilter
                onClick={() => {
                  handlerConbine(min, max, property);
                }}
              >
                Filtrar
              </ButtonFilter>
            </Ul>
          </FilterMenu>
        )}
      </Container>
      <hr />
    </>
  );
};

const Container = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  gap: 1em;
  background: #ffff;
  color: #000;
`;

const Button = styled.div`
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1em;
  border-radius: 1em;
  background: var(--color5);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const FilterMenu = styled.div`
  width: 40%;
  height: 60%;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 1em;
  transform: translate(-50%, -50%);
  background: lightgray;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  gap: 1em;
`;

const Close = styled.div`
  padding: 1em;
  position: absolute;
  top: 1em;
  right: 1em;
  border-radius: 100em;
  background: red;

  &:hover {
    padding: 1em;
    background: blue;
  }
`;

const Input = styled.input`
  padding: 1em;
`;

const ButtonFilter = styled.div`
  padding: 1em;
  background: #ffff;
`;

export default Filterbar;
