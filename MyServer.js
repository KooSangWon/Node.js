const http = require('http');
const url = require('url');

function start(port, hostname, route, handle){
function onRequest(req, res) {
    let sPathname = url.parse(req.url).pathname;
    let content = route(sPathanme, handle);
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(content);
    res.end(); 
    }
}

    http.createServer(onRequest).listen(nPort, sHost);
    console.log('Server is running at ' + sHost + ':' + nPort);

exports.start = start;