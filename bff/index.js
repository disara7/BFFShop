const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:6000/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.listen(5000, () => console.log('BFF server running on port 5000'));
