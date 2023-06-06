const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const axios = require('axios');

const Paiement = require('../../models/Paiement');

router.post('/', async (req, res) => {
    try {
        //Vérifions s'il y a déjà un paiement enregistré pour cette commande
        const paiementExistant = await Paiement.findByCommandeId(req.body.idCommande);
        if (paiementExistant) {
            res.json({error: "Cette commande est déjà payée"});
            return;     
        } 

        const fetchCommande = async () => {
            try {
              const response = await axios.get(`http://localhost:3001/api/commandes/${req.body.idCommande}`);
                return response.data;
            } catch (error) {
                res.status(404).json({ error: 'Erreur lors de la récupération de la commande', paiementOk :false });
                console.error('Erreur lors de la récupération de la commande', error);
                return;
            }
        };

        const fetchedCommande = await fetchCommande();
        if (!fetchedCommande) {
            console.error('La commande n\'a pas été récupérée avec succès');
            return;
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

        fetchedCommande.commandePayee = true;
        console.log(fetchedCommande);

        // Mettre à jour la commande avec le statut de paiement
        await axios.put(`http://localhost:3001/api/commandes/${newPaiement.idCommande}`, fetchedCommande);

        // Envoyer une réponse réussie
        res.json({ success: "Paiement enregistré avec succès",paiementOk :true });
    }   catch (error) {
        console.error('Erreur lors de l\'enregistrement du paiement:', error);
        res.status(500).json({ error: 'Erreur lors de l\'enregistrement du paiement', paiementOk :false });
        }
});

module.exports = router;