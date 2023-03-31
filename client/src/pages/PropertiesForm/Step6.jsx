import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BottomBar, Container, ContentColum, Button } from "./styles";
import { uploadImage } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../app/slices/propertyToAdd";

const Step6 = () => {
  const [file, setFile] = useState(null);
  const [isload, setIsload] = useState(true);
  const { images } = useSelector((state) => state.propertyToAdd);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function handleUpload(file) {
    setIsload(!isload);
    const url = await uploadImage(file);
    dispatch(setImage(url));
  }

  function handleDelete(){
    dispatch(setImage(""));
  }

  return (
    <Container>
      <ContentColum>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <Button onClick={() => handleUpload(file)} disabled={!file || !isload}>
          Upload
        </Button>
        {images && <img src={images} alt="tu imagen" width={200} />}
        <Button onClick={() => handleDelete()}>
          X
        </Button>
      </ContentColum>

      <BottomBar>
        <Button onClick={() => navigate("/addproperty/step5")}>Atras</Button>
        <Button
          onClick={() => navigate("/addproperty/step7")}
          disabled={!images}
        >
          Siguiente
        </Button>
      </BottomBar>
    </Container>
  );
};

export default Step6;
