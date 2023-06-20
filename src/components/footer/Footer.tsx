import { Container } from "./Footer.Styled"
import { FaLinkedinIn } from 'react-icons/fa';
import { TfiGithub } from 'react-icons/tfi';

const Footer = () => {
    return (
        <Container>
            <div className="icon-container">
                <a href="https://www.linkedin.com/in/renan-cesar/" target={'blank'}>
                    <FaLinkedinIn size={41} fill={'white'} />
                </a>
                <a href="https://github.com/renCsar" target={'blank'}>
                    <TfiGithub size={41} fill={'white'} />
                </a>
            </div>
            <p>Made by Renan Cesar - 2023</p>
        </Container>
    )
}

export default Footer