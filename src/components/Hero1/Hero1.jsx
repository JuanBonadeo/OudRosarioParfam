import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from '../../ui/';


export const Hero1 = () => {
  return (
    <Carousel interval={10000000000}>
      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1"
          src='https://res.cloudinary.com/do36rxfoe/image/upload/v1737501464/odv37vgaqiprmps9ehvo.png'
          alt="First-slide"
        />
        
      </Carousel.Item>

      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1 imgHero3"
          src='https://res.cloudinary.com/do36rxfoe/image/upload/v1739899357/btvlm8qa2hvnvopzzdfr.png'
          alt="First-slide"
        />
        <Carousel.Caption className='HeroCaption hero12'>
          <Button label={'Ver más'}  to='/categoria/bodysplash'/>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1 imgHero3"
          src='https://res.cloudinary.com/do36rxfoe/image/upload/v1740143070/jqfpddwwysjceiucfd2q.png'
          alt="First-slide"
        />
        <Carousel.Caption className='HeroCaption hero12'>
          <Button label={'Ver más'}  to='/categoria/decants'/>
        </Carousel.Caption>
      </Carousel.Item>



    
    </Carousel>
  );
}
