const myServer = require('./MyServer');
const myRouter = require('./MyRouter');
const myHandlers = require('./MyHandlers');

let handle = {};
handle['/'] = myHandlers.start;
handle['/start'] = myHandlers.start;
handle['/hello'] = myHandlers.hello;

myServer.start(myRouter.route, handle);