import React from "react";
import { ProductContext } from "../context";
import useProducts from "../hooks/useProducts";

export default function ProductProvider({ children }) {
  const { products, loading, error } = useProducts();
  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}
