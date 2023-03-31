import { useNavigate } from "react-router-dom";
import { setServices } from "../../app/slices/propertyToAdd";
import {
  BottomBar,
  Container,
  ContentColum,
  FlexGrap,
  Type,
  Button,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useGetServiceQuery } from "../../app/api/properties";

const Step5 = () => {
  const { data: servicesDb, error, isLoading } = useGetServiceQuery();
  const { services } = useSelector((state) => state.propertyToAdd);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(service) {
    if (services.includes(service)) {
      dispatch(setServices(services.filter((el) => el !== service)));
    } else {
      dispatch(setServices([...services, service]));
    }
  }

  return (
    <Container>
      <ContentColum>
        <h2>
          Contales a los huéspedes todo lo que tu espacio tiene para ofrecer
        </h2>
        <p>Podés agregar más servicios después de publicar el anuncio.</p>
        <div>
          <FlexGrap>
            {servicesDb &&
              servicesDb.map((el) => (
                <Type
                  onClick={() => handleClick(el.name)}
                  key={el.name}
                  style={
                    services.includes(el.name)
                      ? {
                          border: "3px solid var(--color2)",
                          borderRadius: "15px",
                        }
                      : null
                  }
                >
                  {el.name}
                </Type>
              ))}
          </FlexGrap>
        </div>
      </ContentColum>
      <BottomBar>
        <Button onClick={() => navigate("/addproperty/step4")}>Atras</Button>
        <Button
          onClick={() => navigate("/addproperty/step6")}
          disabled={!services.length}
        >
          Siguente
        </Button>
      </BottomBar>
    </Container>
  );
};

export default Step5;
