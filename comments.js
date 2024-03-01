// Create web server
// Create a route to handle comments
// Create a route to handle comments by ID
// Create a route to handle comments by user ID
// Create a route to handle comments by post ID

// 1. Create web server
const express = require('express');
const app = express();
app.use(express.json());

// 2. Create a route to handle comments
app.get('/comments', (req, res) => {
    res.send('Get all comments');
});

app.post('/comments', (req, res) => {
    res.send('Create a comment');
});

// 3. Create a route to handle comments by ID
app.get('/comments/:id', (req, res) => {
    res.send('Get comment by ID');
});

app.put('/comments/:id', (req, res) => {
    res.send('Update comment by ID');
});

app.delete('/comments/:id', (req, res) => {
    res.send('Delete comment by ID');
});

// 4. Create a route to handle comments by user ID
app.get('/comments/users/:id', (req, res) => {
    res.send('Get comments by user ID');
});

// 5. Create a route to handle comments by post ID
app.get('/comments/posts/:id', (req, res) => {
    res.send('Get comments by post ID');
});

app.listen(3000, () => console.log('Listening on port 3000...'));