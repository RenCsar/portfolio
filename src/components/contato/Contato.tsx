import { Element } from 'react-scroll';
import ButtonCvc from '../button-cvc/ButtonCvc';
import Button from '../button/Button';
import { Container } from './Contato.Styled';
import { Fade } from 'react-awesome-reveal';
import { linkCVC, linkContato } from '../../utils/links';

const Contato = () => {

  return (
    <Element name='contato'>
      <Container>
        <Fade direction='down' delay={100} duration={400} triggerOnce cascade>
          <h2>Contato</h2>
        </Fade>
        <div className='content'>
          <Fade direction='down' delay={100} duration={400} triggerOnce>
            <div>
              <h3>Vamos trabalhar juntos?</h3>
            </div>
          </Fade>
          <Fade direction='down' delay={100} duration={400} triggerOnce>
            <div className='text-container'>
              <p>
                Se você gostou do meu trabalho e quer que eu tire sua ideia do papel ou faça parte do seu time, entre em contato comigo!
              </p>
            </div>
          </Fade>
          <Fade direction='down' delay={100} duration={400} triggerOnce>
            <Button texto='Entre em contato' link={linkContato} />
            <p>Ou</p>
            <ButtonCvc texto={'Baixar meu currículo completo'} link={linkCVC} />
          </Fade>
        </div>
      </Container>
    </Element>
  )
}

export default Contato;