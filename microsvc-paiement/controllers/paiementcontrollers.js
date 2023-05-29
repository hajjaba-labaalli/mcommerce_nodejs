const Paiement = require('../moduls/Paiement');
const PaiementNotFoundException = require('../exceptions/PaiementNotFoundException');
const ImpossibleEffectuerPaiementException = require('../exceptions/ImpossibleEffectuerPaiementException');

const effectuerPaiement = (req, res) => {
  const paiement = new Paiement(req.body);

  // Logique pour effectuer le paiement

  if (paiement) {
    throw new ImpossibleEffectuerPaiementException("Impossible d'effectuer le paiement");
  }

  // Appel à l'API REST du microservice "commande" pour marquer la commande comme payée
  const commandeId = paiement.commandeId; // Récupérer l'ID de la commande associée au paiement

  // Effectuer une requête HTTP POST à l'API REST du microservice "commande" pour marquer la commande comme payée
  axios.post(`http://localhost:3001/commandes/${commandeId}/marquerPayee`)
    .then(response => {
      // Traitement de la réponse (optionnel)
      res.status(200).json(paiement);
    })
    .catch(error => {
      // Gérer les erreurs de la requête vers le microservice "commande"
      throw new ImpossibleEffectuerPaiementException("Erreur lors de la communication avec le microservice 'commande'");
    });
};


const annulerPaiement = (req, res) => {
  const id = req.params.id;

  // Logique pour annuler le paiement

  if (!paiement) {
    throw new PaiementNotFoundException("Paiement introuvable");
  }

  res.sendStatus(204);
};

module.exports = {
  effectuerPaiement,
  annulerPaiement
};


