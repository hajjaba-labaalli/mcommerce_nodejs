const express = require('express');
const router = express.Router();

const commandecontrollers = require('../../controllers/commandecontrollers');

// Routes pour les différentes actions de commande
router.post('/', commandecontrollers.ajouterCommande);
router.get('/:id', commandecontrollers.recupererUneCommande);
router.put('/', commandecontrollers.updateCommande);
router.post('/:id/marquerPayee', commandecontrollers.marquerCommandePayee);


// Export du routeur
module.exports = router;








