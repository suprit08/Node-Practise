const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Hello Home index');
});

app.get('/about', (req, res) => {
    res.send('Welcome to About');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening Port ${port}`));