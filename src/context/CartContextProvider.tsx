import React, { useState } from "react";
import { CartContext, type CartItem } from "./CartContext";
import type { Product } from "../api/fakeApi";

export function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

const addToCart = (product: Product) => {
  setCart((prev) => {
    const exists = prev.find((item) => item.id === product.id);
    if (exists) {
      return prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });
};

 const removeFromCart = (id: number) => {
  setCart((prev) => {
    const item = prev.find((i) => i.id === id);
    if (!item) return prev;
    if (item.quantity === 1) {
      // remove completely
      return prev.filter((i) => i.id !== id);
    }
    // reduce quantity by 1
    return prev.map((i) =>
      i.id === id ? { ...i, quantity: i.quantity - 1 } : i
    );
  });
};



  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
