const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const touristSpotRoutes = require('./routes/touristSpotRoutes')


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


app.get('/', (req, res) => {
  res.send('ApnaBihar is running...');
});

app.use('/api/tourist-spots', touristSpotRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});