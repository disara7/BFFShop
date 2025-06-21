import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPanel.css';

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', price: '' });

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/products', formData);
      setFormData({ name: '', price: '' });
      fetchProducts();
    } catch (err) {
      console.error('Error adding product:', err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <button type="submit">Add Product</button>
      </form>

      <h3>Product List</h3>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
