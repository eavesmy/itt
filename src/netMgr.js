const http = require("http");


module.exports = function(options) {
		
		console.log(options)

    return new Promise((re, rj) => {

        const req = http.request(options, res => {

            let chunk = "";

            res.on("data", data => {
                chunk += data;
            });

            res.on("end", () => {
                res.Data = chunk;
                options.cb(res);
								re()
            });

        })

        req.on("timeout", Error_Timeout);
        req.on("error", Error_Connect);

				req.write(options.body || "");
				req.end();
    });
}

function Error_Timeout() {
    console.error("Net connect timeout.");
}

function Error_Connect(err) {
    console.log("Net connect error: ", err);
}
