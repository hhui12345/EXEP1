const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

// ⭐ Viết ngay sau khởi tạo app
app.use(cors());             // Cho phép frontend gọi API
app.use(express.json());     // Đọc JSON từ body request

// API - Lấy danh sách sản phẩm
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Khởi động server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
