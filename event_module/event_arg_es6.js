const EventEmitter = require('events');

const emitter = new EventEmitter();

//Register Listener

emitter.on('msg', (arg) => {
    console.log("Listener 1 with arg in ES6 : ", arg);
});


// Raise an event

emitter.emit('msg', {id:1, url:'htps://myjobcoach.co.in'});