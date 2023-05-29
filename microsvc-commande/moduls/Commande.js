class Commande {
    constructor(id, productId, dateCommande, quantite, commandePayee) {
      this.id = id;
      this.productId = productId;
      this.dateCommande = dateCommande;
      this.quantite = quantite;
      this.commandePayee = commandePayee;
    }
  
    // Méthodes supplémentaires et getters/setters si nécessaire
  
    toString() {
      return `Commande { id: ${this.id}, productId: ${this.productId}, dateCommande: ${this.dateCommande}, quantite: ${this.quantite}, commandePayee: ${this.commandePayee} }`;
    }
  }
  
  module.exports = Commande;
  