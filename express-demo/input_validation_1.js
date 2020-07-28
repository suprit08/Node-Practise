const express = require('express');
const app = express();

app.use(express.json());

//sample data - courses
courses = [];

//routing
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

//POST with input validation
app.post('/api/courses', (req, res) => {
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send('name is required and should be minimum 3 characters');
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

// Listening to port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));

console.log('Loading the site content');