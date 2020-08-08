const mongoose = require('mongoose');

//connection db
mongoose.connect('mongodb://localhost')
    .then(()=>console.log('Connected to MongoDB'))
    .catch((err)=>console.log('Unable to connect :',err));

//schema
const courseSchema = mongoose.Schema({
    name:String,
    duration:Number,
    fees:Number,
    faculty:String
});

//creating model
const Course = mongoose.model('Course', courseSchema);

//creating document and save
    // async function createCourse(){
    //     const course1 = new Course({
    //         name:'NodeJs',
    //         duration:20,
    //         fees:2000,
    //         faculty:'Suprit Sonar'
    //     });

    //     const course2 = new Course({
    //         name:'UI developement',
    //         duration:30,
    //         fees:3000,
    //         faculty:'Manoj Tiwari'
    //     });

    //     const course3 = new Course({
    //         name:'SAP',
    //         duration:150,
    //         fees:14000,
    //         faculty:'Laxmi Raman'
    //     });

    //     const course4 = new Course({
    //         name:'Java',
    //         duration:150,
    //         fees:3000,
    //         faculty:'Suprit Sonar'
    //     });

    //     var courses = [course1, course2, course3, course4];
    //     var i=0;

    //     for(i=0;i<courses.length;i++){
    //         var result = await courses[i].save();
    //         console.log(result);
    //     }
    // }
    // //calling
    // createCourse();

//get the document by querying
async function getCourse(){
    const courses = await Course
        .find({faculty: 'Suprit Sonar'})
        .limit(10)       //10 documents only
        .sort({name:1})  //name sorted by ascending order, for descending we can use -1
        .select({name:1}); //selected name to display in query result
    
    console.log(courses);
}
//calling
getCourse();