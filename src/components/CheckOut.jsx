import React, { useContext } from 'react'
import CartContext from '../store/CartContext';
import Modal from './UI/Modal';
import userProgressContext from '../store/UserProgressContext';
import Input from './UI/Input';
import Button from './UI/Button';

export default function CheckOut() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(userProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) =>
        totalPrice + item.price * item.quantity, 0
    );
    const handleClose = () => {
        userProgressCtx.hideCheckout();
    }
    
    function handleFinish(){
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        }));
    }

    
    let actions = (
        <>
            <Button type="button" onClick={handleClose} textOnly={true}>Close</Button>
            <Button onClick={handleFinish}>Submit Order</Button>
        </>
    );

   

    return (
        <div>
            <Modal open={userProgressCtx.progress === 'checkout'} onClose = {handleClose}>
                <form onSubmit={handleSubmit}
                    onClose={handleClose}
                >
                    <h2>Check out</h2>
                    <p>Total price = {cartTotal}</p>

                    <Input label="Full Name" type="text" id="name" required/>
                    <Input label="Email Address" type="email" id="email" required/>
                    <Input label="Street" type="text" id="street" required/>

                    <div className="control-row">
                        <Input label="Postal Code" type="text" id="postal-code" required/>
                        <Input label="City" type="text" id="city" required/>
                    </div>
                    <p className="modal-actions">
                        {actions}
                    </p>
                </form>
            </Modal>
        </div>
    )
}
