var express = require('express');
var fs = require('fs');
var app = express();
app.get("/", function (request, response) {
    response.send("Hello");
})
app.get("/users", function (request, response) {
    fs.readFile(__dirname + "/" + "user.json", "utf8", function (err, data) {
        console.log(data);
        response.send(data);
    })
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Host: %s:%s", host, port);
})