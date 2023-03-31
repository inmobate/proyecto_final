import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetTypeQuery } from "../../app/api/properties";
import { setType } from "../../app/slices/propertyToAdd";
import {
  BottomBar,
  Container,
  Content,
  FlexCenter,
  FlexGrap,
  Type,
  Button,
} from "./styles";

const Step1 = () => {
  const { data: types, error, isLoading } = useGetTypeQuery();
  const { type } = useSelector((state) => state.propertyToAdd);
  console.log(type)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <FlexCenter>
          <h2>¿Cuál de estas opciones describe mejor tu espacio?</h2>
          <FlexGrap>
            {types &&
              types.map((el) => {
                return (
                  <Type
                    key={el.name}
                    onClick={() => dispatch(setType(el.name))}
                    style={
                      type === el.name
                        ? {
                            border: "3px solid var(--color2)",
                            borderRadius: "15px",
                          }
                        : null
                    }
                  >
                    {el.name}
                  </Type>
                );
              })}
          </FlexGrap>
        </FlexCenter>
      </Content>

      <BottomBar>
        <Button onClick={() => navigate("/addproperty")}>Atras</Button>
        <Button onClick={() => navigate("/addproperty/step2")} disabled={!type}>
          Siguente
        </Button>
      </BottomBar>
    </Container>
  );
};

export default Step1;
