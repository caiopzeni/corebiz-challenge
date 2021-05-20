import React, { useState } from 'react';
import { createContext } from 'react';
import { Cart } from '../header/styles';

export const CartContext = createContext({});

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    function handleAddItemToCart(name) {
        const itemObjetc = { name };
        setCart([...cart, itemObjetc]);
    }


    return (
        <CartContext.Provider value={{ cart, handleAddItemToCart}}>
        {children}
    </CartContext.Provider>
    );
}