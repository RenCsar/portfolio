import { Container } from './Footer.Styled';
import { FaLinkedinIn } from 'react-icons/fa';
import { TfiGithub } from 'react-icons/tfi';
import { github, linkedin } from '../../utils/links';

const Footer = () => {
    return (
        <Container>
            <div className="icon-container">
                <a href={linkedin} aria-label="Perfil do linkedin" target={'blank'}>
                    <FaLinkedinIn size={41} fill={'white'} />
                </a>
                <a href={github} aria-label="Perfil do Github" target={'blank'}>
                    <TfiGithub size={41} fill={'white'} />
                </a>
            </div>
            <p>Made by Renan Cesar - 2023</p>
        </Container>
    )
}

export default Footer;