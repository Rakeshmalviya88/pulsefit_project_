const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const trackerRoutes = require('./routes/trackerRoutes');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api', authRoutes);
app.use('/api/tracker', trackerRoutes);




module.exports = app;
