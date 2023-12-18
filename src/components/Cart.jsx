import React, { useContext } from 'react'
import Modal from './UI/Modal'
import CartContext from '../store/CartContext';
import Button from './UI/Button';
import userProgressContext from '../store/UserProgressContext';
import CartItem from './CartItem';
export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(userProgressContext);
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);
    const handleCloseCart = () => {
        userProgressCtx.hideCart();
    }

    const handleCheckoutCArt = () => {
        userProgressCtx.showCheckout();
    } 
    return (
        <div>
            <Modal className='cart' open={userProgressCtx.progress === 'cart'}
                onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : undefined}
            >
                <h2>Your Cart</h2>
                <ul>
                    {cartCtx.items.map((item) => {
                        return (
                            <CartItem key={item.id} item={item} />
                        );
                    })}
                </ul>
                <p className="cart-total">Total Amount = {cartTotal}</p>
                <p className='modal-actions'>
                    <Button textOnly onClick={handleCloseCart}>Close</Button>
                    {cartCtx.items.length > 0 && <Button onClick={handleCheckoutCArt}>Proceed</Button>}
                </p>
            </Modal>
        </div>
    )
}
