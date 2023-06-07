const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const products = require('./routes/api/products');
require('dotenv').config();
const cors = require('cors');


const app = express();

app.use(cors());


app.use(bodyParser.json());

const db = require('./src/data').mongoURI;

mongoose
        .connect(db)
        .then(() => console.log('Database Connected :) ...'))
        .catch( err => console.log(err));

app.use('/api/products', products);

app.get('/health',(req, res) => {
        res.send('server is running.');
});

app.get('/ready', (req , res) => {
        res.send('server is ready.'); 
});
const port = process.env.PORT || 5000;

app.listen(port , ()=> console.log('Server started on port ', port));