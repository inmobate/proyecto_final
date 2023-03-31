import styled from "styled-components";
import { Link } from "react-router-dom";
import Footerbar from "../components/Footerbar";
import house from "../assets/house.svg";
import { useSelector } from "react-redux";

const Landing = () => {
  const { logUser: globalUser } = useSelector((state) => state.logUser);

  return (
    <Container>
      <main>
        <Banner>
          <Logo>
            <Img src={house} alt="imagen" />
            <Title>INMOBATE</Title>
          </Logo>
          {globalUser && (
            <div>
              <h3>Bienvenido {globalUser.name}!</h3>
            </div>
          )}
          <Link to="/home">
            <Button className="btn">Alquila ya</Button>
            {/* Alquila ya */}
          </Link>
        </Banner>
        <AboutUs id="about-us">
          <div>Nosotros</div>
          <Profiles>
            <Profile>
              <Icon></Icon>
              <div>Alfredo</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Henry</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Jonatan</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Javier</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Francisco</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Renzo</div>
            </Profile>
            <Profile>
              <Icon></Icon>
              <div>Sebastian</div>
            </Profile>
          </Profiles>
        </AboutUs>
      </main>
      <Footer>
        <Footerbar />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  background-image: url("../assets/background.png");
`;

const Banner = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

const Logo = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 5em;
`;

const Title = styled.div`
  font-family: "Righteous", cursive;
  font-size: 5em;
  color: #000;
`;

const Button = styled.div`
  padding: 1em 2.5em;
  position: relative;
  border: none;
  border-radius: 1em;
  background: var(--color5);
  color: var(--color1);
  font-size: 1em;
  font-weight: bold;
  transition-property: all;
  transition-duration: 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 14px 56px -11px var(--color4);
    background: var(--color4);
  }

  &::before {
    content: "";
    height: 5px;
    width: 5px;
    position: absolute;
    right: 2em;
    bottom: 37%;
    border-radius: 100px;
    background: white;
    animation: 0.5s both ease-in-out infinite;
  }

  &:hover::before {
    animation-name: bounce_591;
    transition: all 0.3s ease;
  }

  @keyframes bounce_591 {
    0% {
      bottom: 37%;
    }

    50% {
      bottom: 70%;
    }

    100% {
      bottom: 37%;
    }
  }
`;

const AboutUs = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
`;

const Profiles = styled.div`
  width: 50%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1em;

  > * {
    &:nth-child(1) {
      grid-area: 1 / 2 / 2 / 3;
    }

    &:nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
    }
    &:nth-child(3) {
      grid-area: 2 / 2 / 3 / 3;
    }
    &:nth-child(4) {
      grid-area: 2 / 3 / 3 / 4;
    }
    &:nth-child(5) {
      grid-area: 3 / 1 / 4 / 2;
    }
    &:nth-child(6) {
      grid-area: 3 / 2 / 4 / 3;
    }
    &:nth-child(7) {
      grid-area: 3 / 3 / 4 / 4;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

const Icon = styled.div`
  width: 5em;
  height: 5em;
  border: none;
  border-radius: 5em;
  background: var(--color5);
`;

const Footer = styled.footer`
  display: none;
`;

export default Landing;
