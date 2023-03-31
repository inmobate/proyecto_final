import { useNavigate } from "react-router-dom";
import { Container, Content, FlexCenter, Button } from "./styles";

const PropertiesForm = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <FlexCenter>
          <p>Paso 1</p>
          <h2>Contanos acerca de tu alojamiento</h2>
          <p>
            En este paso, te vamos a preguntar qué tipo de propiedad tenés y si
            los huéspedes van a reservar el alojamiento entero o solo una
            habitación. Hacenos saber la ubicación y cuántos huéspedes pueden
            quedarse en el alojamiento.
          </p>
          <Button onClick={() => navigate("/addproperty/step1")}>
            Siguiente
          </Button>
        </FlexCenter>
        <div>
          <video
            src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
            preload="auto"
            width={400}
            playsInline
            autoPlay
          ></video>
        </div>
      </Content>
    </Container>
  );
};

export default PropertiesForm;
