const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost')
    .then(()=>console.log('Connected to Mongodb'))
    .catch((err)=>console.log('Failed to connect'));

const courseSchema = mongoose.Schema({
    name:String,
    duration:Number,
    fees:Number,
    faculty:String
});

const Course = mongoose.model('Course', courseSchema);

async function removeDocument(id){
    const course = await Course.findByIdAndRemove(id);
    if(course!=null){
        console.log('Record removed successfully...');
    }
    else{
        console.error('Something went wrong, try again..');
    }
}

removeDocument('5f2ea3f0b2560f19aca3454d');