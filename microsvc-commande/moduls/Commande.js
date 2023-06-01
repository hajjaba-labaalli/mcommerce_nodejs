const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true
  },
  dateCommande: {
    type: Date,
    required: true
  },
  quantite: {
    type: Number,
    required: true
  },
  commandePayee: {
    type: Boolean,
    required: true
  }
});

const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;
  