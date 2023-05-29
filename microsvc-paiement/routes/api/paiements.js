const express = require('express');
const router = express.Router();
const paiementcontrollers = require('../../controllers/paiementcontrollers');

router.post('/paiements', paiementcontrollers.effectuerPaiement);
router.delete('/paiements/:id', paiementcontrollers.annulerPaiement);

module.exports = router;
