const express = require('express')
const routes = express.Router()

routes.get('/',(req,res)=>{res.render('index')})
routes.get('/index',(req,res)=>{res.render('index')})
routes.get('/second',(req,res)=>{res.render('second')})

module.exports = routes