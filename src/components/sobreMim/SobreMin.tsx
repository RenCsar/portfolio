import { Container } from './sobreMin.Styled';
import Perfil from '../../assets/bloob-renan-cesar.webp';
import Button from '../button/Button';
import { Element } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import { linkContato } from '../../utils/links';

export const SobreMin = () => {

    return (
        <Element name='sobremim'>
            <Container id='sobremin'>
                <div className='text-container'>
                    <Fade direction="down" delay={50} duration={300} triggerOnce cascade>
                        <p>Olá,</p>
                        <h1>Eu sou o Renan Cesar</h1>
                        <p>Desenvolvedor Front-end</p>
                        <div className='descricao'>
                            <p>Sou formado em análise e Desenvolvimento de sistemas e estou me dedicando as tecnologias de desenvolvimento Web como ReactJS, Typescript e Nodejs. Adoro aprender novas tecnologias e trabalhar em equipe.</p>
                        </div>
                        <div className='button-container'>
                            <Button texto="Entre em contato" link={linkContato} />
                        </div>
                    </Fade>
                </div>
                <div className='img-container'>
                    <div className='foto-container'>
                        <img src={Perfil} alt="imagem de perfil" />
                    </div>
                </div>
            </Container>
        </Element>
    )
};