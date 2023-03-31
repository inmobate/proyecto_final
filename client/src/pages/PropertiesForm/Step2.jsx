import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTypeRoom } from "../../app/slices/propertyToAdd";
import {
  BottomBar,
  Container,
  Content,
  ContentColum,
  Section,
  Button,
} from "./styles";

const Step2 = () => {
  const { roomType } = useSelector((state) => state.propertyToAdd);
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <ContentColum>
        <h2>¿Qué tipo de alojamiento ofrecés a los huéspedes?</h2>
        <div>
          <Section
            onClick={() => dispatch(setTypeRoom("alojamiento entero"))}
            style={
              roomType === "alojamiento entero"
                ? {
                    border: "3px solid var(--color2)",
                    borderRadius: "15px",
                  }
                : null
            }
          >
            <h4>Un alojamiento entero</h4>
            <p>
              Los huéspedes disponen de un alojamiento entero a su disposición.
            </p>
          </Section>
          <Section
            onClick={() => dispatch(setTypeRoom("habitacion privada"))}
            style={
              roomType === "habitacion privada"
                ? {
                    border: "3px solid var(--color2)",
                    borderRadius: "15px",
                  }
                : null
            }
          >
            <h4>Una habitación privada</h4>
            <p>
              Los huéspedes duermen en una habitación privada, pero es posible
              que algunas zonas se compartan con vos u otras personas.
            </p>
          </Section>
          <Section
            onClick={() => dispatch(setTypeRoom("habitacion compartida"))}
            style={
              roomType === "habitacion compartida"
                ? {
                    border: "3px solid var(--color2)",
                    borderRadius: "15px",
                  }
                : null
            }
          >
            <h4>Una habitación compartida</h4>
            <p>
              Los huéspedes duermen en una habitación o zona común que
              posiblemente compartan con otras personas.
            </p>
          </Section>
        </div>
      </ContentColum>
      <BottomBar>
        <Button onClick={() => navigate("/addproperty/step1")}>Atras</Button>
        <Button
          onClick={() => navigate("/addproperty/step3")}
          disabled={!roomType}
        >
          Siguiente
        </Button>
      </BottomBar>
    </Container>
  );
};

export default Step2;
