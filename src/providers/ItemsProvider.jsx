import React, { createContext, useState, useContext } from "react";

const ItemsContext = createContext();

// Провайдер для користувача
export const ItemsProvider = ({ children }) => {
    const category = ['кебаб', 'комбо меню', 'страви', 'соуси', 'напої', 'фрашиза кебабуі'];
    const [activeCategory, setActiveCategory] = useState(0)

    const [items, setItems] = useState([])
    return (
        <ItemsContext.Provider value={{ items, setItems, category, activeCategory, setActiveCategory }}>
            {children}
        </ItemsContext.Provider>
    );
};

// Хук для використання контексту
export const useItems = () => useContext(ItemsContext);