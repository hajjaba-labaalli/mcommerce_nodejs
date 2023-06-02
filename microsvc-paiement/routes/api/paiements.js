const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();

const Paiement = require('../../models/Paiement');

router.post('/', (req, res) => {
    try {
        //Vérifions s'il y a déjà un paiement enregistré pour cette commande
        const paiementExistant = Paiement.findByCommandeId(req.body.idCommande);
        console.log(req.body);
        if (paiementExistant) {
            res.json({error: "Cette commande est déjà payée"});
            
        }
        // Enregistrer le paiement
        const newPaiement = new Paiement (
            id= uuidv4(),
            idCommande= req.body.idCommande,
            montant= req.body.montant,
            numeroCarte= req.body.numeroCarte,
        );
        Paiement.save(newPaiement);
        res.json(newPaiement);
    }   catch (error) {
        res.status(500).json({error: 'erreur lors de l\'enregistrement'});
        }
});

module.exports = router;