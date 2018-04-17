function start() {
    console.log('Request handler \'start\'');
    return 'Hello Start!';
   }
   
   function hello() {
    console.log('Request handler \'hello\'');
    return 'Hello Hello!';    
   }
   
   exports.start = start;
   exports.hello = hello;