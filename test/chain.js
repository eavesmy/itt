const test = require("../test");

var config = function(){
    this.hostname= "127.0.0.1";
    this.port= "3000";
    this.headers= test.Headers;
    this.cb = res => console.error(res.Data);
}

var Req = function(path,body,method){

    var obj = new config();

    obj.path = path;
    obj.body = JSON.stringify(body);
    obj.method = method;

    return obj;
}

test.Queue.Run([
    new Req("/chain/publish?name=fuck&intro=我是你爸爸&count=15&price=0.11",{},"get")
])
