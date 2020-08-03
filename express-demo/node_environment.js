const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

console.log("State initialised.....");

console.log(`NODE_ENV : ${process.env.NODE_ENV}`); // bydefault NODE_ENV is undefined

// If NODE_ENV is not set, then it will return
console.log(`app environement: ${app.get('env')}`); // returns Development is NODE_ENV is not set.

app.listen(3000, ()=>console.log("listening...."));