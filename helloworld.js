var express = require('express');
var app = express();

app.get('/', function ServerListener(request, response) {
    response.send('Hello World');
    console.log("Got a request from %s", request.ip);
});

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});
