import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";

const Searchbar = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (location) {
      navigate(`/search/${location}`);
    }
  }
  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleSearch(location);
    }
  }

  return (
    <>
      <SearchBar>
        <Input
          type="text"
          placeholder="Lugar deseado"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        ></Input>
        <Button onClick={() => handleSearch(location)}>
          <BiSearchAlt size={30} color={"white"} />
        </Button>
      </SearchBar>
    </>
  );
};

const SearchBar = styled.div`
  padding: 0.3em;
  display: flex;
  justify-content: space-evenly;
  gap: 0.2rem;
  border: 1px solid grey;
  border-radius: 50px;
`;

const Input = styled.input`
  padding: 0.3em;
  border-radius: 50px;
  border: none;
  text-align: center;
`;

const Button = styled.div`
  width: fit-content;
  padding: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--color5);
  cursor: pointer;
`;

export default Searchbar;
