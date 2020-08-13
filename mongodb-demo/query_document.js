const mongoose = require('mongoose');

//connection db
mongoose.connect('mongodb://localhost')
    .then(()=>console.log('Connected to MongoDB'))
    .catch((err)=>console.log('Unable to connect :',err));

//schema
const courseSchema = mongoose.Schema({
    name:String,
    designation:String,
    domain: [String],
    salary: Number
});

//creating model
const Course = mongoose.model('Course', courseSchema);

//get the document by querying
async function getCourse(){
    const courses = await Course
        .find({name: 'Sathya'})
        .limit(10)       //10 documents only
        .sort({name:1})  //name sorted by ascending order, for descending we can use -1
        .select({designation:1}); //selected name to display in query result
    
    console.log(courses);
}
//calling
getCourse();