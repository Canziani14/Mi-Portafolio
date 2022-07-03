const express = require ("express");
const app = express()
const router= require ("./routers/main")
const path = require("path");


app.listen (3000, function(){
    console.log ("servidor funcionando")
});



app.use("/", router);

app.use(express.static(__dirname + '/public'));





