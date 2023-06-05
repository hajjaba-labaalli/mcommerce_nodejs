const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const axios = require('axios');
const Paiement = require('../../models/Paiement');


router.post('/', async (req, res) => {
    try {
        //Vérifions s'il y a déjà un paiement enregistré pour cette commande
        const paiementExistant = await Paiement.findByCommandeId(req.body.idCommande);
        console.log(req.body);
        if (paiementExistant) {
            res.json({error: "Cette commande est déjà payée"});
            throw error;     
        }
        // Enregistrer le paiement
        const newPaiement = new Paiement (
            id= uuidv4(),
            idCommande= req.body.idCommande,
            montant= req.body.montant,
            numeroCarte= req.body.numeroCarte,
        );
        Paiement.save(newPaiement);
        console.log(newPaiement);

        const fetchCommande = async () => {
            try {
              const response = await axios.get(`http://localhost:3001/api/commandes/${newPaiement.idCommande}`);
              return response.data;
            } catch (error) {
              console.error('Erreur lors de la récupération de la commande:', error);
              throw error;
            }
        };

        const fetchedCommande = await fetchCommande();
        fetchedCommande.commandePayee = true;
        console.log(fetchedCommande);

        // Mettre à jour la commande avec le statut de paiement
        await axios.put(`http://localhost:3001/api/commandes/${newPaiement.idCommande}`, fetchedCommande);

        // Envoyer une réponse réussie
        res.json({ success: "Paiement enregistré avec succès" });
    }   catch (error) {
        console.error('Erreur lors de l\'enregistrement du paiement:', error);
        res.status(500).json({ error: 'Erreur lors de l\'enregistrement du paiement' });
        }
});

module.exports = router;