console.log("file running");
const EventEmitter = require('events');
const event = new EventEmitter();
event.on('greet', () => {
    console.log("Hello Event Triggered!");
});
event.emit('greet');