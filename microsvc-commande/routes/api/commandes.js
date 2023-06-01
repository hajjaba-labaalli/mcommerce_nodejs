const express = require('express');
const router = express.Router();

const Commande = require('../../models/Commande');

// Route POST pour ajouter une commande

router.post('/', (req, res) => {
    const newCommande = new Commande({
        productId: req.body.productId
    });
    newCommande.save()
               .then( commande = res.status(201).json(newCommande))
               .catch( err => 
                res.status(404).json({error: "Impossible d'ajouter cette commande"})
               )
               

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

