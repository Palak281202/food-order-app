import React, { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import userProgressContext from '../store/UserProgressContext';

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);
  const handleShowCArt = ()=>{
    userProgressCtx.showCart();
  }
  const totalItemsInCart = cartCtx.items.reduce((totalItems,item)=>totalItems+ item.quantity ,0)
  return (
    <div>
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Logo" />
                <h1>ReactFoodApp</h1>
            </div>
            <nav>
                <Button textOnly={true} onClick={handleShowCArt}>Cart ({totalItemsInCart})</Button>
            </nav>
        </header>
    </div>
  )
}
