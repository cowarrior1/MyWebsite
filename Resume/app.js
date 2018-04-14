var express = require("express");
var app = express();
var http =  exports.http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");

var dir = path.join(__dirname, "./Frontend/assets"); //serving static files
app.use(express.static(dir));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "./Frontend/", "index.html"));
});

http.listen(8080, function(){
	console.log("listening on 8080");
});
