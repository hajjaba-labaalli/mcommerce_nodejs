const express = require('express');
const bodyParser = require('body-parser');

const commandes = require('./routes/api/commandes');

// Création de l'application Express
const app = express();

// Middleware pour analyser les données JSON
app.use(express.json());

// Use routes 
app.use('/api/commandes' , commandes);

// Port d'écoute du serveur
const port = process.env.PORT || 3005;

// Démarrage du serveur
app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`) );
