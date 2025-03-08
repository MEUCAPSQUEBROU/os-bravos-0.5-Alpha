const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.write('Hello World! Você chegou ao top inicial!');
    res.end('Hello World!');
});

app.listen(8080);