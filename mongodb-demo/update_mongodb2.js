const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost')
    .then(()=> console.log('Connected to mongodb'))
    .catch((err)=>console.error('Failed to connect'));

const courseSchema = mongoose.Schema({
    name:String,
    duration:Number,
    fees:Number,
    faculty:String
});

const Course = mongoose.model('Course', courseSchema);

async function updateDocument(id){
    const course = await Course.findByIdAndUpdate(id, {
       $set:{
           faculty:'Natraj'
       } 
    }, {new:true});

    console.log(course);
}

updateDocument('5f2ea3f0b2560f19aca3454b');
