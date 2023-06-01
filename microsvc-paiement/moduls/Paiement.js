class Paiement {
  constructor() {
    this.id = 0;
    this.idCommande = null;
    this.montant = null;
    this.numeroCarte = null;
  }

  setId(id) {
    this.id = id;
  }

  setIdCommande(idCommande) {
    this.idCommande = idCommande;
  }

  setMontant(montant) {
    this.montant = montant;
  }

  setNumeroCarte(numeroCarte) {
    this.numeroCarte = numeroCarte;
  }

  toString() {
    return `Paiement{id=${this.id}, idCommande=${this.idCommande}, montant=${this.montant}, numeroCarte=${this.numeroCarte}}`;
  }
}

module.exports = Paiement;

  