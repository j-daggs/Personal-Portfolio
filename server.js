// Import required modules
const express = require('express');
const path = require('path');

// Create an instance of Express
const app = express();

// Define the port number
const PORT = process.env.PORT || 3000;

// Define the directory where static files are located
const publicDirectoryPath = path.join(__dirname, 'public');

// Set up middleware to serve static files (e.g., HTML, CSS, images)
app.use(express.static(publicDirectoryPath));

// Define route for the baseline URL
app.get('/', (req, res) => {
    // Send the index.html file when accessing the baseline URL
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});