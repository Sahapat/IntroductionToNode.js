# JavascriptLearning
CGM276 Gameimplement Let's start with javascript.

<hr>

## Goal
Create Web Server that can response with following tag.
'/' response <b>Hello.</b>
'/users' response <b> all users data as json format.</b>

<hr>

## Dependencies
This project use Node.js with web application framwork.
<b> Installation</b>
init node package
'npm init'
import express
'npm install express'

## Code

### Json Part
User data

'''json
{
    "user1": {
        "name": "Sahapat",
        "id": 5901292
    },
    "user2": {
        "name": "Tong-on",
        "id": 5901293
    }
}
'''

### Javascript Part

Import used function

'''javascript

    var express = require('express');
    var fs = require('fs')

'''

Create request and response the request function
When request '/'
'''javascript

    app.get("/", function (request, response) {
    response.send("Hello");
    })
    
'''
When request '/users'
'''javascript

    app.get("/users", function (request, response) {
    fs.readFile(__dirname + "/" + "user.json", "utf8", function (err, data) {
        console.log(data);
        response.send(data);
    })
    })

'''
Show Log when request and response
'''javascript

    var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Host: %s:%s", host, port);
    })

'''

## Result