//simulate DOM like event handling in nodejs using events
//addEventListener-.on()
//dispatchEvent- .emit()
//one event at a time

import { EventEmitter } from "events";


const emitter = new EventEmitter();

emitter.on("click", (name)=>{
    console.log("click event triggered");
    console.log(`hello cse 24 ${name}`);
});

emitter.on("mouseover", (name)=>{
    console.log("mouseover event triggered");
    console.log(`hello cse 24 ${name}`);
});

emitter.emit('click', 'Rudra');
emitter.emit('mouseover', 'Rudra' )