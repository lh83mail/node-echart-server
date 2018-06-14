'use strict';
/**
 * 
 */

 
const express = require('express');
const bodyParser = require('body-parser');
const generate = require('./g-echart');


let port = 80;

const server=express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.post('/echarts', (req, res) =>  {
    try {
    res.status(200);
    res.header('Content-Type','image/png');
    res.send(generate(req.body));
 
    } catch(e) {
        res.status(500);
        res.send({
            status: 500,
            message: e.message
        });
    }
});

server.listen(port, () => {
    console.log(`server has stared on port ${port}`);
})
