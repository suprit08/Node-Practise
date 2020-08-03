const express = require('express');
const app = express();

const helmet = require('helmet');

app.use(helmet());

console.log(helmet);