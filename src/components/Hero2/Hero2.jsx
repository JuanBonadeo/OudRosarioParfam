import React from 'react';
import { motion, spring } from 'framer-motion';
import { Button } from '../../ui/';
import '../Hero2/hero2.css';

export const Hero2 = () => {

  return (
    <><motion.div
      className="CombosContainer desktopView"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 4, delay: 1, type: "spring", stiffness: 160, damping: 20 }}
    >
      <div className="info">
        <h2>Mates y Termos personalizados</h2><br />
        <p>
          Paso 1: Realizar la compra de un Mate o de un termo. <hr />

          Paso 2: Escribir vía WhatsApp al diseñador mencionándole tu número de orden Y tu idea de diseño. <hr />

          Paso 3: Elegís la letra y los emojis que más te gusten!

        </p><br />
        <Button label='Encargar' to='https://wa.me/5491165165979' />
      </div>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/WhatsApp%20Image%202024-08-04%20at%2020.28.59.jpeg?alt=media&token=59ce8fb3-2fb6-49ee-ac3c-306e3ba78153'
        alt='Combos'
        className='combosImg'
      />
    </motion.div>
      {/* mobile view */}




      <motion.div
        className="CombosContainer mobileView"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 4, delay: 1, type: "spring", stiffness: 160, damping: 20 }}
      >
        <div className="hero2Mobile">
          <h2>Mates y Termos personalizados</h2><br />
          <img
            src='https://firebasestorage.googleapis.com/v0/b/mateardi-d8f70.appspot.com/o/WhatsApp%20Image%202024-08-04%20at%2020.28.59.jpeg?alt=media&token=59ce8fb3-2fb6-49ee-ac3c-306e3ba78153'
            alt='Combos'
            className='combosImg'
          />
          <div className="hero2Mobile">
            <p>
              Paso 1: Realizar la compra de un Mate o de un termo. <hr />

              Paso 2: Escribir vía WhatsApp al diseñador mencionándole tu número de orden Y tu idea de diseño. <hr />

              Paso 3: Elegís la letra y los emojis que más te gusten!

            </p><br />
            <Button label='Encargar' to='/producto/GRABADOS-PERSONALIZADOS' />
          </div>

        </div>

      </motion.div>

    </>
  );
};




