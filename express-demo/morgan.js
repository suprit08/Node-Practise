const express = require('express');
const app = express();

const morgan = require('morgan');
console.log("------------------------------[Combined]-----------------------------");
app.use(morgan('combined'));
console.log("------------------------------[Common]-------------------------------");
app.use(morgan('common'));
console.log("------------------------------[dev]----------------------------------");
app.use(morgan('dev'));
console.log("------------------------------[short]--------------------------------");
app.use(morgan('short'));
console.log("------------------------------[tiny]---------------------------------");
app.use(morgan('tiny'));
console.log("---------------------------------------------------------------------");

app.use(express.json());

courses = [
    {id:1},
    {id:2},
    {id:3}
];

app.get('/getId', (req,res)=>{
    res.send(courses);
});

app.listen(3000, ()=>console.log('Listening to 3000.....'));

