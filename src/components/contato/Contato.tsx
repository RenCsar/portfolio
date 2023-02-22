import ButtonCvc from '../button-cvc/ButtonCvc';
import Button from '../button/Button'
import { Container } from './Contato.Styled'

const Contato = () => {
  const linkContato: string = 'https://api.whatsapp.com/send?phone=5521990926768&text=sua%20mensagem';
  const LinkCVC: string = 'https://drive.google.com/u/0/uc?id=15JVW-J7qhSexhWz7m4MpUJwnvmbCUe4q&export=download'

  return (
    <Container>
      <h2>Contato</h2>
      <div className='content'>
        <div>
          <h3>Vamos trabalhar juntos?</h3>
        </div>
        <div className='text-container'>
          <p>
            Se você gostou do meu trabalho e quer que eu tire sua ideia do papel ou faça parte do seu time, entre em contato comigo!
          </p>
        </div>
        <Button texto='Entre em contato' link={linkContato} />
        <p>Ou</p>
        <ButtonCvc text={'Baixar meu currículo completo'} link={LinkCVC} />
      </div>
    </Container>
  )
}

export default Contato