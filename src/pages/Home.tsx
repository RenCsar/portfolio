import { Header } from '../components/header/Header';
import { SobreMin } from '../components/sobreMim/SobreMin';
import { Container } from './Home.Styled';

function App() {
  return (
    <Container>
      <SobreMin />
      <div className='header-container'>
        <Header />
      </div>
    </Container>
  );
}

export default App;