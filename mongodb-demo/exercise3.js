const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to Mongodb'))
    .catch((err) => console.error(err));

const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    price: Number,
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    return await Course
        .find({ isPublished: true })
        .or([{price:{$gte:15}}, {name: /.*by.*/i }])
        .select({name:1,price:1,isPublished:1})
        .sort({price:-1});
}

async function displayCourses() {
    const courses = await getCourses();
    console.log(courses);
}

displayCourses();