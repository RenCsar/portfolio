import { Header } from '../components/header/Header';
import { Portfolio } from '../components/portfolio/Portfolio';
import { SobreMin } from '../components/sobreMim/SobreMin';
import { Container } from './Home.Styled';

function App() {
  return (
    <Container>
      <SobreMin />
      <div className='header-container'>
        <Header />
      </div>
      <Portfolio />
    </Container>
  );
}

export default App;