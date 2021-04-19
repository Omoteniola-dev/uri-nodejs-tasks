const http = require('http'); //import the http module
const fs = require('fs') // import the file system module
const fetch = require('node-fetch') //import the node-fetch module to enable usage of the fetch function.

fetch('https://jsonplaceholder.typicode.com/posts') //fetching data from jsonplaceholder api
    .then(res =>res.json()) //callback function to convert response to json format
    .then( data =>  fs.writeFile("./result/post.json", JSON.stringify(data, null, 2), function(err){  //callback function to handle errors, create and write to the post.json file
        if(err) throw err;
        console.log("File created successfully")
    }))  

const server = http.createServer(function(req, res){ //creating the server
    res.writeHead(200, "Content-Type: text/html");
    res.end("Hello world") //Dummy text on the page.
})
port = 8000

server.listen(port, function(){
    console.log(`Server is listening at port ${port}`);
})

