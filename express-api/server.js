const express = require("express");
const router = express.Router();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Importing routes from routes(folder)
// const postroute = require('./routes/POST')(io);
// const patchroute = require('./routes/PATCH');
// const getroute = require('./routes/GET');
// const deleteroute = require('./routes/DELETE');
// const putroute = require('./routes/PUT');
 
// app.use('/POST',postroute);
// app.use('/PATCH',patchroute);
// app.use('/GET',getroute);
// app.use('/DELETE',deleteroute);
// app.use('/PUT',putroute);

 
// // Connect to the database using the connection string
// mongoose
//     .connect(
//         "mongodb+srv://User:8d1u4wO4M5jpuVhL@dndproject.rwoe3.mongodb.net/Website?retryWrites=true&w=majority"
//     )
//     .then((_) => {
//         // console.log("Connected successfully to MongoDB");
//     })
//     .catch((e) => {
//         console.log("Connection to MongoDB failed");
//         console.log(e);
//     });
 
 
// // Run the server
// const PORT = process.env.PORT || 8000;
// server.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });

function createServer(){
    const app = express();
    //This is used to parse the body of the request
    app.use(express.json());
    //This is an HTTP-header mechanism allowing a server to indicate domain, schemes, ports other than its own.
    app.use(cors());

    const getroute = require('./routes/GET');
    app.use('/GET', getroute);
    return app;
}

module.exports = createServer;