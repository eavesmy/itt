const http = require("http");
const https = require("https");

module.exports = function(options) {
	
    return new Promise((re, rj) => {

          // const req = (options.protocol === "http" ? http : https).request(options, res => {
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
