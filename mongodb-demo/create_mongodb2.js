const mongoose = require('mongoose');

//connection
mongoose.connect('mongodb://localhost')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('ERROR:Failed to connect ', err));

//Document Schema
const bankSchema = mongoose.Schema({
    account_no: Number,
    account_name: String,
    account_type: String,
    balance: Number,
    date: { type: Date, default: Date.now() }
});

//Creating model
const Bank = mongoose.model('Bank', bankSchema);

async function createCustomer() {
    //creating document
    const customer1 = new Bank({
        account_no: 1011,
        account_name: 'Suprit Sonar',
        account_type: 'Current',
        balance: 10000,
    });

    const customer2 = new Bank({
        account_no: 1012,
        account_name: 'Rohit Deshmukh',
        account_type: 'Saving',
        balance: 12000,
    });

    var lst = [customer1, customer2];
    var i;
    //saving document
    for (i = 0; i < lst.length; i++) {
        var result = await lst[i].save();
        console.log(result);
    }
}

//calling
createCustomer();
