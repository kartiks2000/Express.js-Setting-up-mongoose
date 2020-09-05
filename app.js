const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');

const app = express();
console.log("*******************************************************************"); 

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views','views');

const userroutes = require('./routes/userroutes');
const adminroutes = require('./routes/adminroutes');

app.use(userroutes);
app.use(adminroutes);



mongoose.connect('mongodb+srv://kartik:kartiksaxena@cluster0.nervh.mongodb.net/mydb?retryWrites=true&w=majority')
.then((res)=>{
    console.log("Connection established!!!");
    app.listen(3000);
})
.catch((err)=>{
    console.log("Sorry, cant establish a connection!!!");
    console.log(err);
});