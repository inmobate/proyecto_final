import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPrice } from "../../app/slices/propertyToAdd";
import {
  BottomBar,
  Button,
  ButtonAddLess,
  Container,
  ContentColum,
} from "./styles";

const Step8 = () => {
  const { price } = useSelector((state) => state.propertyToAdd);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <ContentColum>
        <h2>Ahora, fijá tu precio</h2>
        <p>Podés cambiarlo cuando quieras.</p>
        <div>
          <ButtonAddLess onClick={() => dispatch(setPrice(price - 100))}>
            -
          </ButtonAddLess>
          <input type="number" value={price} />
          <ButtonAddLess onClick={() => dispatch(setPrice(price + 100))}>
            +
          </ButtonAddLess>
        </div>
        <p>por noche</p>
      </ContentColum>
      <BottomBar>
        <Button onClick={() => navigate("/addproperty/step7")}>Atras</Button>
        <Button onClick={() => navigate("/addproperty/step9")} dissable={price}>
          Siguente
        </Button>
      </BottomBar>
    </Container>
  );
};

export default Step8;
