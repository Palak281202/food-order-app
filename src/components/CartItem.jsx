import React, { useContext } from 'react'
import CartContext from '../store/CartContext'

export default function CartItem({ item }) {
    const cartCtx = useContext(CartContext);
    const handleIncreaseQuantity = () => {
        cartCtx.addItem(item);
    }
    const handleDecreseQuantity = () => {
        cartCtx.removeItem(item.id);
    }
    return (
        <li className='cart-item'>
            <p>
                {item.name} - {item.quantity}X{item.price}
            </p> 
            <p className='cart-item-actions'>
                <button onClick={handleIncreaseQuantity}>+</button>
                <span>{item.quantity}</span>
                <button onClick={handleDecreseQuantity}>-</button>
            </p>
        </li>
    )
}
