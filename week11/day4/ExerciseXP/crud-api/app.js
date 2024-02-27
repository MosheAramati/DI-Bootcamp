const express = require ("express")
const{fetchPosts} = require("./data/dataService.js")

const app = express();

// Endpoint to fetch posts
app.get('/crud-api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log('Data retrieved successfully:', posts);
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(5002, () => {
    console.log(`Server is running on port 5002`);
  });