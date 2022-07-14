
const mongoose = require('mongoose')

const ConnectDb= async=> { mongoose.connect(process.env.MONGO_URI,(err)=>{
    if(err) throw err;
    console.log('Connection is done successfuly');
});

}

module.exports = ConnectDb