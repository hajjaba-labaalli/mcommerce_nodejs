var commandes = [];
class Commande {
  constructor(id, productId, dateCommande, quantite, commandePayee){
    this.id = id;
    this.productId = productId;
    this.dateCommande = dateCommande;
    this.quantite = quantite;
    this.commandePayee = commandePayee;
  }
  
  static findById(id) {
    return commandes.find(cmd => cmd.id === id);
  }

  static save(commande) {
    commandes.push(commande);
  }

  static update(id, updatedCommande) {
    const commandeIndex = commandes.findIndex(cmd => cmd.id === id);
    if (commandeIndex === -1) {
      return null;
    }else{
      commandes[commandeIndex] = { ...commandes[commandeIndex], ...updatedCommande };
      return commandes[commandeIndex];
    }
  }
}

module.exports = Commande;
