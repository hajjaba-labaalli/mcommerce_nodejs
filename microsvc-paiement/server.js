const express = require('express');
const bodyParser = require('body-parser');

const paiements = require('./routes/api/paiements');

const app = express();

app.use(bodyParser.json());

app.use('/api/paiements', paiements); 

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Serveur en écoute sur le port ${port}`) );
