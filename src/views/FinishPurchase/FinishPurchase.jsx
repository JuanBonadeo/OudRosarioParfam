import './FinishPurchase.css';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import '../../ui/Button/button.css';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';


export const FinishPurchase = () => {
    const useCart = () => {
        return useContext(CartContext)
    }
    let { cart, total, calcularDescuento, formatearMoneda, clearCart2, descuentoCodigo } = useCart();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    total = total - (total * descuentoCodigo);
    let [totalFinal, setTotalFinal] = useState(total);


    

    const handlePagoChange = (event) => {
        const selectedOption = event.target.value;
        if (selectedOption === 'credito') {
            setTotalFinal(total  * 1.2);
        } else{
            setTotalFinal(total);
        }
    };
   
    

    const buyCart = (e) => {
        const nombre = document.getElementById('name').value;
        const domicilio = document.getElementById('address').value;
        e.preventDefault();
        let precioEnvio = 2500
        Swal.fire({
            title: 'Confirmar compra',
            text: '¿Estás seguro de que deseas realizar la compra? Seras redirigido a WhatsApp para completar la compra.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, comprar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                let mensajePedido = 'Nombre y Apellido: ' + nombre + '\n';
                mensajePedido += 'Domicilio: ' + domicilio + '\n';
                mensajePedido += 'Costo de envio: ' + formatearMoneda(precioEnvio) + '\n';
                
                mensajePedido += 'pedido:\n';
                cart.forEach((prod) => {
                    mensajePedido += `*${prod.nombre}*  Cantidad: *${prod.quantity}* Precio: *${calcularDescuento(prod.precio * prod.quantity, prod.descuento)}*\n`;
                });
                 mensajePedido += `\nTotal: *${formatearMoneda(total + precioEnvio) }*`;

                // Completar con el número de WhatsApp
                const numeroWhatsApp = '5493416845002';

                function esDispositivoMovil() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                }

                // Construir la URL de WhatsApp
                let urlWhatsApp = '';

                if (esDispositivoMovil()) {
                    // Si es un dispositivo móvil, abrir en la aplicación de WhatsApp
                    urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajePedido)}`;
                } else {
                    // Si es una computadora, abrir en WhatsApp Web
                    urlWhatsApp = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajePedido)}`;
                }

                // Abrir la ventana de chat
                window.open(urlWhatsApp, '_blank');
                clearCart2();
                const redirectHome = () => {
                    window.location.href = "/#/gracias";
                };
                redirectHome();
            }
        });

    }
    return (
        <motion.div 
            className="containerP"
            initial={{ scale: 0, x: '-100vw' }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5, type: "spring" }}
            >
            <h1>Completa tu Pedido</h1>
            <form onSubmit={(e) => { e.preventDefault(); buyCart(e); }}>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre y Apellido:</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                
                    <div className="form-group">
                        <label htmlFor="address">Domicilio:</label>
                        <input type="text" id="address" name="address" required />
                    </div>
                </div>
                {descuentoCodigo > 0 && <h4>Descuento por codigo del {descuentoCodigo * 100}%</h4>}
                <h4>Total: &nbsp;{formatearMoneda(totalFinal)}</h4>
                <p>Hacemos envios por todo Rosario y Funes.</p>
                <button className="Button" type='submit'>Comprar</button>
            </form>
            
        </motion.div>
    );
}