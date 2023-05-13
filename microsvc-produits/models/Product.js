const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    
    
    titre:{
        type: String, 
        required: true
    },
    description:{
        type: String,
        required: false    
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
});

module.exports = Product = mongoose.model('product', ProductSchema);