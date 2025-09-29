import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css'; // import CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            {product.image ? (
              <img src={product.image} alt={product.name} />
            ) : (
              <span>No Image</span>
            )}
          </div>
          <h2 className="product-title">{product.name}</h2>
          <p className="product-price">${product.price}</p>
          <button className="product-btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
