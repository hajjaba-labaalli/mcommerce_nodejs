const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const axios = require('axios');
=======
const { v4: uuidv4 } = require('uuid');
>>>>>>> d71717804b6dd0957288014db9af20ce7d3d99de

const Commande = require('../../models/Commande');

// Route POST pour ajouter une commande
<<<<<<< HEAD
// Ajouter une commande
let commandes = [];
router.post('/', async (req, res) => {
    const newCommande = new Commande({
        productId: req.body.productId
    });
    
    commandes.push(newCommande);

    try {
        // Effectuer une requête HTTP synchronisée vers le microservice paiement
        const response = await axios.post('http://localhost:3002/paiements', {
            commandeId: newCommande.id,
            montant: newCommande.montant
        });

        // Traiter la réponse du microservice paiement
        if (response.status === 200) {
            // Paiement réussi, continuer avec la réponse au client
            res.json(newCommande);
        } else {
            // Gérer les erreurs de paiement
            res.status(500).json({ error: 'Erreur lors du paiement' });
        }
    } catch (error) {
        // Gérer les erreurs de la requête HTTP
        res.status(500).json({ error: 'Erreur lors de la communication avec le microservice paiement' });
    }
=======
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
>>>>>>> d71717804b6dd0957288014db9af20ce7d3d99de
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

module.exports = router;
