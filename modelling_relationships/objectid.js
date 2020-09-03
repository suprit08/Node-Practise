const mongoose = require('mongoose');

//getting an id
const id = new mongoose.Types.ObjectId();

//date 
const date = id.getTimestamp().getDate();
//month
const month = id.getTimestamp().getMonth();
//year
const year = id.getTimestamp().getFullYear();

console.log(date+"-"+month+"-"+year);

//checking valid object id
console.log(mongoose.isValidObjectId(id));
console.log(mongoose.isValidObjectId('1234'));

//another way to check valid id
const check_var = mongoose.Types.ObjectId.isValid(id);
console.log(check_var);