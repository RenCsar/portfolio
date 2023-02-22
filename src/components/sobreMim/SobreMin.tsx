import { Container } from './sobreMin.Styled'
import Perfil from '../../assets/bloob-renan.webp'
import Button from '../button/Button'

export const SobreMin = () => {

    const linkContato: string = 'https://api.whatsapp.com/send?phone=5521990926768&text=sua%20mensagem';

    return (
        <Container id='sobremin'>
            <div className='text-container'>
                <p>Hello,</p>
                <h1>Eu sou o Renan Cesar</h1>
                <div className='descricao'>
                    <p>Sou formado em análise e Desenvolvimento de sistemas e estou me dedicando as tecnologias frontend. Adoro aprender novas tecnologias e trabalhar em equipe.</p>
                </div>
                <div className='button-container'>
                    <Button texto="Entre em contato" link={linkContato} />
                </div>
            </div>
            <div className='img-container'>
                <div className='foto-container'>
                    <img src={Perfil} alt="imagem de perfil" />
                </div>
            </div>
        </Container>
    )
}