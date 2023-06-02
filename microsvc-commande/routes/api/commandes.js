const express = require('express');
const router = express.Router();
const axios = require('axios');

const Commande = require('../../models/Commande');

// Route POST pour ajouter une commande
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
});


// Route GET pour récupérer une commande par son ID
router.get('/:id',  (req, res) => {
    Commande.findById(req.params.id)
            .then(commande => {
                if (!commande) {
                    throw new Error('Cette commande n\'existe pas');
                }
                res.json(commande);
            })
            .catch(err => {
                res.status(404).json({ message: 'Cette commande n\'existe pas' })
            });
});

// Route PUT pour mettre à jour une commande existante
router.put('/:id',  (req, res) => {
    Commande.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(commande => {
                if (!commande) {
                    throw new Error('Cette commande n\'existe pas');
                }
                res.json(commande);
            })
            .catch(err => {
                res.status(404).json({ message: 'Cette commande n\'existe pas' })
            });
});

module.exports = router;

