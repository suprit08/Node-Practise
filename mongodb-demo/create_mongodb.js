//connection with Mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost')
    .then(()=>console.log('Connected to MongoDB'))
    .catch((err)=>console.error('Failed to connect',err));

//schema
const stockSchema = mongoose.Schema({
    name:String,
    type:String,
    qty:Number,
    price:Number,
    date:{type:Date, default:Date.now}
});

//model
const Stock = mongoose.model('Stock', stockSchema);


async function createStock(){
const stock1 = new Stock({
   name:'ParleG',
   type:'biscuit',
   qty:10,
   price:10, 
});

const stock2 = new Stock({
    name:'Nirma',
    type:'ditergent',
    qty:5,
    price:20, 
 });

 const stock3 = new Stock({
    name:'Candyman',
    type:'chocolate',
    qty:3,
    price:100, 
 });

 //saving document
 var lst = [stock1, stock2, stock3];
 var i;
 for(i=0;i<lst.length;i++){
     var result = await lst[i].save();
     console.log(result);
 }
}

//calling
createStock();