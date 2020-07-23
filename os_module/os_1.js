const os = require('os');

console.log("Free Memory : "+os.freemem());
console.log("Total Memory : "+os.totalmem());

console.log("OS Platform : "+ os.platform());

console.log("Architecture : "+ os.arch());

console.log("Type : "+os.type());

console.log("Release version : "+os.release());

console.log("OS user : " + os.userInfo().username);