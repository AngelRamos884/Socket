'use strict'

const express = require('express')();
const server = require('http').Server(express);
const socket = require('socket.io')(server);
const bParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

server.listen(config.PORT, (err)=>{
    if(err) throw err;

    console.log("Servidor escuchando en puerto: " + config.PORT);

})

express.use(bParser({extended:false}));
express.use(bParser.json());
