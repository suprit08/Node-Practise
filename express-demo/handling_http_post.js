const express = require('express');

const app = express();

//using express json utility
app.use(express.json());

//sample data - courses
courses = [];

//routing params
app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

//find by id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    res.send(course);
});

//POST
app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    }

    courses.push(course);
    res.send(courses);
});

//port listener
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to ${port}`));