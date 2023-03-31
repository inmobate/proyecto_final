import { useState } from "react";
import styled from "styled-components";

const Login = ({ active, setActive }) => {
  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit() {
    await user({});
  }

  return (
    <Modal>
      <div>
        <span onClick={() => setActive(!active)}>X</span>
        <h2>Inicia sesion o registrate</h2>
        <p>Te damos la bienvenida a INMOBATE</p>

        <Form>
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={inputs.name}
            name="name"
            placeholder="nombre"
          />
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={inputs.lastname}
            name="lastname"
            placeholder="apellido"
          />
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={inputs.email}
            name="email"
            placeholder="email"
          />
          <input
            onChange={(e) => handleChange(e)}
            type="text"
            value={inputs.password}
            name="password"
            placeholder="contraseña"
          />
          <input type="submit" value="Registrar usuario" />
        </Form>

        <hr />
        <p>Tambien puedes registrarte con:</p>
        <div>Google</div>
        <div>Facebook</div>
      </div>
    </Modal>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #ba549692;
  z-index: 99;

  > div {
    width: 500px;
    height: 500px;
    background-color: #bfbfbf;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default Login;
