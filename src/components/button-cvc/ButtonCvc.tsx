import { TbFileText } from 'react-icons/tb';
import { Container } from './ButtonCvc.Styled';

const ButtonCvc = ({text, link}: {text: string, link: string}) => {
  return (
    <Container>
      <a href={link}  target='_blank' download>        
        <button >
          <TbFileText size={25} />
          {text}  
        </button>      
      </a>
    </Container>
  )
}

export default ButtonCvc