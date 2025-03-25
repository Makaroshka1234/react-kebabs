import React, { createContext, useState, useContext, useEffect } from "react";

const ItemsContext = createContext();


export const ItemsProvider = ({ children }) => {
    const category = ['кебаб', 'комбо меню', 'страви', 'соуси', 'напої', 'фрашиза кебабу'];




    const [activeCategory, setActiveCategory] = useState(null)

    const [items, setItems] = useState([])



    return (
        <ItemsContext.Provider value={{ items, setItems, category, activeCategory, setActiveCategory, }}>
            {children}
        </ItemsContext.Provider>
    );
};


export const useItems = () => useContext(ItemsContext);