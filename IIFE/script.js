// IFFE Syntax (Has it's own scope and runs right away)
(function () {
    const user = 'Safiat';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
  })();
  
  // Params
  (function (name) {
    console.log('Hello ' + name);
  })('Junaid');
  
  // Named IIFE (Can only be called recursively)
  (function hello() {
    console.log('Hello');
  })();