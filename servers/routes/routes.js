const express = require('express')
const routes = express.Router()
const controller = require('../controller/controller')

routes.get('/',controller.homeroutes)
routes.get('/index',controller.homeroutes)
routes.get('/api/products', controller.find)
routes.get('/second',(req,res)=>{res.render('second')})



module.exports = routes