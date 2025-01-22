import '../Hero1/hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import { Button } from '../../ui/';


export const Hero1 = () => {
  return (
    <Carousel interval={5000}>
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
          src='https://res.cloudinary.com/do36rxfoe/image/upload/v1737501832/o1u4qntx2cj6a7qrxwzb.png'
          alt="First-slide"
        />
        <Carousel.Caption className='HeroCaption hero12'>

        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item className='Hero1Container'>
        <img
          className="imgHero1 imgHero3"
          src='https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/slider3.png?alt=media&token=8ebc3b73-b411-4dfd-97a7-a24bb3bf7f4b'
          alt="Third-slide"
        />
        <Carousel.Caption className='HeroCaption hero12'>

        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}
