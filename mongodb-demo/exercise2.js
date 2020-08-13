const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(()=>console.log('Connected to mongodb'))
    .catch((err)=>console.error(err));

const courseSchema = mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:Date,
    price:Number,
    isPublished:Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses(){
    return await Course
    .find({isPublished:true})
    .sort({price:-1})
    .select({name:1, author:1});
}

async function displayCourses(){
    const courses = await getCourses();
    console.log(courses);
}

displayCourses();