const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register Listener

emitter.on('msglogged', function(arg){
    console.log("Listener 1 with argument ", arg);
});


// Raise an event

emitter.emit('msglogged', {id:1, url:'http://'});