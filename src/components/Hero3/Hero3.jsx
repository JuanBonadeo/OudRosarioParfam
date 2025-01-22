
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { motion, spring } from 'framer-motion';
import { Button } from '../../ui/';
import '../Hero3/hero3.css';

export const Hero3 = () => {

  return (
    <>

      <motion.div
        className="CombosContainer hero4 desktopView"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, delay: 1, type: "spring", stiffness: 160, damping: 20 }}
      >
        <img
          src='https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/006de939-fc58-4ef9-bcf4-e13162970dcf.jpg?alt=media&token=253dd571-d700-4237-bbd7-c217ca8f1542'
          alt='Combos'
          className='combosImg'
        />
        <div className="info">
          <h2>¡Visítanos en nuestro local!</h2>
          <p>
            📍 Bacacay 2938, Paseo Imperial, Flores, Cap Fed. <br />
            Abierto de martes a viernes 10 am 16hs, sábados de 10 am a 15hs.

            <hr />
          </p>
          <h2>Descubre la Experiencia del Mate Deluxe</h2>
          <p> Mates Imperiales y Termos de Alta Calidad, Directo a Tu Hogar </p>
          <Button label='Ver Colección' to='/destacados' />

        </div>
      </motion.div>
      
       {/* mobile view */}
      
      <motion.div
        className="CombosContainer hero4 mobileView"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, delay: 1, type: "spring", stiffness: 160, damping: 20 }}
      >
        <div className="hero3Mobile">
        <h2 >¡Visítanos en nuestro local!</h2>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/006de939-fc58-4ef9-bcf4-e13162970dcf.jpg?alt=media&token=253dd571-d700-4237-bbd7-c217ca8f1542'
          alt='Combos'
          className='combosImg'
        />
        <hr /> 
          <p>
            📍 Bacacay 2938, Paseo Imperial, Flores, Cap Fed. <br />
            Abierto de martes a viernes 10 am 16hs, sábados de 10 am a 15hs.
          </p>
        </div>
      </motion.div>
    </>

  );
};




