const express = require('express');
const app = express();
const path = require('path');

// Set up the public directory to serve static files
app.use(express.static(path.join(__dirname, 'public')));


// Route to serve index.html
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Home link (if you want to serve some other content for the home route)
app.get('/', (req, res) => {
    res.send("<a href='/home'>Home</a>");
});


// Log the path to the public directory
console.log(path.join(__dirname, 'public'));

// This line of code rerun the server
app.use(express.static(path.join(__dirname, 'public')))




// Start the server
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
