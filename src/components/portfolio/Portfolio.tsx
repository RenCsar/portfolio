import Carousel from '../carousel/Carousel'
import { Section } from './Portfolio.Styled'

export const Portfolio = () => {
  return (
    <Section>
      <h1>Portfólio</h1>
      <div className='carousel-container'>
        <Carousel />
      </div>
    </Section>
  )
}