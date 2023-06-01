const express = require('express');
const router = express.Router();

const Commande = require('../../moduls/Commande');

// Route POST pour ajouter une commande
router.post('/commandes', async (req, res) => {
  try {
    const commande = new Commande(req.body);
    const nouvelleCommande = await commande.save();
    res.status(201).json(nouvelleCommande);
  } catch (error) {
    res.status(500).json({ message: "Impossible d'ajouter cette commande" });
  }
});

// Route GET pour récupérer une commande par son ID
router.get('/commandes/:id', async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id);
    if (!commande) {
      throw new Error('Cette commande n\'existe pas');
    }
    res.json(commande);
  } catch (error) {
    res.status(404).json({ message: 'Cette commande n\'existe pas' });
  }
});

// Route PUT pour mettre à jour une commande existante
router.put('/commandes/:id', async (req, res) => {
  try {
    const commande = await Commande.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!commande) {
      throw new Error('Cette commande n\'existe pas');
    }
    res.json(commande);
  } catch (error) {
    res.status(404).json({ message: 'Cette commande n\'existe pas' });
  }
});

module.exports = router;








