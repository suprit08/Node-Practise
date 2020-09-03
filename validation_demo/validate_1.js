const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
    .then(()=>console.log('Connected to Mongodb'))
    .catch((err)=>console.log('Failed to connect :',err));

const courseSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength:255},
    duration: Number,
    fees: Number,
    faculty: String
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({
        name: "Cyber Security",
        duration : 150,
        fees: 25000,
        faculty: "Suryaji"
    });

    try{
    const result = await course.save();
    console.log(result);
    console.log('Document inserted 1');
    }
    catch(e){
        console.log(e.message);
    }

}

createCourse();