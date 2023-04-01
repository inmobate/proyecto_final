import {
  BottomBar,
  Container,
  Content,
  FlexCenter,
  Type,
  Button,
} from "./styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import local from "../../app/api/config";
const Step9 = () => {
  const {
    type, //
    roomType,
    description, //
    title, //
    location,
    travellers,
    rooms, //
    beds, //
    bathrooms, //
    price, //
    services, //
    images, //
  } = useSelector((state) => state.propertyToAdd);

  const navigate = useNavigate();

  function handleSubmit(property) {
    fetch(`http://localhost:3001/property`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    })
      .then((response) => {
        if (response.ok) {
          alert("Creado correctamente");
        }
        /* navigate("/home");
        window.location.reload(); */
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <Container>
      <Content>
        <FlexCenter>
          <h2>Solo queda confirmar los Datos</h2>
          <div>
            <div>
              Estilo de la propiedad: <strong>{type}</strong>
            </div>
            <div>
              Tipo de hospedaje: <strong>{roomType}</strong>
            </div>
            <div>
              Ubicacion: <strong>{location.street}</strong>
            </div>
            <div>
              Viajeros: <strong>{travellers}</strong>
            </div>
            <div>
              Habitaciones: <strong>{rooms}</strong>
            </div>
            <div>
              Cantidad de camas: <strong>{beds}</strong>
            </div>
            <div>
              Cantidad de baños: <strong>{bathrooms}</strong>
            </div>
            <div>
              Titulo: <strong>{title}</strong>
            </div>
            <div>
              Descripcion: <strong>{description}</strong>
            </div>
            <div>
              Precio por noche: <strong>{price}</strong>
            </div>
            <div>
              Servicios:
              {services.map((el) => (
                <strong>
                  <Type>{el}</Type>
                </strong>
              ))}
            </div>
            <img src={images} alt="imagen de la propiedad" width={150} />
          </div>
        </FlexCenter>
        <div>
          <video
            src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high"
            preload="auto"
            width={400}
            playsInline
            autoPlay
          ></video>
        </div>
      </Content>

      <BottomBar>
        <Button onClick={() => navigate("/addproperty/step8")}>Atras</Button>
        <Button
          onClick={() =>
            handleSubmit({
              description: description,
              area: 2000, //por ahora
              price: price,
              bathrooms: bathrooms,
              floor: location.floor,
              city: location.city,
              province: location.province,
              address: location.street,
              //postal_code: location.postalCode,
              room: rooms,
              title: title,
              pictures: [images],
              type: type,
              service: services,
              room: rooms,
              beds: beds,
            })
          }
        >
          Confirmar
        </Button>
      </BottomBar>
    </Container>
  );
};

export default Step9;
