import { Container } from './sobreMin.Styled'
import Perfil from '../../assets/bloob-renan.webp'
import Button from '../button/Button'
import { Element } from 'react-scroll';
import { Fade } from "react-awesome-reveal"

export const SobreMin = () => {

    const linkContato: string = 'https://api.whatsapp.com/send?phone=5521990926768&text=sua%20mensagem';

    return (
        <Element name='sobremim'>
            <Container id='sobremin'>
                <div className='text-container'>
                    <Fade direction="down" delay={200} duration={500} triggerOnce cascade>
                        <p>Olá,</p>
                    {/* </Fade>
                    <Fade direction="down" delay={400} duration={900} triggerOnce> */}
                        <h1>Eu sou o Renan Cesar</h1>
                    {/* </Fade> */}
                    {/* <Fade direction="down" delay={400} duration={900} triggerOnce> */}
                        <p>Desenvolvedor Front-end</p>
                    {/* </Fade> */}
                    {/* <Fade direction="down" delay={200} duration={900} triggerOnce> */}
                        <div className='descricao'>
                            <p>Sou formado em análise e Desenvolvimento de sistemas e estou me dedicando as tecnologias frontend. Adoro aprender novas tecnologias e trabalhar em equipe.</p>
                        </div>
                    {/* </Fade> */}
                    {/* <Fade direction="down" delay={100} duration={900} triggerOnce> */}
                        <div className='button-container'>
                            <Button texto="Entre em contato" link={linkContato} />
                        </div>
                    </Fade>
                </div>
                <Fade direction="down" delay={900} duration={900} triggerOnce cascade>
                    <div className='img-container'>
                        <div className='foto-container'>
                            <img src={Perfil} alt="imagem de perfil" />
                        </div>
                    </div>
                </Fade>
            </Container>
        </Element>
    )
}