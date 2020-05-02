const Queue = require("./src/queueMgr.js");

let token = "";

let user = {};

let options = {
    port: 99,
    hostname: "eva7base.com",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "x-token": token
    }
}

let queue = new Queue();

let Login = Object.assign({},options,{
    path: "/user/login",
    body: JSON.stringify({
        phone: "18622521773",
        pwd: "123"
    }),
    cb: res => {
        
        token = res.headers["x-token"];

        user = Object.assign(user,res.Data.Data);

        console.log(user)
    }
})

let PayReset = Object.assign({},options,{
    path: "/user/pwd/pay",
    body: JSON.stringify({
        payPwd: "123"       
    }),
    cb: res => {
        token = res.headers["x-token"];
        console.log(res.Data,123);
    }
})

queue.Run([
    Login,
    PayReset
])
