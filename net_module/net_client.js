const net = require('net');

const client = net.connect({port:50302}, ()=>{
    console.log('connected to server');
    client.end();
});

client.on('data', (data)=>{
    console.log(data.toString());
    client.end();
});

client.on('end', ()=>{
    console.log('Disconnected from server');
});