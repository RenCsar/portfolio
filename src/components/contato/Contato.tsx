import Button from '../button/Button'
import { Container } from './Contato.Styled'

const Contato = () => {

  const linkContato: string = 'https://api.whatsapp.com/send?phone=5521990926768&text=sua%20mensagem';

  return (
    <Container>
      <h1>Contato</h1>
      <p>
      Se você gostou do meu trabalho e quer que eu tire sua ideia do papel ou faça parte do seu time, entre em contato comigo! 
      </p>
      <Button texto='Entre em contato' link={linkContato}/>
      <p>Ou</p>
      <p>Baixar meu currículo completo</p>
    </Container>
  )
}

export default Contato