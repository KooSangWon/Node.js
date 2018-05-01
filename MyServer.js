const http = require('http');
const url = require('url');

function start(port, hostname, route, handle) {
    let sPostData = '';
    function onReaquest(req, res) {
        let sPathname = url.parse(req.url).pathname;
        req.setEncoding('utf8');
        req.addListener('data', function (dataChunk) {
            sPostData += dataChunk;
            console.log('Chunk = ' + dataChunk);

        });
        req.addListener('end', function() {route(sPathname, handle, res, sPostData)});
        }

    

    http.createServer(onReaquest).listen(port, hostname);//콜백
    console.log('Server is running at ' + hostname + port);
}
exports.start = start;
