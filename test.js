const Queue = require("./index.js").Queue;
const Headers = {
		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
		"Accept-Encoding": "gzip, deflate, br",
		"Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja-JP;q=0.6,ja;q=0.5",
		"Cache-Control": "no-cache",
		"Connection": "keep-alive",
		"Pragma": "no-cache",
		"Upgrade-Insecure-Requests": "1",
		"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36",
}

let queue = new Queue();

let list = [
	{
		hostname:""
	}
]

queue.Run([{
    hostname: "app.wanmeistyle.com",
	path:"/api/box/summry",
	headers:{
		"x-access-token":"07a8d7b2b786939829569b0bf8ee0c8b7f2e3b3c2c49e03979c068d81cc91a4a0a104135e7f741eac44e1366700b871d"
	},
    cb: res => {
		console.log(res.Data)
	}
}]);
