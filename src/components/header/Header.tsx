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
            <li><a href="http://">Sobre mim</a></li>
            <li><a href="http://">Portfólio</a></li>
            <li><a href="http://">Contato</a></li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}