import React, { useContext } from 'react'
import Button from './UI/Button.jsx';
import  CartContext  from '../store/CartContext.jsx'

export default function MealItem({ meals }) {
    const cartctx = useContext(CartContext);

    const handleAddItem = () => {
        cartctx.addItem(meals);
    }
    return (
        <div>
            <li className="meal-item">
                <article>
                    <img src={`${meals.image}`} alt="meal picture" />
                    <div>
                        <h3>{meals.name}</h3>
                        <p className='meal-item-price'>{meals.price}</p>
                        <p className='meal-item-description'>{meals.description}</p>
                    </div>
                    <p className='meal-item-actions'>
                        <Button onClick={handleAddItem}>Add to Cart</Button>
                    </p>
                </article>
            </li>

        </div>
    )
}
