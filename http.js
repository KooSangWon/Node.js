const http = require('http');
function onRequest(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('Hello, world!');
    res.end();
}
