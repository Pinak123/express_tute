// console.log("hello world!");
const http = require('http');
const {readFileSync} = require('fs');
const styles = readFileSync('./styles.css');
const data = readFileSync('./index.html');
const logo = readFileSync('./logo.svg');
const logic = readFileSync('./browser-app.js');

const server = http.createServer((req, res) =>{
    url = req.url;

    if (url == '/'){
    res.writeHead(200 , {'content-type': 'text/html'});  
    res.write(data);
    res.end()  

    }
    else if (url == '/about'){
    res.writeHead(200 , {'content-type': 'text/html'});  
    res.write("<h1>About page</h1>");
    res.end()  
    }
    else if (url == '/styles.css'){
        res.writeHead(200 , {'content-type': 'text/css'});  
        res.write(styles); 
        res.end() 
    }
    else if (url == '/logo.svg'){
        res.writeHead(200 , {'content-type': 'image/svg+xml'});  
        res.write(logo); 
        res.end() 
    }
    else if (url == '/browser-app.js'){
        res.writeHead(200 , {'content-type': 'text/javascript'});  
        res.write(logic); 
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
