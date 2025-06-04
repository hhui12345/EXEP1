import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Cửa hàng sản phẩm</h1>
      <div className="product-list">
        {products.map(p => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p className="price">{p.price} VND</p>
            <button>Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
