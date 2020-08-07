//connection with mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost')
    .then(()=>console.log('Connected to MongoDB'))
    .catch((err)=>console.error('Failed to connect'));
    
//schema creation
const employeeSchema = mongoose.Schema({
    name: String,
    designation: String,
    salary: Number,
    domain: [String]
});

//Model
const Employee = mongoose.model('Employee', employeeSchema);

async function createEmployee(){
    const employee = new Employee({
        name:'Sathya',
        designation:'Azure Developer',
        salary:12000,
        domain:['GIS', 'FIIS', 'BFSI'],
        date: {type:Date, default: Date.now}
    });

    //saving document
    const result = await employee.save();
    console.log(result);
}

//calling async function
createEmployee();


