import './order.css'

export const OrderList = ({ handleOrderChange }) => {
    return (
        <div className='SelectOrderContainer'>
            <h5>Ordenar por:</h5>
            <select onChange={handleOrderChange} id="orderBy" name='orderBy' className="select" >
            <option value="" aria-label="Close">Nuevos Productos</option>
            <option value="precioAsc" aria-label="Close">Menor Precio</option>
            <option value="precioDesc" aria-label="Close">Mayor Precio</option>
        </select>
    </div>
    );
}
