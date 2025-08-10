"use client";

import React, { createContext, useState, ReactNode, useMemo } from 'react';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  imageHint: string;
  review: string;
  longDescription: string;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  itemCount: number;
  cartTotal: string;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  itemCount: 0,
  cartTotal: "S/ 0.00",
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  const itemCount = cartItems.length;

  const cartTotal = useMemo(() => {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('S/ ', ''));
      return sum + price;
    }, 0);
    return `S/ ${total.toFixed(2)}`;
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, itemCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
