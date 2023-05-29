const Commande = require('../moduls/Commande');
const CommandeNotFoundException = require('../exceptions/CommandeNotFoundException');
const ImpossibleAjouterCommandeException = require('../exceptions/ImpossibleAjouterCommandeException');

const ajouterCommande = (req, res) => {
  const commande = new Commande(req.body);

  // Logique de sauvegarde de la commande

  if (!nouvelleCommande) {
    throw new ImpossibleAjouterCommandeException("Impossible d'ajouter cette commande");
  }

  res.status(201).json(commande);
};

const recupererUneCommande = (req, res) => {
  const id = req.params.id;

  // Logique de récupération d'une commande par son ID

  if (!commande) {
    throw new CommandeNotFoundException("Cette commande n'existe pas");
  }

  res.json(commande);
};

const updateCommande = (req, res) => {
  const commande = new Commande(req.body);

  // Logique de mise à jour de la commande

  res.sendStatus(204);
};

const marquerCommandePayee = (req, res) => {
  const id = req.params.id;

  // Logique pour marquer la commande comme payée dans la base de données

  res.sendStatus(204);
};

module.exports = {
  // ...
  marquerCommandePayee
};

module.exports = {
  ajouterCommande,
  recupererUneCommande,
  updateCommande,
  marquerCommandePayee
};
