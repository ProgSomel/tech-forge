import { useEffect, useEffectEvent, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState(null);

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchedProducts = async () => {
    try {
      setLoading({
        state: true,
        message: "Fetching products data",
      });
      setError(null); //? clearing previous error
      const response = await fetch(`http://localhost:9000/products`);
      if (!response.ok) {
        const errorMessage = `Fetching products failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };

  const fetchData = useEffectEvent(fetchedProducts);

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      fetchData();
    }
    return () => {
      isCancelled = true;
    };
  }, []);

  return {
    products,
    loading,
    error,
  };
};

export default useProducts;
