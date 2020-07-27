const express = require('express');

const app = express();

//Routing
app.get('/', (req,res) => {
    res.send("Hello World Home!");
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

//Listener
app.listen(3000, () => console.log("Listening on port 3000...."));