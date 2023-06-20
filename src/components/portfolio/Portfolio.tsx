import { Element } from 'react-scroll'
import { Section } from './Portfolio.Styled'
import Carousel from '../carousel/Carousel'

export const Portfolio = () => {
  return (
    <Element name='portfolio'>
      <Section>
        <h1>Portfólio</h1>
        <div className='carousel-container'>
          <Carousel />
        </div>
      </Section>
    </Element>
  )
}