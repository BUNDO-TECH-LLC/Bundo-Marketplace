
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const artisanRoutes = require('./routes/artisanRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const errorHandler = require('./middleware/errorHandler');


const app = express();
app.use(cors());
app.use(express.json());

const connectDB = require('./config/db');
connectDB();




// routes

app.use('/api/users', userRoutes);

app.use('/api/bookings', bookingRoutes);

app.use('/api/artisans', artisanRoutes);

app.use(errorHandler);



app.get('/', (req, res) => {
  res.send('Bundo API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
