import React, { createContext, useState } from "react";

const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = items.find((item) => item.id === product.id);
    if (existingProduct) {
      setItems(
        items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ items, addToCart, setItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const Cart = CartContext;
export default CartProvider;
