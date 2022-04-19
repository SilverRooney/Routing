// sample comement for git pull request

const express = require("express");

const app = express()

console.dir(app);

app.listen(3000, () => {
    console.log("Listening on port 3000");
})

// app.use((req, res) => {
//     console.log("We got a new request");
//     // res.send("Hello, we got your request!");
//     res.send('<h1>This is my webpage!</h1>')
// })

app.get('/', (req, res) => {
    res.send('This is the home page!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('Post Request to /cats!!');
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing hi if nothing searched');
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})

app.get('*', (req, res) => {
    res.send(`I don't know that path`);
})

