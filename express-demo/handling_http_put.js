const express = require('express');
const Joi = require('joi');
const app =express();

app.use(express.json());

//sample data
courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
];

//Routing
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    
    const { error } = Joi.string().min(3).required();
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    else{
        const course = {
            id: courses.length+1,
            name: req.body.name
        }

        courses.push(course);
        res.send(courses);
    }
});

//route handler for specific course
app.put('/api/courses/:id', (req, res) => {

//check existence - 404
const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course) res.status(404).send("Course id not found");

//check validation - 400
const { error } = validateCourse(req.body);
if(error){
    res.status(400).send(error.details[0].message);
    return;
}

else{
//update
    course.name = req.body.name;
    res.send(course);
}
});

//validate function
function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema);
}


//Listen port
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening to port ${port}`));