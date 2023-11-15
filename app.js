// console.log("hello world!");
const http = require('http');

const server = http.createServer((req, res) =>{
    url = req.url;

    if (url == '/'){
    res.writeHead(200 , {'content-type': 'text/html'});  
    res.write("<h1>Home page</h1>");
    res.end()  

    }
    else if (url == '/about'){
    res.writeHead(200 , {'content-type': 'text/html'});  
    res.write("<h1>About page</h1>");
    res.end()  
    }
    //404 error
    else{
    res.writeHead(404 , {'content-type': 'text/html'});  
    res.write("<h1>404 ERROR</h1><h3>Page not found</h3>");
    res.end()  
    }


});

server.listen(3000, ()=>console.log("hello world!"));
