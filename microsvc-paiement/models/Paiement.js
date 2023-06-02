var paiements = [];
class Paiement {
  constructor(id, idCommande, montant, numeroCarte) {
    this.id = id;
    this.idCommande = idCommande;
    this.montant = montant;
    this.numeroCarte = numeroCarte;
  }
  
  static findByCommandeId(idCommande) {
    return paiements.find(pmt => pmt.idCommande === idCommande);
  }

  static save(paiement) {
    paiements.push(paiement);
  }

  static update(id, updatedPaiement) {
    const paiementIndex = paiements.findIndex(cmd => cmd.id === id);
    if (paiementIndex === -1) {
      return null;
    }else{
      paiements[paiementIndex] = { ...paiements[paiementIndex], ...updatedPaiement };
      return paiements[paiementIndex];
    }
  }
}

module.exports = Paiement;
  