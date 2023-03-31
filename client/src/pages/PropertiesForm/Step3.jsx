import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLocation } from "../../app/slices/propertyToAdd";
import { BottomBar, Container, ContentColum, Form, Button } from "./styles";

const Step3 = () => {
  const { location } = useSelector((state) => state.propertyToAdd);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    dispatch(
      setLocation({
        ...location,
        [e.name]: e.value,
      })
    );
  }

  function handleDisable() {
    if (!location.street) return true;
    if (!location.city) return true;
    if (!location.province) return true;
    if (!location.country) return true;
    return false;
  }

  return (
    <Container>
      <ContentColum>
        <h2>¿Dónde queda tu espacio?</h2>
        <p>
          Solo vamos a compartir tu dirección con los huéspedes luego de que
          hagan la reserva.
        </p>
        <Form>
          <input
            type="text"
            name="street"
            placeholder="calle"
            value={location.street}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="floor"
            placeholder="piso/dpto"
            value={location.floor}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="city"
            placeholder="ciudad"
            value={location.city}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="province"
            placeholder="provincia/estado"
            value={location.province}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="text"
            name="country"
            placeholder="pais o region"
            value={location.country}
            onChange={(e) => handleChange(e.target)}
          />
          <input
            type="number"
            name="postalCode"
            placeholder="codigo postal"
            value={location.postalCode}
            onChange={(e) => handleChange(e.target)}
          />
        </Form>
      </ContentColum>

      <BottomBar>
        <Button onClick={() => navigate("/addproperty/step2")}>Atras</Button>

        <Button
          onClick={() => navigate("/addproperty/step4")}
          disabled={handleDisable()}
        >
          Siguente
        </Button>
      </BottomBar>
    </Container>
  );
};

export default Step3;
