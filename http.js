const http = require('http');
server = http.createServer(function (req, res) {

 res.writeHead(200, {'Content-Type': 'text/html'});

 res.write('Hello World!');
 res.write('<br>Hello ICE!');
 res.end(); 
});

server.listen(8000, '127.0.0.1');    

console.log('Server running at http://127.0.0.1:8000');

