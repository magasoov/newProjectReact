import React, { useState } from 'react'
import { FaCartShopping  } from "react-icons/fa6";
import Order from './Order';

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Контакты</li>
                <li>Кабинет</li>
            </ul>
            <FaCartShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.map(el => (
                  <Order key={el.id} item={el} />
                ))}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
