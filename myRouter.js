function route(pathname, handle) {
    console.log("Routing a request for " + pathname);
       if (typeof handle[pathname] === 'function') {
           return handle[pathname]();
       } else {
           console.log('No handler for ' + pathname);
           return '404 not found';
       }
   }
   
   exports.route = route;