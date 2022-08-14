const EventEmmitter = require("events");

class MyEmmitter extends EventEmmitter {}

const myEmitter = new MyEmmitter();

myEmitter.on("event", () => console.log("event fired..."));

myEmitter.emit("event");
