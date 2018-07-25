//generic server template with express and bodyparser
//npm -v gives npm info, use for debugging node???
console.log('server.js is working');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(PORT, function(){
    console.log('app is running on port', PORT);
})

app.use(bodyParser.json()); // This line is required for Angular
//body parser has to run before the routes, put the routes below it on this page

//for mongodb
const mongoose = require('mongoose');
const databaseUrl = process.env.MONGODB_URI || `mongodb://localhost:27017/pets`;; //change to whatever the port is and the name of the project
mongoose.connect(databaseUrl);
mongoose.connection.on('connected', ()=>{
    console.log('mongoose connected to', databaseUrl);
}); //on successful mongoose connection
mongoose.connection.on('error', (error)=>{
    console.log('mongoose has failed with error code', error );
}); // on failed mongoose connection


