'use strict';
var http = require('http');
var url = require('url');
var port = process.env.PORT || 1337;
var fs = require('fs');
var gf = require('./GoblinFight');
var qs = require('querystring');


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var data = fs.readFileSync('Page1.html', 'utf8');

    var battle;

    if (req.method === 'POST') {
        let body = []; //define an empty array
        req.on('data', (chunk) => {
            body.push(chunk); //each time some information comes in, add it to body
        }).on('end', () => {
            body = Buffer.concat(body).toString(); //convert body into a string
            var post = qs.parse(body); //parse the string into a dictionary
            battle = gf.fight(post['heroHealth']); //it can now be used as a variable
            data = data.replace(/Roll.battle/ig, battle);
            res.end(data); //local variable so FOR SOME REASON it needs to be in here or it won't release the variable, setting it to undefined again. returns don't work
        });
    }
    if (req.method != 'POST') {
        battle = '<form method="POST" action="/">Hero Health<input type="text" id="heroHealth" name="heroHealth"><input type="submit" value="Submit">';
        data = data.replace(/Roll.battle/ig, battle);
        res.end(data);
    }




}).listen(port);
