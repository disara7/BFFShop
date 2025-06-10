require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error('DB query error:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

const PORT = 6000;
app.listen(PORT, () => console.log(`API service running on port ${PORT}`));
