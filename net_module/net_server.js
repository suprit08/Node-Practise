const net = require('net');

var server = net.createServer((socket)=>{
    socket.end('Goodbye\n');
}).on('error', (err)=>{
    console.log('Error Occured during communication', err);
});

server.listen(()=>{
    address = server.address();
    console.log(`Opened server on ${address}`);
});