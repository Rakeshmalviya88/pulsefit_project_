// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/pulseFitdb")
//             .then(() => console.log('MongoDB connected successfully'))
//             .catch(err => console.error('MongoDB connection error:', err));
//     } catch (error) {
//         console.error("Database connection error:", error.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;


//   check this once please :

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/pulseFitdb3", {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDB;

