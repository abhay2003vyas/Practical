// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const itemRoutes = require('./routes/itemRoutes');

// dotenv.config(); // Load environment variables

// const app = express();
// app.use(cors());
// app.use(express.json()); // Middleware to parse JSON data

// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;

// // Connect to MongoDB
// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('Error connecting to MongoDB:', err));

// // Use the routes for handling CRUD and search
// app.use('/api', itemRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/itemRoutes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Use the port from the environment variable

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', router);

// Database connection
mongoose
  .connect('mongodb+srv://abhay:Mongo123@cluster0.l8ty0.mongodb.net/itemDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
