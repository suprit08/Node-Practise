const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(()=>console.log('Connected to Mongodb'))
    .catch((err)=>console.error(err));

const courseSchema = mongoose.Schema({
    name:String,
    duration:Number,
    fees:Number,
    faculty:String
});

const Course = mongoose.model('Course', courseSchema);

async function getBackendCourses(){
    const courses = await Course
        .find({tags:'backend'},{isPublished:true})
        .sort({name:1})
        .limit(10)
        .select({name:1, author:1});

    console.log(courses);
}

getBackendCourses();