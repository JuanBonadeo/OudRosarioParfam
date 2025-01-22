import { useState } from 'react'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import './addToCartIcon.css'

export const AddToCartIcon = ({ initial = 1, onAdd},props) => {
        const [quantity, setQuantity] = useState(initial)
    
 
    return(
        <button className="addtoCart" onClick={() => onAdd(quantity)}>
            <span> Agregar al carrito</span>        
        </button>
    )
}
