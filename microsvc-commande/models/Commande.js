const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
  id:{
    type: Number,
    required: false
  },
  productId: {
    type: Number,
    required: false
  },
  dateCommande: {
    type: Date,
    required: false
  },
  quantite: {
    type: Number,
    required: false
  },
  commandePayee: {
    type: Boolean,
    required: false
  }
})

const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;
  