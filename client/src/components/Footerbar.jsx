import styled from "styled-components";

import { Link } from "react-router-dom";

const Footerbar = () => {
  return (
    <Container>
      <Copyright>
        <div>© {new Date().getFullYear()} Inmovate, Inc.</div>
        <Link>
          <div>Privacidad</div>
        </Link>
        <Link>
          <div>Términos</div>
        </Link>
      </Copyright>
      <Link>
        <div>Ayuda y recursos</div>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  min-height: 5vh;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #ffff;
`;

const Copyright = styled.div`
  display: flex;
  gap: 1em;
`;

export default Footerbar;
