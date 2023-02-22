import { Container } from "./Header.Styled"
import Logo from '../../assets/logo.png'
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'


export const Header = () => {

  return (
    <Container>
      <div className="logo-container">
        <img src={Logo} alt="Logo do site escrito 'Renan Cesar'" />
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li><Link className="nav-item" to="sobremin" spy={true} smooth={true} duration={800}>Sobre mim</Link></li>
            <li><Link className="nav-item" to="portfolio" spy={true} smooth={true} duration={800}>Portfólio</Link></li>
            <li><Link className="nav-item" to="contato" spy={true} smooth={true} duration={800}>Contato</Link></li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}