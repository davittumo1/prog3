var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");
let {start} = require('repl');

 Grass = require("./grass");
 Grasseater = require("./grasseater");
 Gishatich = require("./gishatich");
 Amenaker = require("./amenaker");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
grassArr = [];
xotakerArr = [];
gishatichArr = [];
amenakerArr = [];
// matrix = [
//     [2, 2, 1, 2, 1, 0, 1],
//     [1, 2, 1, 0, 1, 1, 1],
//     [1, 0, 2, 0, 1, 0, 1],
//     [0, 1, 0, 1, 0, 0, 1],
//     [1, 2, 1, 0, 1, 1, 1],
//     [1, 0, 2, 0, 1, 0, 1],
//     [0, 1, 0, 1, 0, 1, 1],
//     [1, 2, 1, 0, 1, 1, 1],
//     [1, 0, 2, 0, 1, 0, 1],
//     [0, 1, 0, 1, 0, 0, 1],
//     [1, 2, 1, 0, 1, 1, 1],
//     [1, 0, 2, 0, 1, 0, 1],
//     [0, 1, 0, 1, 0, 0, 1]
// ]