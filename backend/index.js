// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const authRoutes = require('./routes/authRoutes');
// const trackerRoutes = require('./routes/trackerRoutes');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database Connection
// mongoose.connect("mongodb://localhost:27017/pulseFitdb2", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.error('MongoDB connection error:', error));

// // Routes
// app.use('/auth', authRoutes);        // Authentication routes
// app.use('/tracker', trackerRoutes);   // Tracker routes

// // Root Route
// app.get('/', (req, res) => {
//   res.send('Welcome to PulseFit API');
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



// old code :

const app = require('./app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// server file is this only - npx nodemon index.js