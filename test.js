const Queue = require("./index.js").Queue;

let queue = new Queue();

queue.Run([{
    hostname: "http://101.201.103.234",
    path: "/",
    cb: res => console.log(res)
}]);
