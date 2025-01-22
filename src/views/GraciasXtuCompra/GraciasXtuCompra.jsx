import './GraciasXtuCompra.css'
import { Button } from '../../ui/';
import { motion } from 'framer-motion';
export const GraciasXtuCompra = () => {
    return (
        <motion.div
            className='graciaContainer'
            initial={{ scale: 0, x: '-100vw' }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5, type: "spring" }}
        >
            <h1>Muchas gracias por tu compra!!</h1>
            <h2>En breve nos pondremos en contacto.</h2>
            <p></p>
            <Button to='/' label='Volver' />
        </motion.div>
    )
}
