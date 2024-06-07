const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect('<mongodb://localhost:27017>', { useNewUrlParser: true, useUnifiedTopology: true });

// Load and use the routes
const routes = require('./routes/index');
app.use('/api', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
