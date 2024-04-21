import { TbFileText } from 'react-icons/tb';
import { TButton } from '../../utils/types/types';
import { Container } from './ButtonCvc.Styled';

const ButtonCvc = ({ texto, link }: TButton) => {
  return (
    <Container>
      <a href={link} target='_blank' download>
        <button >
          <TbFileText size={25} />
          {texto}
        </button>
      </a>
    </Container>
  )
}

export default ButtonCvc;