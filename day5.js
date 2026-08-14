class MyEvent extends EventEmitter{}
const events = new EventEmitter();
events.on("greet", (name)=>{
    console.log(`Hello, ${name}! This is event emitter`);  //template literal ${variable}

})
events.on("exit", ()=>{
    console.log("This is exit event");
});
events.emit("greet","Rudra");
events.emit("exit");