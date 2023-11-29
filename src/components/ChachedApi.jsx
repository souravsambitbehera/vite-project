import React, { useEffect, useState } from 'react';

const ChachedApi = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if there is cached data in local storage
        const cachedData = localStorage.getItem('cachedProducts');

        if (cachedData) {
          // Use the cached data instead of making a new request
          const data = JSON.parse(cachedData);
          setProducts(data);
          console.log('Using cached data:', data);
        } else {
          // Make a new request and cache the response
          const response = await fetch('https://dummyjson.com/products');
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const responseData = await response.json();
          localStorage.setItem('cachedProducts', JSON.stringify(responseData.products));
          setProducts(responseData.products);
          console.log('New data:', responseData.products);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChachedApi;
