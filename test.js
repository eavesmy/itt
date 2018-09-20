const Queue = require("./index.js").Queue;
const crypto = require("crypto");

function Md5(str){
	let hash = crypto.createHash("md5");
	return hash.update(str).digest("hex")
}

exports.Headers = {
		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
		"Accept-Encoding": "gzip, deflate, br",
		"Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja-JP;q=0.6,ja;q=0.5",
		"Cache-Control": "no-cache",
		"Connection": "keep-alive",
        "Content-Type": "application/json",
		"Pragma": "no-cache",
		"Upgrade-Insecure-Requests": "1",
		"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36",
}
exports.Queue = new Queue();


let queue = new Queue();

let list = [
	{
		hostname:""
	}
]

/*
queue.Run([{
	hostname: "bj.bitkeep.com",
	path:"/coin/index",
	method:"POST",
	headers:{
		"Content-Type": "application/json",
	},
	cb: res => {
		console.error(res.Data)
	}
}])

queue.Run([{
    hostname: "",
	path:"",
	headers:{
	},
    cb: res => {
		console.log(res.Data)
	}
}]);
queue.Run([
	/*
	{
			hostname:"127.0.0.1",
			port:"9002",
			path:"/eaves/tips",
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				Tag : ['linux','netstat'],
				Content: 'netstat -anp | grep [:port] 查看占用端口' 
			}),
			cb:res=>{
				console.log(res.Data)
			}
	}

	{
			hostname:"39.104.107.86",
			port:"80",
			path:"/eaves/tips/netstat,fuck",
			method:"GET",
			headers:{
				"Content-Type":"application/json"
			},
			cb:res=>{
				console.log(res.Data)
			}
	}
{
			hostname:"127.0.0.1",
			port:"9990",
			path:"/user/info",
			method:"POST",
			headers:{
				"Content-Type":"application/json",
				"x-uid": 10000
			},
			body:JSON.stringify({}),
			cb:res=>{
				console.log(res.Data)
			}
	}
	{
		hostname: "dop.bitkeep.com",
		port:"8881",
		path: "/dapps",
		method:"POST",
		cb:res =>{
			console.error(res.Data)
		}
	}
	{
		hostname: "127.0.0.1",
		port: "8999",
		path:"/question/answer",
		method:"POST",
		headers:{
				"Content-Type":"application/json",
		},
		body:JSON.stringify({
			id:"5b79884ecf9c48674a898b2d",
			select:"a"
		}),
		body: JSON.stringify({
			tags: ["language"],
			title: "题干",
			select: ["A: 选项a","B:选项b"],
			correctselect: "A",
			selectinfo: "测试添加",
			belongs:"eaves"
		}),
		cb:res=>{
			console.error(res.Data)
		}
	}
])
*/
