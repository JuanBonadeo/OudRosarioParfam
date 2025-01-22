import { useEffect, useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext, Toast } from '../../context/CartContext'
import { Button } from '../../ui/';
import './CodigoDescuento.css';
import { motion } from 'framer-motion';

export const CodigoDescuento = () => {
    const [code, setCode] = useState('');

    const useCart = () => {
        return useContext(CartContext)
    }
    let { setDescuentoCodigo, descuentoCodigo } = useCart();

    const handleCode = (e) => {
        const code = document.getElementById('code').value;
        setCode(code);
    }

    const handleSubmit = () => {
        if (code == 'cbt24') {
            Toast.fire({
                icon: 'success',
                title: 'Código Correcto ¡10% de Descuento!'
            });
            setDescuentoCodigo(0.1);
        }else {
            Toast.fire({
                icon: 'error',
                title: 'Código Incorrecto'
            });
            setDescuentoCodigo(0);
        }
    }

    return (
        <>
            <motion.div
                className="containerP"
                initial={{ scale: 0, x: '-100vw' }}
                animate={{ scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5, type: "spring" }}
            >
                <h1>Código de Descuento</h1>
                <div className="form1">
                    <input type='text' id='code' name='code' placeholder='CODIGO DE DESCUENTO' value={code} onChange={handleCode} required />
                    <button className="Button" onClick={handleSubmit}>Aplicar</button>
                    <h4>Descuento de {descuentoCodigo * 100}%</h4>
                </div>



                <Button to={'/terminarcompra/'} label="Iniciar Compra" />


            </motion.div>




        </>
    )
}
