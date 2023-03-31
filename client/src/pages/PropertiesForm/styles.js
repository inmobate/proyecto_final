import styled from "styled-components";

export const Container = styled.div`
  border: none;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Content = styled.div`
  max-width: 750px;
  max-height: 750px;
  display: flex;
`;

export const ContentColum = styled.div`
  max-width: 750px;
  max-height: 750px;
  display: flex;
  flex-direction: column;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FlexGrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BottomBar = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: var(--color5);
  box-shadow: 0 0 15px var(--color1);
`;

export const Type = styled.div`
  padding: 3px;
  margin: 0.5rem;
  cursor: pointer;
`;

export const Section = styled.section`
  margin: 1rem;
  padding: 0.5rem;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 300px;
    margin-top: 0.5rem;
  }
`;

export const Button = styled.button`
margin: 1rem;
  text-align: center;
  width: 150px;
  height: 40px;
  background-color: var(--color2);
  border: 5px solid var(--color1);
  border-radius: 25px;
  color: white;
  font-weight: 800;
  box-shadow: 0 0 15px var(--color1);
  :disabled {
    color: rgb(92, 92, 92);
    background-color: rgb(186, 183, 183);
    border-color: rgb(92, 92, 92);
    box-shadow: 0 0 15px rgb(92, 92, 92);
  }
`;
