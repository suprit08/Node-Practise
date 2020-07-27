const express = require('express');

const app = express();

const courses = [
    {id:1, name:'python'},
    {id:2, name:'java'},
    {id:3, name:'c++'},
    {id:4, name:'c'},
    {id:5, name:'javascript'},
];

app.get('/api/courses/:id', (req,res) => {
    const course = courses.find( course => course.id === parseInt(req.params.id));
    if (!course) res.status(404).send("Course not found");
    res.send(course);
});

const port  = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to ${port}`));
