import { useState } from 'react'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

 export const AddToCartIcon = ({ initial = 1, onAdd},props) => {
        const [quantity, setQuantity] = useState(initial)
    
 
    return(
        <button className="Button" onClick={() => onAdd(quantity)}>
            Agregar al Carrito           
        </button>
    )
}
