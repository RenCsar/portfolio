import { Container } from "./Footer.Styled"
import { AiOutlineLinkedin } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';

const Footer = () => {
    return (
        <Container>
            <div className="icon-container">
                <a href="https://www.linkedin.com/in/renan-cesar/" target={'blank'}>
                    <AiOutlineLinkedin size={50} fill={'white'} />
                </a>
                <a href="https://github.com/renCsar" target={'blank'}>
                    <VscGithub size={41} fill={'white'} />
                </a>
            </div>
            <p>Made by Renan Cesar - 2022</p>
        </Container>
    )
}

export default Footer