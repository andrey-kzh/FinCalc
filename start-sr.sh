#!/bin/sh
service mongod start
cd ./server
supervisor index.js
