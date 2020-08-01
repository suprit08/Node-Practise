const express = require('express');
const app = express();

const Joi = require('joi');

app.use(express.json());

//sample json data
courses = [
    {id:1, name:'java'},
    {id:2, name:'ruby'},
    {id:3, name:'python'}
];

//Routing handlers
app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.get('/api/courses/:id', (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("Course ID not found");
    
    res.send(course);
});

app.post('/api/courses', (req,res)=>{
    const course={
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(courses);
});

app.put('/api/courses/:id', (req, res)=>{
    //check course exist
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course ID not found');
    //validate input
    const schema = {
        name : Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body, schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    //update entry
    else{
        courses.name = req.body.name;
        res.send(course);
    }
});

app.delete('/api/courses/:id', (req, res)=>{
    //check course exist
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('course not found');
        return;
    }
    //delete
    else{
        const index = courses.indexOf(course);
        courses.splice(index, 1);
        res.send(courses);
    }
});

//Listen to port
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening to port ${port}`));