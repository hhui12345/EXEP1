const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
app.use(cors());
app.use(express.json());

// Lấy danh sách sản phẩm
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
