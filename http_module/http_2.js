const http = require('http');

const server = http.createServer();

var i=0;

//Register Listener
server.on('connection', (socket) => {
    i=i+1;
    console.log("Listening new connection..."+i);
});

//Raise event
server.listen(3000);

console.log("Server started on http://localhost:3000/");