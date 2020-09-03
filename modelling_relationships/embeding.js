const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/population')
    .then(()=>console.log('Connected to mongodb'))
    .catch(err=>console.log('failed to connect :', err));

//author schema
const authorSchema = mongoose.Schema({
    name:String,
    bio:String,
    webisite:String
});

//author model
const Author = mongoose.model('Author', authorSchema);

//Course model
const Course = mongoose.model('Course', new mongoose.Schema({
    name:String,
    author:authorSchema
})
);

//crete course function
async function createCourse(name, author){
    const course = new Course({
        name,
        author
    });
    const result = await course.save();
    console.log(result);
}

//list all courses
async function listCourse(){
    const courses = await Course.find();
    console.log(courses);
}

//update course - method 1
async function updateCourse1(courseId){
    const course = await Course.findById(courseId);
    course.author.name = 'Ramakrushna';
    course.save();
}

async function updateCourse2(courseId){
    const course = await Course.update({_id:courseId}, {
        $set:{
            'author.name':'pawan kalyan'
        }
    });
        course.author.name= 'Suprit sonar';
        course.save();
}

updateCourse2('5f3d6bb6718a1c2e20482794');

//calling function
// createCourse('Python', [
//     new Author({name:'KVR'}),
//     new Author({name:'Sumanth'}),
//     new Author({name:'Praveen'})
// ]);

//createCourse('Java', new Author({name:'Natraj'}));

