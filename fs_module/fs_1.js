const fs = require('fs');

// Synchronous methos readdirSync()
// const files = fs.readdirSync('./');

// console.log(files);


// Asynchronous method  readdir()
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});


// Always prefer Asynchronous.