const express = require('express');

const app = express();

//with single param
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

//with multiple param
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params);
});

//with query
// if query  /api/courses/?sortBy=name then returns {"sortBy":"name"}
app.get('/api/courses/', (req, res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));