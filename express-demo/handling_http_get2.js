const express = require('express');

const app = express();

// Courses
courses = [
    {id:1, name:'java', fee:3000},
    {id:2, name:'python', fee:2500},
    {id:3, name:'c++', fee:2000},
];

//routing to get all
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

//to get by id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("Course not found - 404");
    res.send(course);
});

//listen to port by env var
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));

