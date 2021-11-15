const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const app = express();

const mongooseConnect = require('./dbConnect');
mongooseConnect.dbconnect().on('error', (err) => console.log("Connection to DB failed"))

//Importing routes from routes(folder)
// const postroute = require('./routes/POST')(io);
// const patchroute = require('./routes/PATCH');
const getroute = require('./routes/GET');
// const deleteroute = require('./routes/DELETE');
// const putroute = require('./routes/PUT');
 
// app.use('/POST',postroute);
// app.use('/PATCH',patchroute);
app.use('/GET',getroute);
// app.use('/DELETE',deleteroute);
// app.use('/PUT',putroute);

app.listen(3000, () => console.log("server started at port 3000"));

module.exports = app;