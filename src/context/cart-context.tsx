"use client";

import React, { createContext, useState, ReactNode } from 'react';

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
  itemCount: number;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  itemCount: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const itemCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};
