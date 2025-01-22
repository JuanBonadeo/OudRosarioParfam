import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const buyCart = (e) => {
    const { cart, total, calcularDescuento, formatearMoneda, clearCart2, descuentoCodigo } = useContext(CartContext);
    const nombre = document.getElementById('name').value;
    const pago = document.getElementById('payment').value;
    const domicilio = document.getElementById('address').value;
    e.preventDefault();
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
            mensajePedido += 'Metodo de Pago: ' + pago + '\n';
            mensajePedido += 'Metodo de Entrega: ' + entrega + '\n';
            if (entrega === 'envio') {
                mensajePedido += 'Domicilio: ' + domicilio + '\n';
                mensajePedido += 'Costo de envio: ' + formatearMoneda(precioEnvio) + ' (envio gratis a partir de 30000)\n';
                totalFinal = total + precioEnvio;
            }
            mensajePedido += 'pedido:\n';
            cart.forEach((prod) => {
                mensajePedido += `*${prod.nombre}*  Cantidad: *${prod.quantity}* Precio: *${calcularDescuento(prod.precio * prod.quantity, prod.descuento)}*\n`;
            });
             mensajePedido += `\nTotal: *${formatearMoneda(total)}*`;

            // Completar con el número de WhatsApp
            const numeroWhatsApp = '5491165165979';

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
            window.open(urlWhatsApp, '_blank');
            clearCart2();
            const redirectHome = () => {
                window.location.href = "/gracias";
            };
            redirectHome();
        }
    });

}

