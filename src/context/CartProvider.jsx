import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);

      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity }];
    });
  };

  const clearCart = () => setCart([]);

  const getCartQuantity = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  const getCartTotal = () =>
    cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, getCartQuantity, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};