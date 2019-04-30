// imports the express library
var express = require('express');
// creates the express application
var app = express();
// handles a GET request with route
app.get('/', function ServerListener(request, response) {
    // response object sends the text
    response.send('Hello From Express');
    const { headers, method, url } = request;
    // shows on the server console that a request was made
    console.log('Request ( ' + headers + ' ' + url + ' ' + method + ') ' +
        'from ' + request.connection.remoteAddress);
});

app.listen(3000, function() {
    console.log('Express Listening on http://leia.cs.spu.edu:3000');
});
