// A file to initialise and configure a server instance
const express = require("express");
const mongoose = require("mongoose");
const createServer = require("./server");
 
mongoose
    .connect(
        "mongodb+srv://User:8d1u4wO4M5jpuVhL@dndproject.rwoe3.mongodb.net/Website?retryWrites=true&w=majority"
    )
    .then((_) => {
        // console.log("Connected successfully to MongoDB");
        const app = createServer()
        app.listen(5000, () => {
            console.log("Server has started")
        })
    })
    .catch((e) => {
        console.log("Connection to MongoDB failed");
        console.log(e);
    });