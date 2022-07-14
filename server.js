const express = require('express')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path');
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080
const app=express();
const axios=require('axios')
const ConnectDb = require('./servers/connections/connections')
ConnectDb();
app.use(bodyparser.urlencoded({extended: true}))
app.set("view engine","ejs")
app.use('/',require('./servers/routes/routes'));

app.listen(PORT,()=>{console.log(`App is running on http://localhost:${PORT} `)})