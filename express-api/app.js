const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json())
app.use(cors());

const mongooseConnect = require('./dbConnect');
mongooseConnect.dbconnect().on('error', (err) => console.log("Connection to DB failed"))

//Importing routes from routes(folder)
const getroute = require('./routes/GET');
const postroute = require('./routes/POST');
 
app.use('/GET', getroute);
app.use('/POST', postroute);

app.listen(3000, () => console.log("server started at port 3000"));

module.exports = app;