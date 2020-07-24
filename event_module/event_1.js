const EventEmitter = require('events'); //Created a Class

const emitter = new EventEmitter(); // Created an Object from class

// Register Listener 1
emitter.on('msglogged', function(){
    console.log("Listener 1 Called");
});

// Register Listener 2
emitter.on('message', function(){
    console.log("Listener 2 Called");
});

// Raise an event
emitter.emit('message');
emitter.emit('msglogged');

console.log("Total Events Count :"+emitter._eventsCount);





