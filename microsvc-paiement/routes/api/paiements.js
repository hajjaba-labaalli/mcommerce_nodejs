const express = require('express');

const router = express.Router();

const Paiement = require('../../moduls/Paiement');
const Commande = require('../../../microsvc-commande/models/Commande');

// Route pour enregistrer un paiement et mettre à jour le statut de la commande
router.post('/paiement', async (req, res) => {
  try {
    const paiement = new Paiement(req.body);

    // Vérifier si un paiement existe déjà pour cette commande
    const paiementExistant = await Paiement.findOne({ idCommande: paiement.idCommande });
    if (paiementExistant) {
      throw new Error('Cette commande est déjà payée');
    }

    // Enregistrer le paiement
    const nouveauPaiement = await paiement.save();

    // Mettre à jour le statut de la commande
    const commande = await Commande.findOneAndUpdate(
      { id: paiement.idCommande },
      { commandePayee: true },
      { new: true }
    );

    // Envoyer la réponse avec le nouveau paiement
    res.status(201).json(nouveauPaiement);
  } catch (error) {
    // Gérer les erreurs
    if (error.message === 'Cette commande est déjà payée') {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Erreur lors de l\'établissement du paiement, veuillez réessayer plus tard' });
    }
  }
});

module.exports = router;
