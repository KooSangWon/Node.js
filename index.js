let nPort = 8000;
let sHost = 'localhost';
const myServer = require('./MyServer');
const myRouter = require('./Router');
const myHandlers = require('./myHandlers')

let handle = {};
handle['/'] = myHandlers.start;
handle['/start'] = myHandlers.start;
handle['/hello'] = myHandlers.hello;

myServer.start(nPort, sHost, myRouter.route);