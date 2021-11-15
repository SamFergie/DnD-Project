// A file to initialise and configure a server instance
const express = require("express");
const mongoose = require("mongoose");

const DB_uri = "mongodb+srv://User:8d1u4wO4M5jpuVhL@dndproject.rwoe3.mongodb.net/Website?retryWrites=true&w=majority";

function dbconnect() {
    mongoose.connect(DB_uri, { })
    return mongoose.connection
  }
  
  function dbclose() {
    return mongoose.disconnect();
  }

module.exports = {dbconnect, dbclose};