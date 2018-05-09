const Request = require("./netMgr.js");
const RequiredOption = ["hostname"]

const RequestModel = {
    method: "GET",
    port: "80",
    path: "/",
    headers: {},
    body: "",
    cb: Promise.resolve,
}

const Queue = module.exports = function() {
    this.List_Request = [];
    this.LoopTime = 0;
}

Queue.prototype.Load = function* Load(List_Request) {

    for (let req of List_Request) {

        let Object_Keys = Object.keys(req);

        let noRequiredOption = false;

        for (let required of RequiredOption) {
            if (Object_Keys.indexOf(required) < 0) noRequiredOption = true;
        }

        if (!!noRequiredOption) continue;

        let options = Object.assign(RequestModel, req)

        options.State = "doing";

        this.List_Request.push(options);

        yield options;
    }

    return null;
}

Queue.prototype.SetLoopTime = function(time) {}

Queue.prototype.Run = function(List_Request) {

    let gen = this.Load(List_Request);

    this.run(gen);
}

Queue.prototype.run = function(gen) {

    let option = gen.next().value;

    if (!option) return console.log("Queue work done.");

    Request(option)
        .then(() => run);
}
