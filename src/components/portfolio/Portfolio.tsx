import { Element } from 'react-scroll'
import { Section } from './Portfolio.Styled'
import Carousel from '../carousel/Carousel'
import { Fade } from "react-awesome-reveal"

export const Portfolio = () => {
  return (
    <Element name='portfolio'>
      <Section>
        <Fade direction="down" delay={100} duration={400} triggerOnce cascade>
          <h1>Portfólio</h1>
        </Fade>
          <div className='carousel-container'>
            <Carousel />
          </div>
      </Section>
    </Element>
  )
}