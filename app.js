const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-numbers', (req, res, next) =>{
    res.send('<form method="post" action="/sum"><input type="text" name="firstnum"><br><input type="text" name="secondnum"><br><button type="submit">Add nums</button></form>');
});

app.use('/sum', (req, res, next)=>{
    console.log(req.body);
    first = req.body.firstnum;
    second = req.body.secondnum;
    sum = parseInt(first)+parseInt(second);
    res.send(`${first}+${second}=${sum}`);
});

app.use('/', (req, res, next)=>{
    res.send('You are at home page');
})

app.listen(3000);