const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const Commande = require('../../models/Commande');

// Route POST pour ajouter une commande

router.post('/', (req, res) => {
  try {
    const newCommande = new Commande(
      id= uuidv4(),
      productId= req.body.productId,
      dataCommande= new Date(),
      quantite= req.body.quantite,
      commandePayee= false
    );
    Commande.save(newCommande)
    res.status(201).json(newCommande);
  } catch (error) {
    res.status(500).json({ error: "Impossible d'ajouter cette commande" });
    }
});

// Route GET pour récupérer une commande par son ID
router.get('/:id',  (req, res) => {
  try {
    const commande = Commande.findById(req.params.id);
    if (!commande) {
      res.status(404).json({ message: 'Cette commande n\'existe pas' });
    } else {
      res.json(commande);
      }
  } catch (error) {
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération de la commande' });
  }
});

// Route PUT pour mettre à jour une commande existante
router.put('/:id',  (req, res) => {
  try {
    const commande= Commande.update(req.params.id, req.body);
    if (!commande) {
      res.status(404).json({ message: 'Cette commande n\'existe pas' });
    } else {
      res.json(commande);
    }
  } catch (error) {
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la mise à jour de la commande' });
  }
});

module.exports = router
