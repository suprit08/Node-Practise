const express = require('express');
const Joi = require('joi');

const app = express();

app.use(express.json());

courses = [
    {id:1, name:'python'},
    {id:2, name:'java'}
];

//routing
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required() 
    };

    const result = Joi.validate(req.body, schema);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    else{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(courses);
    }
});

//listen port 
app.listen(3000, ()=> console.log('listening on 3000......'));
