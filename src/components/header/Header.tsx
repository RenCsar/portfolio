import { Container } from "./Header.Styled"
import Logo from '../../assets/logo.png'

export const Header = () => {
  return (
    <Container>
      <div className="logo-container">
        <img src={Logo} alt="Logo do site escrito 'Renan Cesar'" />
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li><a href="#sobremin">Sobre mim</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}