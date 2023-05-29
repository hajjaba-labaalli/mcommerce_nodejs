class Paiement {
    constructor(data) {
      this.id = data.id;
      this.montant = data.montant;
      this.datePaiement = data.datePaiement;
      this.commandeId = data.commandeId;
    }
  }
  
  module.exports = Paiement;
  