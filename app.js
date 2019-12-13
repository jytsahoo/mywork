const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send("Say hello to GitHub");
})

app.listen(5000);