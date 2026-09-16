const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/daman_db';
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Basic Status Route
app.get('/', (req, res) => {
  res.json({ status: 'Active', message: 'Daman Game Backend Running' });
});

// Color Prediction Dummy Logic Route
app.get('/api/game/color-result', (req, res) => {
  const colors = ['Red', 'Green', 'Violet'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const periodNumber = Date.now();
  res.json({ period: periodNumber, result: randomColor });
});

// Start Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
