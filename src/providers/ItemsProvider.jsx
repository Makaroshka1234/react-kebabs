import React, { createContext, useState, useContext, useEffect } from "react";

const ItemsContext = createContext();


export const ItemsProvider = ({ children }) => {
    const category = ['кебаб', 'комбо меню', 'страви', 'соуси', 'напої', 'фрашиза кебабу'];

    const cartItems = []


    function addItemCart(item) {
        cartItems.push(item)
        console.log(cartItems, 'cart');

    }
    const [activeCategory, setActiveCategory] = useState(null)

    const [items, setItems] = useState([])



    return (
        <ItemsContext.Provider value={{ items, setItems, category, activeCategory, setActiveCategory, cartItems, addItemCart }}>
            {children}
        </ItemsContext.Provider>
    );
};

// Хук для використання контексту
export const useItems = () => useContext(ItemsContext);