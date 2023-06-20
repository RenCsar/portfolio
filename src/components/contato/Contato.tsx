import { Element } from 'react-scroll';
import ButtonCvc from '../button-cvc/ButtonCvc';
import Button from '../button/Button'
import { Container } from './Contato.Styled'
import { Fade } from "react-awesome-reveal"

const Contato = () => {
  const linkContato: string = 'https://api.whatsapp.com/send?phone=5521990926768&text=sua%20mensagem';
  const LinkCVC: string = 'https://drive.google.com/u/0/uc?id=1Xb8OQLJk0QghQxY_IFcEEdFrlnHIdfLx&export=download'

  return (
    <Element name='contato'>
      <Container>
        <Fade direction="down" delay={500} duration={900} triggerOnce cascade>
          <h2>Contato</h2>
        </Fade>
        <div className='content'>
          <Fade direction="down" delay={500} duration={900} triggerOnce>
            <div>
              <h3>Vamos trabalhar juntos?</h3>
            </div>
          </Fade>
          <Fade direction="down" delay={500} duration={900} triggerOnce>
            <div className='text-container'>
              <p>
                Se você gostou do meu trabalho e quer que eu tire sua ideia do papel ou faça parte do seu time, entre em contato comigo!
              </p>
            </div>
          </Fade>
          <Fade direction="down" delay={500} duration={900} triggerOnce>
            <Button texto='Entre em contato' link={linkContato} />
            <p>Ou</p>
            <ButtonCvc texto={'Baixar meu currículo completo'} link={LinkCVC} />
          </Fade>
        </div>
      </Container>
    </Element>
  )
}

export default Contato