class CommandeBean {
    constructor() {
      this.id = 0;
      this.productId = null;
      this.dateCommande = null;
      this.quantite = null;
      this.commandePayee = null;
    }
  
    setId(id) {
      this.id = id;
    }
  
    setProductId(productId) {
      this.productId = productId;
    }
  
    setDateCommande(dateCommande) {
      this.dateCommande = dateCommande;
    }
  
    setQuantite(quantite) {
      this.quantite = quantite;
    }
  
    setCommandePayee(commandePayee) {
      this.commandePayee = commandePayee;
    }
  
    toString() {
      return `CommandeBean{id=${this.id}, productId=${this.productId}, dateCommande=${this.dateCommande}, quantite=${this.quantite}, commandePayee=${this.commandePayee}}`;
    }
  }
  
  module.exports = CommandeBean;
  