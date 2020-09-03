const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/population',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log('Connected to mongodb'))
    .catch(err=>console.log('Failed to connect :', err));

//Auhor model
const Author = mongoose.model('Author', new mongoose.Schema({
    name:String,
    bio:String,
    website:String
})
);

//Course model
const Course = mongoose.model('Course', new mongoose.Schema({
    name:String,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Author'
    }
}));

//creating author - function
async function createAuthor(name, bio, website){
    const author = new Author({
        name,
        bio,
        website
    });
    const result = await author.save();
    console.log(result);
}

//creating course - function
async function createCourse(name, author){
    const course = new Course({
        name,
        author
    });
    const result = await course.save();
    console.log(result);
}

//listing the all courses
async function listCourses(){
    const courses = await Course
        .find()
        .populate('author')
        .select('name author');
    console.log(courses);
}

//calling functions

//createAuthor('Natrajan','portfolio bio', 'website link');

//createCourse('Java Programming','5f3cc1e0918ae5243814a839');

listCourses();