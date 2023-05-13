const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommandeSchema = new Schema({
    
    
    id:{
        type: Int, 
        required: true
    },
    productId:{
        type: Int,
        required: false    
    },
    dateCommande:{
        type: Date,
        required: true
    },
    commandePayee:{
        type: Boolean,
        required: true
    }
});

module.exports = Commande = mongoose.model('commande', CommandeSchema);