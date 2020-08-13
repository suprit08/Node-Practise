//Query first type.

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost')
    .then(() => console.log('Connected to Mongodb'))
    .catch((err) => console.error(err));

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);

const courseSchema = mongoose.Schema({
    name: String,
    faculty: String,
    duration:Number,
    fees: Number,
    });

const Course = mongoose.model('Course', courseSchema);


async function updateCourse(id) {
    const course = await Course.findById(id);
    if(!course) return;

    course.faculty = "Durga Prasad";

    const result = await course.save();
    console.log(result);
    console.log("completed...");
}

updateCourse('5f2ea3f0b2560f19aca3454c  ');
