import { Container } from "./Header.Styled";
import Logo from "../../assets/logo.png";
import Nav from "../nav/Nav";

export const Header = () => {
  return (
    <Container>
      <div className="logo-container">
        <img src={Logo} alt="Logo do site escrito 'Renan Cesar'" />
      </div>
      <div className="nav-container">
        <Nav />
      </div>
    </Container>
  )
};