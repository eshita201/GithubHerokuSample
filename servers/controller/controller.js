const Products= require("../model/product_model")
const axios=require('axios')
exports.homeroutes = 
    (req,res)=>{
        axios.get('todolistsforeshita.herokuapp.com/api/products').then(function(productData){
            res.render("index", { Products : productData.data})
        })
        .catch(err =>{
            res.send(err);
        })
    }


    
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Products.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                   res.send(data) 
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Products.find()
            .then(product => {
                res.send(product)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}